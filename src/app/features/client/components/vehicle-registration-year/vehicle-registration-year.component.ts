import { Component, OnInit, Signal } from '@angular/core';
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
import { selectCar } from '@states/vehicle/vehicle.reducer';
import { User } from '@models/user';
import { selectProfile } from '@states/profile/profile.reducer';
import { Car } from '@models/car';
import { CarRequest } from '@interfaces/requests/car-request';

@Component({
	selector: 'tamount-vehicle-registration-year',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './vehicle-registration-year.component.html',
	styleUrl: './vehicle-registration-year.component.scss',
})
export class VehicleRegistrationYearComponent implements OnInit {
	registrationYearForm!: FormGroup;
	registrationYearMessage!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.registrationYearForm = new FormGroup<{ year: FormControl }>({
			year: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
				Validators.maxLength(4),
				Validators.minLength(4),
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
			const year = this.registrationYearForm.controls['year'].value;
			this.store.dispatch(
				VehiclePageActions.enterVehicleRegistrationYear({ year })
			);
			this.createVehicle();
			this.router.navigateByUrl('/profile');
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

	createVehicle() {
		const car: Signal<Car | undefined> = this.store.selectSignal(selectCar);
		const user: Signal<User | undefined> = this.store.selectSignal(selectProfile);
		if (typeof car() !== 'undefined' && car() !== null) {
			const request: CarRequest = {
				model: car()?.model as string,
				make: car()?.make as string,
				color: car()?.color as string,
				comfort: 'Normal',
				category: car()?.category as string,
				licensePlate: car()?.licensePlate as string,
				registrationYear: car()?.registrationYear as number,
				user: user() as User,
			};
			this.store.dispatch(VehiclePageActions.createVehicle({ request }));
		}
	}
}
