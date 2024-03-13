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
import { Router } from '@angular/router';

@Component({
	selector: 'tamount-register-verify-phone-number',
	standalone: true,
	imports: [ButtonModule, InputNumberModule, ReactiveFormsModule],
	templateUrl: './register-verify-phone-number.component.html',
	styleUrl: './register-verify-phone-number.component.scss',
})
export class RegisterVerifyPhoneNumberComponent implements OnInit {
	verifyPhoneNumberForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;

	constructor(private router: Router) {}

	ngOnInit() {
		this.verifyPhoneNumberForm = new FormGroup<{ code: FormControl }>({
			code: new FormControl<string>(
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
			this.verifyPhoneNumberForm.dirty &&
			this.verifyPhoneNumberForm.valid &&
			this.verifyPhoneNumberForm.status === 'VALID'
		) {
			// TODO: validate the code and redirect to the home page
			this.router.navigateByUrl('/');
		} else {
			if (this.errors !== null) {
				this.errors['code'] = this.verifyPhoneNumberForm.controls['code'].errors;
				console.log(this.errors);
			}
		}
	}
}
