import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	Signal,
} from '@angular/core';
import {
	AutoCompleteCompleteEvent,
	AutoCompleteModule,
} from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { LocationModel } from '@models/LocationModel';
import { selectLocationCollection } from '@states/location/location.reducer';
import { Store } from '@ngrx/store';
import { LocationPageActions } from '@states/location/actions/location.page.actions';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';
import { SearchRequest } from '@interfaces/requests/search-request';

type SearchFilterType = {
	departure: LocationModel;
	arrival: LocationModel;
	date: string;
};

@Component({
	selector: 'tamount-search-filter',
	standalone: true,
	imports: [
		AutoCompleteModule,
		ButtonModule,
		CalendarModule,
		CardModule,
		InputNumberModule,
		ReactiveFormsModule,
	],
	providers: [DatePipe],
	templateUrl: './search-filter.component.html',
	styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent implements OnInit {
	@Input() filters!: SearchFilterType;
	@Output() filtersChange: EventEmitter<SearchFilterType> =
		new EventEmitter<SearchFilterType>();

	countries: Signal<LocationModel[]> = this.store.selectSignal(
		selectLocationCollection
	);

	filteredCountries!: LocationModel[];

	searchFormGroup!: FormGroup;

	constructor(
		private store: Store,
		private datePipe: DatePipe
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
			date: new FormControl(
				{ value: formatDate(new Date(), 'dd/MM/yyyy', 'en'), disabled: false },
				[Validators.required]
			),
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
		const request: SearchRequest = {
			departure: this.searchFormGroup.controls['departure'].value,
			arrival: this.searchFormGroup.controls['destination'].value,
			departureTime: this.searchFormGroup.controls['date'].value,
			seats: this.searchFormGroup.controls['passengersCount'].value,
		};
		this.filtersChange.emit({
			departure: this.searchFormGroup.controls['departure'].value,
			arrival: this.searchFormGroup.controls['destination'].value,
			date: this.datePipe.transform(
				this.searchFormGroup.controls['date'].value,
				'EEE, dd MMMM'
			) as string,
		});
		this.store.dispatch(RidePageActions.searchRides({ request }));
	}
}
