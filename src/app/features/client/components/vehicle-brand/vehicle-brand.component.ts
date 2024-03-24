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
	selector: 'tamount-vehicle-brand',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-brand.component.html',
	styleUrl: './vehicle-brand.component.scss',
})
export class VehicleBrandComponent implements OnInit {
	brandForm!: FormGroup;
	brandMessage!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.brandForm = new FormGroup<{ brand: FormControl }>({
			brand: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (
			this.brandForm.dirty &&
			this.brandForm.valid &&
			this.brandForm.status === 'VALID'
		) {
			const vehicleBrand = this.brandForm.controls['brand'].value;
			this.store.dispatch(VehiclePageActions.enterVehicleBrand({ vehicleBrand }));
			this.router.navigateByUrl('profile/vehicle/add/model');
		} else {
			const brandErrors: ValidationErrors | null =
				this.brandForm.controls['brand'].errors;
			if (brandErrors) {
				if (brandErrors['pattern']) {
					this.brandMessage = 'brand is invalid';
				} else if (brandErrors['required']) {
					this.brandMessage = 'brand is required';
				}
			}
		}
	}
}
