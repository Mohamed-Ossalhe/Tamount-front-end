import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

@Component({
	selector: 'tamount-departure-time-form',
	standalone: true,
	imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CalendarModule],
	templateUrl: './departure-time-form.component.html',
	styleUrl: './departure-time-form.component.scss',
})
export class DepartureTimeFormComponent implements OnInit {
	form!: FormGroup;
	message!: string;
	loading!: boolean;

	constructor(
		private router: Router,
		private store: Store
	) {}

	ngOnInit(): void {
		this.form = new FormGroup<{ departureTime: FormControl }>({
			departureTime: new FormControl<string>({ value: '', disabled: false }, [
				Validators.required,
			]),
		});
		this.loading = false;
	}

	submit() {
		if (this.form.dirty && this.form.valid && this.form.status === 'VALID') {
			const dateTime = this.form.controls['departureTime'].value;
			this.store.dispatch(RidePageActions.enterDepartureTime({ dateTime }));
			this.router.navigateByUrl('/profile/ride/add/car');
		} else {
			const licenceErrors: ValidationErrors | null =
				this.form.controls['departureTime'].errors;
			if (licenceErrors) {
				if (licenceErrors['pattern']) {
					this.message = 'departure Time is invalid';
				} else if (licenceErrors['required']) {
					this.message = 'departure Time is required';
				}
			}
		}
	}
}
