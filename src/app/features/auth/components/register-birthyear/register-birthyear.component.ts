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
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';

@Component({
	selector: 'tamount-register-birthyear',
	standalone: true,
	imports: [ButtonModule, InputTextModule, ReactiveFormsModule, CalendarModule],
	templateUrl: './register-birthyear.component.html',
	styleUrl: './register-birthyear.component.scss',
})
export class RegisterBirthyearComponent implements OnInit {
	birthYearForm!: FormGroup;
	errors!: ValidationErrors | null;
	loading!: boolean;

	constructor(private router: Router) {}

	ngOnInit() {
		this.birthYearForm = new FormGroup<{ birthYear: FormControl }>({
			birthYear: new FormControl<string>(
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
			this.birthYearForm.dirty &&
			this.birthYearForm.valid &&
			this.birthYearForm.status === 'VALID'
		) {
			this.loading = false;
			this.router.navigateByUrl('authentication/register/info/gender');
			// TODO: add birth year to the state
		} else {
			this.loading = false;
			if (this.errors !== null) {
				this.errors['birthYear'] = this.birthYearForm.controls['birthYear'].errors;
				console.log(this.errors);
			}
		}
	}
}
