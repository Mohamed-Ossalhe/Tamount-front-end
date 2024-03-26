import { Component, Signal } from '@angular/core';
import { RideCardComponent } from '@features/home/components/ride-card/ride-card.component';
import { Store } from '@ngrx/store';
import { selectBookingCollection } from '@states/booking/booking.reducer';
import { Booking } from '@models/booking';

@Component({
	selector: 'tamount-bookings',
	standalone: true,
	imports: [RideCardComponent],
	templateUrl: './bookings.component.html',
	styleUrl: './bookings.component.scss',
})
export class BookingsComponent {
	bookings: Signal<Booking[]> = this.store.selectSignal(selectBookingCollection);
	constructor(private store: Store) {}
}
