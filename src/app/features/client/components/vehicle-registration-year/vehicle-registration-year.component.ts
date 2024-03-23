import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'tamount-vehicle-registration-year',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-registration-year.component.html',
	styleUrl: './vehicle-registration-year.component.scss',
})
export class VehicleRegistrationYearComponent {
	registrationYearForm!: FormGroup;
	registrationYearMessage!: string;
	loading!: boolean;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.registrationYearForm = new FormGroup<{ year: FormControl }>({
			year: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (
			this.registrationYearForm.dirty &&
			this.registrationYearForm.valid &&
			this.registrationYearForm.status === 'VALID'
		) {
			// TODO: add year to the state
			this.router.navigateByUrl('profile/');
		} else {
			const typeErrors: ValidationErrors | null =
				this.registrationYearForm.controls['year'].errors;
			if (typeErrors) {
				if (typeErrors['pattern']) {
					this.registrationYearMessage = 'year is invalid';
				} else if (typeErrors['required']) {
					this.registrationYearMessage = 'year is required';
				}
			}
		}
	}
}
