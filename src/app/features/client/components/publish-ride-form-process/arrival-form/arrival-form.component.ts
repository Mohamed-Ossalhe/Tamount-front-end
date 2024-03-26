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
import { RidePageActions } from '@states/ride/actions/ride.page.actions';
import { Ride } from '@models/ride';
import { selectRide } from '@states/ride/ride.reducer';
import { LocationModel } from '@models/LocationModel';
import {
	AutoCompleteCompleteEvent,
	AutoCompleteModule,
} from 'primeng/autocomplete';
import { selectLocationCollection } from '@states/location/location.reducer';

@Component({
	selector: 'tamount-arrival-form',
	standalone: true,
	imports: [
		ButtonModule,
		FormsModule,
		InputTextModule,
		ReactiveFormsModule,
		AutoCompleteModule,
	],
	templateUrl: './arrival-form.component.html',
	styleUrl: './arrival-form.component.scss',
})
export class ArrivalFormComponent implements OnInit {
	form!: FormGroup;
	message!: string;
	loading!: boolean;

	countries: Signal<LocationModel[]> = this.store.selectSignal(
		selectLocationCollection
	);

	filteredCountries!: LocationModel[];

	ride: Signal<Ride> = this.store.selectSignal(selectRide) as Signal<Ride>;

	arrival!: LocationModel;

	searchFormGroup!: FormGroup;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.form = new FormGroup<{ arrival: FormControl }>({
			arrival: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;

		if (this.ride()) {
			this.arrival = this.ride().arrival as unknown as LocationModel;
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
		if (typeof this.arrival !== 'undefined' && this.arrival !== null) {
			console.log('arr exist');
			this.store.dispatch(RidePageActions.enterArrival({ arrival: this.arrival }));
			this.router.navigateByUrl('/profile/ride/add/departure-time');
		} else if (
			this.form.dirty &&
			this.form.valid &&
			this.form.status === 'VALID'
		) {
			console.log('arr not');
			const arrival = this.form.controls['arrival'].value;
			console.log(arrival);
			this.store.dispatch(RidePageActions.enterArrival({ arrival }));
			this.router.navigateByUrl('/profile/ride/add/departure-time');
		} else {
			const licenceErrors: ValidationErrors | null =
				this.form.controls['arrival'].errors;
			if (licenceErrors) {
				if (licenceErrors['pattern']) {
					this.message = 'arrival is invalid';
				} else if (licenceErrors['required']) {
					this.message = 'arrival is required';
				}
			}
		}
	}
}
