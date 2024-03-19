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
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegistrationPageActions } from '@states/registration/actions/registration.page.actions';

@Component({
	selector: 'tamount-register-name',
	standalone: true,
	imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
	templateUrl: './register-name.component.html',
	styleUrl: './register-name.component.scss',
})
export class RegisterNameComponent implements OnInit {
	nameForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;
	firstNameErrorMessage: string = '';
	lastNameErrorMessage: string = '';

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit() {
		this.nameForm = new FormGroup<{
			firstName: FormControl;
			lastName: FormControl;
		}>({
			firstName: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.pattern(/^[a-zA-Z]{5,}$/),
			]),
			lastName: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.pattern(/^[a-zA-Z]{5,}$/),
			]),
		});
		this.errors = {};
		this.loading = false;
	}

	submit() {
		this.loading = true;
		if (
			this.nameForm.dirty &&
			this.nameForm.valid &&
			this.nameForm.status === 'VALID'
		) {
			this.loading = false;
			this.router.navigateByUrl('authentication/register/info/birthyear');
			this.store.dispatch(
				RegistrationPageActions.enterName({
					firstName: this.nameForm.controls['firstName'].value,
					lastName: this.nameForm.controls['lastName'].value,
				})
			);
		} else {
			this.loading = false;
			const firstNameErrors: ValidationErrors | null =
				this.nameForm.controls['firstName'].errors;
			const lastNameErrors: ValidationErrors | null =
				this.nameForm.controls['lastName'].errors;
			if (firstNameErrors) {
				if (firstNameErrors['pattern']) {
					this.firstNameErrorMessage = 'first name is invalid';
				} else if (firstNameErrors['required']) {
					this.firstNameErrorMessage = 'first name is required';
				}
			}
			if (lastNameErrors) {
				if (lastNameErrors['pattern']) {
					this.lastNameErrorMessage = 'last name is invalid';
				} else if (lastNameErrors['required']) {
					this.lastNameErrorMessage = 'last name is required';
				}
			}
		}
	}
}
