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
import { Ride } from '@models/ride';
import { selectRide } from '@states/ride/ride.reducer';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

@Component({
	selector: 'tamount-seats-form',
	standalone: true,
	imports: [ButtonModule, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './seats-form.component.html',
	styleUrl: './seats-form.component.scss',
})
export class SeatsFormComponent implements OnInit {
	form!: FormGroup;
	message!: string;
	loading!: boolean;

	ride: Signal<Ride> = this.store.selectSignal(selectRide) as Signal<Ride>;
	seats: string = '1';
	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.form = new FormGroup<{ seats: FormControl }>({
			seats: new FormControl<string>({ value: this.seats, disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
		if (this.ride()) {
			this.seats = this.ride().seats.toString();
		}
	}

	submit() {
		if (this.form.dirty && this.form.valid && this.form.status === 'VALID') {
			const seats = this.form.controls['seats'].value;
			this.store.dispatch(RidePageActions.enterSeats({ seats }));
			this.router.navigateByUrl('/profile/ride/add/approval');
		} else {
			const licenceErrors: ValidationErrors | null =
				this.form.controls['seats'].errors;
			if (licenceErrors) {
				if (licenceErrors['pattern']) {
					this.message = 'seats is invalid';
				} else if (licenceErrors['required']) {
					this.message = 'seats is required';
				}
			}
		}
	}
}
