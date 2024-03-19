import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegistrationPageActions } from '@states/registration/actions/registration.page.actions';

@Component({
	selector: 'tamount-register-birthyear',
	standalone: true,
	imports: [ButtonModule, InputTextModule, ReactiveFormsModule, CalendarModule],
	templateUrl: './register-birthyear.component.html',
	styleUrl: './register-birthyear.component.scss',
})
export class RegisterBirthyearComponent implements OnInit {
	birthYearForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;
	birthDateErrorMessage: string = '';

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit() {
		this.birthYearForm = new FormGroup<{ birthYear: FormControl }>({
			birthYear: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.errors = {};
		this.loading = false;
	}

	submit() {
		this.loading = true;
		if (
			this.birthYearForm.dirty &&
			this.birthYearForm.valid &&
			this.birthYearForm.status === 'VALID'
		) {
			this.loading = false;
			this.router.navigateByUrl('authentication/register/info/gender');
			this.store.dispatch(
				RegistrationPageActions.enterBirthDate({
					birthDate: this.birthYearForm.controls['birthYear'].value,
				})
			);
		} else {
			this.loading = false;
			const birthDateErrors: ValidationErrors | null =
				this.birthYearForm.controls['birthYear'].errors;
			if (birthDateErrors) {
				if (birthDateErrors['pattern']) {
					this.birthDateErrorMessage = 'birth date is invalid';
				} else if (birthDateErrors['required']) {
					this.birthDateErrorMessage = 'birth date is required';
				}
			}
		}
	}
}
