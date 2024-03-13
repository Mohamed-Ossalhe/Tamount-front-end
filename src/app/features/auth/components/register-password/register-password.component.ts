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
	passwordRegexPattern = new RegExp(
		'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
	);

	constructor(private router: Router) {}

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
			// TODO: add phone number to the state
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.errors['password'] = this.passwordForm.controls['password'].errors;
				console.log(this.errors);
			}
		}
	}
}
