import { Component, OnInit } from '@angular/core';
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

@Component({
	selector: 'tamount-register-phone-number',
	standalone: true,
	imports: [
		ButtonModule,
		InputNumberModule,
		ReactiveFormsModule,
		InputTextModule,
		RouterLink,
	],
	templateUrl: './register-phone-number.component.html',
	styleUrl: './register-phone-number.component.scss',
})
export class RegisterPhoneNumberComponent implements OnInit {
	phoneNumberForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;

	constructor(private router: Router) {}

	ngOnInit() {
		this.phoneNumberForm = new FormGroup<{ phone: FormControl }>({
			phone: new FormControl<string>(
				{ value: '', disabled: false },
				Validators.required
			),
		});
		this.errors = {};
		this.loading = false;
	}

	submit() {
		this.loading = true;
		if (
			this.phoneNumberForm.dirty &&
			this.phoneNumberForm.valid &&
			this.phoneNumberForm.status === 'VALID'
		) {
			this.loading = false;
			this.router.navigateByUrl('authentication/register/phone/verify');
			// TODO: validate number using the code sent by sms to the user
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.errors['phone'] = this.phoneNumberForm.controls['phone'].errors;
				console.log(this.errors);
			}
		}
	}

	registerWithoutVerifyNumber() {
		// this.loading = true
		this.router.navigateByUrl('/');
		// TODO: register user without verifying his number and give the option to do it later
	}
}
