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
	selector: 'tamount-vehicle-model',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-model.component.html',
	styleUrl: './vehicle-model.component.scss',
})
export class VehicleModelComponent implements OnInit {
	modelForm!: FormGroup;
	modelMessage!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.modelForm = new FormGroup<{ model: FormControl }>({
			model: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (
			this.modelForm.dirty &&
			this.modelForm.valid &&
			this.modelForm.status === 'VALID'
		) {
			const vehicleModel = this.modelForm.controls['model'].value;
			this.store.dispatch(VehiclePageActions.enterVehicleModel({ vehicleModel }));
			this.router.navigateByUrl('profile/vehicle/add/type');
		} else {
			const modelErrors: ValidationErrors | null =
				this.modelForm.controls['model'].errors;
			if (modelErrors) {
				if (modelErrors['pattern']) {
					this.modelMessage = 'model is invalid';
				} else if (modelErrors['required']) {
					this.modelMessage = 'model is required';
				}
			}
		}
	}
}
