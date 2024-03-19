import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
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
	selector: 'tamount-register-email',
	standalone: true,
	imports: [InputTextModule, ReactiveFormsModule, ButtonModule],
	templateUrl: './register-email.component.html',
	styleUrl: './register-email.component.scss',
})
export class RegisterEmailComponent implements OnInit {
	emailForm!: FormGroup;
	emailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	errors!: ValidationErrors | null;
	loading!: boolean;
	emailErrorMessage: string = '';

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit() {
		this.emailForm = new FormGroup<{ email: FormControl }>({
			email: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.pattern(this.emailRegexPattern),
			]),
		});
		this.errors = {};
		this.loading = false;
	}

	submit() {
		this.loading = true;
		if (
			this.emailForm.dirty &&
			this.emailForm.valid &&
			this.emailForm.status === 'VALID'
		) {
			this.loading = false;
			this.store.dispatch(
				RegistrationPageActions.enterEmail({
					email: this.emailForm.controls['email'].value,
				})
			);
			this.router.navigateByUrl('authentication/register/info/name');
		} else {
			this.loading = false;
			const emailErrors: ValidationErrors | null =
				this.emailForm.controls['email'].errors;
			if (emailErrors) {
				if (emailErrors['pattern']) {
					this.emailErrorMessage = 'email is invalid';
				} else if (emailErrors['required']) {
					this.emailErrorMessage = 'email is required';
				}
			}
		}
	}
}
