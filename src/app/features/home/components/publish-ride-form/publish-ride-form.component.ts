import { Component, OnInit, Signal } from '@angular/core';
import {
	AutoCompleteCompleteEvent,
	AutoCompleteModule,
} from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocationModel } from '@models/LocationModel';
import { selectLocationCollection } from '@states/location/location.reducer';
import { LocationPageActions } from '@states/location/actions/location.page.actions';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

@Component({
	selector: 'tamount-publish-ride-form',
	standalone: true,
	imports: [
		AutoCompleteModule,
		ButtonModule,
		CalendarModule,
		CardModule,
		FormsModule,
		InputNumberModule,
		ReactiveFormsModule,
	],
	templateUrl: './publish-ride-form.component.html',
	styleUrl: './publish-ride-form.component.scss',
})
export class PublishRideFormComponent implements OnInit {
	countries: Signal<LocationModel[]> = this.store.selectSignal(
		selectLocationCollection
	);

	filteredCountries!: LocationModel[];

	searchFormGroup!: FormGroup;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit() {
		this.store.dispatch(LocationPageActions.loadLocations());
		this.searchFormGroup = new FormGroup({
			departure: new FormControl({ value: '', disabled: false }, [
				Validators.required,
			]),
			destination: new FormControl({ value: '', disabled: false }, [
				Validators.required,
			]),
			passengersCount: new FormControl({ value: 1, disabled: false }, [
				Validators.required,
				Validators.min(1),
				Validators.max(5),
			]),
		});
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

	submitSearchForm() {
		if (
			this.searchFormGroup.dirty &&
			this.searchFormGroup.valid &&
			this.searchFormGroup.status === 'VALID'
		) {
			const departure = this.searchFormGroup.controls['departure'].value;
			const arrival = this.searchFormGroup.controls['destination'].value;
			const seats = this.searchFormGroup.controls['passengersCount'].value;

			this.store.dispatch(RidePageActions.enterDeparture({ departure }));
			this.store.dispatch(RidePageActions.enterArrival({ arrival }));
			this.store.dispatch(RidePageActions.enterSeats({ seats }));

			this.router.navigateByUrl('profile/ride/add');
		} else {
			this.router.navigateByUrl('profile/ride/add');
		}
	}
}
