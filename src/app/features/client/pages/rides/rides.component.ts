import { Component, Signal } from '@angular/core';
import { RideCardComponent } from '@features/home/components/ride-card/ride-card.component';
import { Store } from '@ngrx/store';
import { selectRideCollection } from '@states/ride/ride.reducer';
import { Ride } from '@models/ride';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

@Component({
	selector: 'tamount-rides',
	standalone: true,
	imports: [RideCardComponent],
	templateUrl: './rides.component.html',
	styleUrl: './rides.component.scss',
})
export class RidesComponent {
	rides: Signal<Ride[]> = this.store.selectSignal(selectRideCollection);
	constructor(private store: Store) {
		this.store.dispatch(RidePageActions.loadUserRides());
	}
}
