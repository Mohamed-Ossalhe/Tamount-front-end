import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	Signal,
	ViewChild,
} from '@angular/core';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';
import { selectProfile } from '@states/profile/profile.reducer';
import { selectRide } from '@states/ride/ride.reducer';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ride } from '@models/ride';
import { User } from '@models/user';
import { environment } from '@environments/environment.development';
import { BookingRequest } from '@interfaces/requests/booking-request';
import { ApprovalMode } from '@enums/approval-mode';
import { BookingStatus } from '@enums/booking-status';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@components/icon/icon.component';
import { ChargeRequest } from '@interfaces/requests/charge-request';
import { Currency } from '@enums/currency';
import { BookingPageActions } from '@states/booking/actions/booking.page.actions';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';
import { PaymentMethod } from '@enums/payment-method';

@Component({
	selector: 'tamount-stripe-checkout',
	standalone: true,
	imports: [ButtonModule, IconComponent, RouterLink],
	templateUrl: './stripe-checkout.component.html',
	styleUrl: './stripe-checkout.component.scss',
})
export class StripeCheckoutComponent implements AfterViewInit, OnInit {
	@ViewChild('cardElement') cardElement!: ElementRef;

	card!: StripeCardElement;

	stripe: Stripe | null = null;

	user: Signal<User> = this.store.selectSignal(selectProfile) as Signal<User>;
	ride: Signal<Ride> = this.store.selectSignal(selectRide) as Signal<Ride>;

	constructor(
		private store: Store,
		private router: Router
	) {}

	ngOnInit(): void {
		this.store.dispatch(ProfilePageActions.pageEnter());
	}

	async initializeStripe(): Promise<Stripe | null> {
		if (!this.stripe) {
			this.stripe = await loadStripe(environment.STRIPE);
		}
		return this.stripe;
	}

	async ngAfterViewInit() {
		await this.initializeStripe();
		if (this.stripe) {
			this.card = this.stripe.elements().create('card');
			this.card.mount(this.cardElement.nativeElement);
			this.card.on('ready', () => {
				// this.store.dispatch(PaymentPageActions.cardCheckoutEnter())
			});
		}
	}

	submit = async () => {
		if (this.stripe) {
			await this.stripe
				.createToken(this.card)
				.then(({ token, error }) => {
					if (error) {
						console.warn(error);
					}

					const chargeRequest: ChargeRequest = {
						paymentMethod: PaymentMethod.CREDIT_CARD,
						amount: this.ride().price,
						currency: Currency.MAD,
						token: token?.id as string,
					};

					const bookingRequest: BookingRequest = {
						bookingStatus:
							this.ride().approvalMode === ApprovalMode.INSTANT
								? BookingStatus.CONFIRMED
								: BookingStatus.PENDING,
						ride: this.ride(),
						user: this.user(),
						chargeRequest: chargeRequest,
					};
					console.log(bookingRequest);
					this.store.dispatch(
						BookingPageActions.createBooking({ request: bookingRequest })
					);
					this.router.navigateByUrl('/my-bookings');
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			console.warn('stripe could not init');
		}
	};
}
