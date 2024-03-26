import { Component, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@components/icon/icon.component';
import { SharedModule } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Store } from '@ngrx/store';
import { Ride } from '@models/ride';
import { selectRide } from '@states/ride/ride.reducer';
import { PaymentMethod } from '@enums/payment-method';
import { Router } from '@angular/router';

interface PaymentMethodType {
	value: string;
	label: string;
	icon: string;
	status: 'active' | 'inactive';
}

@Component({
	selector: 'tamount-payment-methods',
	standalone: true,
	imports: [ButtonModule, IconComponent, SharedModule, RadioButtonModule],
	templateUrl: './payment-methods.component.html',
	styleUrl: './payment-methods.component.scss',
})
export class PaymentMethodsComponent implements OnInit {
	paymentMethods!: PaymentMethodType[];
	method!: string;
	errorMessage!: string;

	ride: Signal<Ride> = this.store.selectSignal(selectRide) as Signal<Ride>;

	constructor(
		private store: Store,
		private router: Router
	) {}

	ngOnInit(): void {
		this.paymentMethods = [
			{
				value: PaymentMethod.CREDIT_CARD,
				label: 'Credit Card',
				icon: 'credit-card',
				status: 'active',
			},
			{
				value: PaymentMethod.PAYPAL,
				label: 'Paypal',
				icon: 'paypal',
				status: 'active',
			},
			{
				value: PaymentMethod.CASH,
				label: 'Cash',
				icon: 'money-bill',
				status: 'active',
			},
			{
				value: 'google-pay',
				label: 'Google Pay',
				icon: 'google',
				status: 'inactive',
			},
			{
				value: 'apple-pay',
				label: 'Apple Pay',
				icon: 'apple',
				status: 'inactive',
			},
		];
	}

	selectMethod(e: Event): void {
		if (e !== null) {
			const methodBtn: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
			if (methodBtn !== null) {
				methodBtn.className = 'border-2 border-tamount-primary rounded';
				this.method = methodBtn.id;
			}
		} else {
			this.errorMessage = 'payment method is required';
		}
	}

	submitPayment(): void {
		if (this.method === PaymentMethod.CREDIT_CARD) {
			this.router.navigateByUrl('/card-checkout');
		}
	}
}
