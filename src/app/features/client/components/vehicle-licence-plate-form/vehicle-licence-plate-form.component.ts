import { Component, OnInit } from '@angular/core';
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
	selector: 'tamount-vehicle-licence-plate-form',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-licence-plate-form.component.html',
	styleUrl: './vehicle-licence-plate-form.component.scss',
})
export class VehicleLicencePlateFormComponent implements OnInit {
	licencePlateForm!: FormGroup;
	licencePlateMessage!: string;
	loading!: boolean;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.licencePlateForm = new FormGroup<{ licencePlate: FormControl }>({
			licencePlate: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (
			this.licencePlateForm.dirty &&
			this.licencePlateForm.valid &&
			this.licencePlateForm.status === 'VALID'
		) {
			// TODO: add plate to the state
			this.router.navigateByUrl('profile/vehicle/add/brand');
		} else {
			const licenceErrors: ValidationErrors | null =
				this.licencePlateForm.controls['licencePlate'].errors;
			if (licenceErrors) {
				if (licenceErrors['pattern']) {
					this.licencePlateMessage = 'licence plate is invalid';
				} else if (licenceErrors['required']) {
					this.licencePlateMessage = 'licence plate is required';
				}
			}
		}
	}

	continueWithoutPlate() {}
}
