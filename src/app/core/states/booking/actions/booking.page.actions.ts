import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BookingRequest } from '@interfaces/requests/booking-request';

const source = 'Booking Page' as const;

export const BookingPageActions = createActionGroup({
	source: source,
	events: {
		createBooking: props<{ request: BookingRequest }>(),
		loadUserBookings: emptyProps(),
	},
});
