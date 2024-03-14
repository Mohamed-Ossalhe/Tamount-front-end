import { Component, OnInit } from '@angular/core';
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

type Country = {
	name: string;
	code: string;
};

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
