import { Component, OnInit, Signal } from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Store } from '@ngrx/store';
import { AuthenticationPageActions } from '@states/authentication/actions/authentication.page.actions';
import { selectLoading } from '@states/authentication/authentication.reducer';
import { AuthenticationRequest } from '@interfaces/requests/authentication-request';

@Component({
	selector: 'tamount-login-form',
	standalone: true,
	imports: [
		IconFieldModule,
		InputIconModule,
		InputTextModule,
		PasswordModule,
		ReactiveFormsModule,
		ButtonModule,
		DividerModule,
	],
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
	loginForm!: FormGroup;
	loading: Signal<boolean> = this.store.selectSignal(selectLoading);
	errors!: ValidationErrors | null;
	emailErrorMessage: string = '';
	passwordErrorMessage: string = '';

	constructor(private store: Store) {}

	emailRegexPattern = new RegExp(
		'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
	);

	passwordRegexPattern = new RegExp(
		'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
	);

	ngOnInit(): void {
		this.loginForm = new FormGroup<{ email: FormControl; password: FormControl }>(
			{
				email: new FormControl<string>({ value: '', disabled: false }, [
					Validators.required,
					Validators.email,
					Validators.pattern(this.emailRegexPattern),
				]),
				password: new FormControl<string>({ value: '', disabled: false }, [
					Validators.required,
					Validators.minLength(8),
					Validators.pattern(this.passwordRegexPattern),
				]),
			}
		);
	}

	submitLoginForm(): void {
		if (
			this.loginForm.dirty &&
			this.loginForm.valid &&
			this.loginForm.status === 'VALID'
		) {
			const request: AuthenticationRequest = {
				email: this.loginForm.controls['email'].value,
				password: this.loginForm.controls['password'].value,
			};
			this.store.dispatch(
				AuthenticationPageActions.authenticate({ request: request })
			);
		} else {
			const emailErrors: ValidationErrors | null =
				this.loginForm.controls['email'].errors;
			const passwordErrors: ValidationErrors | null =
				this.loginForm.controls['password'].errors;
			if (emailErrors) {
				if (emailErrors['pattern']) {
					this.emailErrorMessage = 'email is invalid';
				} else if (emailErrors['required']) {
					this.emailErrorMessage = 'email is required';
				}
			}
			if (passwordErrors) {
				if (passwordErrors['pattern']) {
					this.passwordErrorMessage =
						'password must be at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number and 8 characters long';
				} else if (passwordErrors['required']) {
					this.passwordErrorMessage = 'password is required';
				}
			}
		}
	}
}
