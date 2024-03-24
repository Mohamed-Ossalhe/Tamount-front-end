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
import { Store } from '@ngrx/store';
import { VehiclePageActions } from '@states/vehicle/actions/vehicle.page.actions';

@Component({
	selector: 'tamount-vehicle-color',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-color.component.html',
	styleUrl: './vehicle-color.component.scss',
})
export class VehicleColorComponent implements OnInit {
	colorForm!: FormGroup;
	colorMessage!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.colorForm = new FormGroup<{ color: FormControl }>({
			color: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (
			this.colorForm.dirty &&
			this.colorForm.valid &&
			this.colorForm.status === 'VALID'
		) {
			const vehicleColor = this.colorForm.controls['color'].value;
			this.store.dispatch(VehiclePageActions.enterVehicleColor({ vehicleColor }));
			this.router.navigateByUrl('profile/vehicle/add/registration-year');
		} else {
			const typeErrors: ValidationErrors | null =
				this.colorForm.controls['color'].errors;
			if (typeErrors) {
				if (typeErrors['pattern']) {
					this.colorMessage = 'color is invalid';
				} else if (typeErrors['required']) {
					this.colorMessage = 'color is required';
				}
			}
		}
	}
}
