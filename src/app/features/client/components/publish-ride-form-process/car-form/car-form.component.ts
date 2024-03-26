import { Component, OnInit, Signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { selectCarCollection } from '@states/vehicle/vehicle.reducer';
import { Car } from '@models/car';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

@Component({
	selector: 'tamount-car-form',
	standalone: true,
	imports: [ReactiveFormsModule, InputTextModule, ButtonModule],
	templateUrl: './car-form.component.html',
	styleUrl: './car-form.component.scss',
})
export class CarFormComponent implements OnInit {
	form!: FormGroup;
	message!: string;
	loading!: boolean;

	cars: Signal<Car[]> = this.store.selectSignal(selectCarCollection);

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.loading = false;
	}

	chooseCar(event: Event) {
		if (event !== null) {
			const carBtn: HTMLButtonElement = event.currentTarget as HTMLButtonElement;
			let chosenCar: Car | null = null;
			for (const element of this.cars()) {
				if (element.id.startsWith(carBtn.id)) {
					chosenCar = element;
				}
			}
			if (chosenCar !== null) {
				this.store.dispatch(RidePageActions.chooseCar({ car: chosenCar }));
				this.router.navigateByUrl('profile/ride/add/comfort');
			} else {
				this.message = 'please chose a car!';
			}
		} else {
			this.message = 'please choose a car!';
		}
	}
}
