import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
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
import { formatDate } from '@angular/common';

interface AutoCompleteCompleteEvent {
	originalEvent: Event;
	query: string;
}

type Country = {
	name: string;
	code: string;
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
	templateUrl: './search-filter.component.html',
	styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent implements OnInit {
	countries!: Country[];

	filteredCountries!: Country[];

	searchFormGroup!: FormGroup;

	constructor() {}

	ngOnInit() {
		this.countries = [
			{
				name: 'Afghanistan',
				code: 'AF',
			},
			{
				name: 'Afghanistan',
				code: 'AF',
			},
			{
				name: 'Afghanistan',
				code: 'AF',
			},
			{
				name: 'Afghanistan',
				code: 'AF',
			},
		];
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
		const filtered: Country[] = [];
		const query = event.query;

		for (let i = 0; i < (this.countries as Country[]).length; i++) {
			const country = (this.countries as Country[])[i];
			if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
				filtered.push(country);
			}
		}

		this.filteredCountries = filtered;
	}

	submitSearchForm() {
		console.log(this.searchFormGroup.value);
	}
}
