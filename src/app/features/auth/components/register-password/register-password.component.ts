import { Component, OnInit } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegistrationPageActions } from '@states/registration/actions/registration.page.actions';

@Component({
	selector: 'tamount-register-password',
	standalone: true,
	imports: [PasswordModule, ReactiveFormsModule, ButtonModule],
	templateUrl: './register-password.component.html',
	styleUrl: './register-password.component.scss',
})
export class RegisterPasswordComponent implements OnInit {
	passwordForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;
	passwordRegexPattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	passwordErrorsMessage: string = '';

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit() {
		this.passwordForm = new FormGroup<{ password: FormControl }>({
			password: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.pattern(this.passwordRegexPattern),
			]),
		});
		this.errors = {};
		this.loading = false;
	}

	submit() {
		this.loading = true;
		if (
			this.passwordForm.dirty &&
			this.passwordForm.valid &&
			this.passwordForm.status === 'VALID'
		) {
			this.loading = false;
			this.router.navigateByUrl('authentication/register/info/phone');
			this.store.dispatch(
				RegistrationPageActions.enterPassword({
					password: this.passwordForm.controls['password'].value,
				})
			);
		} else {
			this.loading = false;
			const passwordErrors: ValidationErrors | null =
				this.passwordForm.controls['password'].errors;
			if (passwordErrors) {
				if (passwordErrors['pattern']) {
					this.passwordErrorsMessage = 'password is invalid';
				} else if (passwordErrors['required']) {
					this.passwordErrorsMessage = 'password is required';
				}
			}
		}
	}
}
