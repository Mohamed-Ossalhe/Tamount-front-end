import { Component, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { Store } from '@ngrx/store';
import { RegistrationPageActions } from '@states/registration/actions/registration.page.actions';
import { selectRegistrationState } from '@states/registration/registration.reducer';
import { RegistrationState } from '@interfaces/registration-state';
import { PhoneRequest } from '@interfaces/requests/phone-request';
import { RegionCode } from '@enums/region-code';
import {
	AutoCompleteCompleteEvent,
	AutoCompleteModule,
} from 'primeng/autocomplete';
import { NumberFormatterPipe } from '@pipes/number-formatter.pipe';
import { AuthenticationPageActions } from '@states/authentication/actions/authentication.page.actions';
import { selectErrors } from '@states/authentication/authentication.reducer';
import { HttpErrorResponse } from '@angular/common/http';

type Country = {
	name: string;
	code: string;
	no: number;
};

@Component({
	selector: 'tamount-register-phone-number',
	standalone: true,
	imports: [
		ButtonModule,
		InputNumberModule,
		ReactiveFormsModule,
		InputTextModule,
		RouterLink,
		AutoCompleteModule,
	],
	providers: [NumberFormatterPipe],
	templateUrl: './register-phone-number.component.html',
	styleUrl: './register-phone-number.component.scss',
})
export class RegisterPhoneNumberComponent implements OnInit {
	phoneNumberForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;
	phoneNumberErrorsMessage: string = '';
	countryCodeErrorsMessage: string = '';

	countries!: Country[];

	filteredCountries!: Country[];

	constructor(
		private router: Router,
		private store: Store,
		private numberFormatter: NumberFormatterPipe
	) {}

	ngOnInit() {
		this.countries = [
			{
				name: 'Morocco',
				code: RegionCode.MA,
				no: 212,
			},
		];

		this.phoneNumberForm = new FormGroup<{
			phone: FormControl;
			countryCode: FormControl;
		}>({
			phone: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.pattern(/^0\d{9}$/),
			]),
			countryCode: new FormControl<string>({ value: '', disabled: true }, [
				Validators.required,
			]),
		});
		this.errors = {};
		this.loading = false;
	}

	filterCountry(event: AutoCompleteCompleteEvent) {
		const filtered: Country[] = [];
		const query = event.query;

		for (const element of this.countries) {
			const country = element;
			if (country.name.toLowerCase().startsWith(query.toLowerCase())) {
				filtered.push(country);
			}
		}

		this.filteredCountries = filtered;
	}

	submit() {
		this.loading = true;
		if (
			this.phoneNumberForm.dirty &&
			this.phoneNumberForm.valid &&
			this.phoneNumberForm.status === 'VALID'
		) {
			this.loading = false;
			const phoneNumber: PhoneRequest = {
				formattedNumber:
					'+212' + this.phoneNumberForm.controls['phone'].value.substring(1),
				nationalNumber: this.phoneNumberForm.controls['phone'].value.substring(1),
				internationalFormattedNumber:
					'+212 ' +
					this.numberFormatter.transform(
						this.phoneNumberForm.controls['phone'].value
					),
				nationalFormattedNumber:
					'0' +
					this.numberFormatter.transform(
						this.phoneNumberForm.controls['phone'].value
					),
				regionCode: RegionCode.MA,
			};
			this.store.dispatch(
				RegistrationPageActions.enterPhone({ phoneNumber: phoneNumber })
			);
			this.registerUser();
			this.router.navigateByUrl('authentication/register/phone/verify');
		} else {
			this.loading = false;
			const phoneErrors: ValidationErrors | null =
				this.phoneNumberForm.controls['phone'].errors;
			if (phoneErrors) {
				if (phoneErrors['pattern']) {
					this.phoneNumberErrorsMessage = 'phone number is invalid';
				} else if (phoneErrors['required']) {
					this.phoneNumberErrorsMessage = 'phone number is required';
				}
			}
			const countryCodeErrors: ValidationErrors | null =
				this.phoneNumberForm.controls['countryCode'].errors;
			if (countryCodeErrors) {
				if (countryCodeErrors['pattern']) {
					this.countryCodeErrorsMessage = 'phone number is invalid';
				} else if (countryCodeErrors['required']) {
					this.countryCodeErrorsMessage = 'phone number is required';
				}
			}
		}
	}

	registerWithoutVerifyNumber() {
		this.registerUser();
		const validationErrors: Signal<HttpErrorResponse> = this.store.selectSignal(
			selectErrors
		) as Signal<HttpErrorResponse>;
		if (typeof validationErrors !== 'undefined') {
			const errors: HttpErrorResponse = validationErrors();
			console.log(errors);
		}
	}

	registerUser() {
		const registrationRequest: Signal<RegistrationState> =
			this.store.selectSignal(selectRegistrationState);
		if (registrationRequest() !== null) {
			this.store.dispatch(
				AuthenticationPageActions.register({ request: registrationRequest() })
			);
		}
	}
}
