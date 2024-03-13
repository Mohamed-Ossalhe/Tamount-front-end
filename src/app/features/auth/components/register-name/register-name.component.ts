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

	constructor(private router: Router) {}

	ngOnInit() {
		this.nameForm = new FormGroup<{
			firstName: FormControl;
			lastName: FormControl;
		}>({
			firstName: new FormControl<string>(
				{ value: '', disabled: false },
				Validators.required
			),
			lastName: new FormControl<string>(
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
			this.nameForm.dirty &&
			this.nameForm.valid &&
			this.nameForm.status === 'VALID'
		) {
			this.loading = false;
			this.router.navigateByUrl('authentication/register/info/birthyear');
			// TODO: add name to the state
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.errors['firstName'] = this.nameForm.controls['firstName'].errors;
				this.errors['lastName'] = this.nameForm.controls['lastName'].errors;
				console.log(this.errors);
			}
		}
	}
}
