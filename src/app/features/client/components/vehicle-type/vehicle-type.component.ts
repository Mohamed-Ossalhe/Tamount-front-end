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
	selector: 'tamount-vehicle-type',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-type.component.html',
	styleUrl: './vehicle-type.component.scss',
})
export class VehicleTypeComponent implements OnInit {
	typeForm!: FormGroup;
	typeMessage!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.typeForm = new FormGroup<{ type: FormControl }>({
			type: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (
			this.typeForm.dirty &&
			this.typeForm.valid &&
			this.typeForm.status === 'VALID'
		) {
			const vehicleType = this.typeForm.controls['type'].value;
			this.store.dispatch(VehiclePageActions.enterVehicleType({ vehicleType }));
			this.router.navigateByUrl('profile/vehicle/add/color');
		} else {
			const typeErrors: ValidationErrors | null =
				this.typeForm.controls['type'].errors;
			if (typeErrors) {
				if (typeErrors['pattern']) {
					this.typeMessage = 'type is invalid';
				} else if (typeErrors['required']) {
					this.typeMessage = 'type is required';
				}
			}
		}
	}
}
