import { Component, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
	AutoCompleteCompleteEvent,
	AutoCompleteModule,
} from 'primeng/autocomplete';
import { LocationModel } from '@models/LocationModel';
import { selectLocationCollection } from '@states/location/location.reducer';
import { LocationPageActions } from '@states/location/actions/location.page.actions';
import { selectRide } from '@states/ride/ride.reducer';
import { Ride } from '@models/ride';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';
@Component({
	selector: 'tamount-departure-form',
	standalone: true,
	imports: [
		ButtonModule,
		FormsModule,
		InputTextModule,
		ReactiveFormsModule,
		AutoCompleteModule,
	],
	templateUrl: './departure-form.component.html',
	styleUrl: './departure-form.component.scss',
})
export class DepartureFormComponent implements OnInit {
	form!: FormGroup;
	message!: string;
	loading!: boolean;

	countries: Signal<LocationModel[]> = this.store.selectSignal(
		selectLocationCollection
	);

	filteredCountries!: LocationModel[];

	ride: Signal<Ride> = this.store.selectSignal(selectRide) as Signal<Ride>;

	departure!: LocationModel;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.store.dispatch(LocationPageActions.loadLocations());
		this.form = new FormGroup<{ departure: FormControl }>({
			departure: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;

		if (this.ride()) {
			this.departure = this.ride().departure;
		}
	}

	filterCountry(event: AutoCompleteCompleteEvent) {
		const filtered: LocationModel[] = [];
		const query = event.query;

		for (const element of this.countries()) {
			const country = element;
			if (country.city.name.toLowerCase().startsWith(query.toLowerCase())) {
				filtered.push(country);
			}
		}

		this.filteredCountries = filtered;
	}

	submit() {
		if (typeof this.departure !== 'undefined' && this.departure !== null) {
			console.log('depa exist');
			this.store.dispatch(
				RidePageActions.enterDeparture({ departure: this.departure })
			);
			this.router.navigateByUrl('/profile/ride/add/arrival');
		} else if (
			this.form.dirty &&
			this.form.valid &&
			this.form.status === 'VALID'
		) {
			console.log('depa not');
			const departure = this.form.controls['departure'].value;
			console.log(departure);
			this.store.dispatch(RidePageActions.enterDeparture({ departure }));
			this.router.navigateByUrl('/profile/ride/add/arrival');
		} else {
			const licenceErrors: ValidationErrors | null =
				this.form.controls['departure'].errors;
			if (licenceErrors) {
				if (licenceErrors['pattern']) {
					this.message = 'departure is invalid';
				} else if (licenceErrors['required']) {
					this.message = 'departure is required';
				}
			}
		}
	}
}
