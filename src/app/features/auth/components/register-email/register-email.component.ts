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

@Component({
	selector: 'tamount-register-email',
	standalone: true,
	imports: [InputTextModule, ReactiveFormsModule, ButtonModule],
	templateUrl: './register-email.component.html',
	styleUrl: './register-email.component.scss',
})
export class RegisterEmailComponent implements OnInit {
	emailForm!: FormGroup;
	emailRegexPattern = new RegExp(
		'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
	);
	errors!: ValidationErrors | null;
	loading!: boolean;

	constructor(private router: Router) {}

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
			this.router.navigateByUrl('authentication/register/info/name');
			// TODO: add the email to the state
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.errors['email'] = this.emailForm.controls['email'].errors;
				console.log(this.errors);
			}
		}
	}
}
