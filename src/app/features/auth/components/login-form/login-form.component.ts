import { Component, OnInit } from '@angular/core';
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
	loading!: boolean;
	errors!: ValidationErrors | null;

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
		this.loading = false;
	}

	submitLoginForm() {
		this.loading = true;
		if (
			this.loginForm.dirty &&
			this.loginForm.valid &&
			this.loginForm.status === 'VALID'
		) {
			this.loading = false;
			console.log('data', this.loginForm.value);
		} else {
			this.loading = false;
		}
	}
}
