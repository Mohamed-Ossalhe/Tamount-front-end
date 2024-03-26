import { Component, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';
import { Ride } from '@models/ride';
import { selectRide } from '@states/ride/ride.reducer';
import { User } from '@models/user';
import { selectProfile } from '@states/profile/profile.reducer';
import { RideRequest } from '@interfaces/requests/ride-request';
import { LocationModel } from '@models/LocationModel';

@Component({
	selector: 'tamount-price-form',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './price-form.component.html',
	styleUrl: './price-form.component.scss',
})
export class PriceFormComponent implements OnInit {
	form!: FormGroup;
	message!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.form = new FormGroup<{ price: FormControl }>({
			price: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.min(20),
				Validators.max(200),
			]),
		});
		this.loading = false;
	}

	submit() {
		if (this.form.dirty && this.form.valid && this.form.status === 'VALID') {
			const price = this.form.controls['price'].value;
			this.store.dispatch(RidePageActions.enterPrice({ price }));
			this.publishRide();
		} else {
			const licenceErrors: ValidationErrors | null =
				this.form.controls['price'].errors;
			if (licenceErrors) {
				if (licenceErrors['pattern']) {
					this.message = 'price is invalid';
				} else if (licenceErrors['required']) {
					this.message = 'price is required';
				}
			}
		}
	}

	publishRide() {
		const ride: Signal<Ride> = this.store.selectSignal(
			selectRide
		) as Signal<Ride>;
		const user: Signal<User> = this.store.selectSignal(
			selectProfile
		) as Signal<User>;

		if (typeof ride() !== 'undefined' && ride()) {
			const request: RideRequest = {
				departure: ride().departure as unknown as LocationModel,
				arrival: ride().arrival as unknown as LocationModel,
				departureTime: ride().departureTime,
				approvalMode: ride().approvalMode,
				isComfort: ride().isComfort,
				womenOnly: ride().womenOnly,
				seats: ride().seats,
				price: ride().price,
				routeId: 'kqhdyu234KHJH',
				user: user(),
				vehicle: ride().vehicle,
			};
			this.store.dispatch(RidePageActions.publishRide({ request }));
		}
	}
}
