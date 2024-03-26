import { createActionGroup, props } from '@ngrx/store';
import { Booking } from '@models/booking';
import { HttpErrorResponse } from '@angular/common/http';

const source = 'Booking API' as const;

export const BookingApiActions = createActionGroup({
	source: source,
	events: {
		bookingCreatedSuccess: props<{ booking: Booking }>(),
		bookingCreatedFailure: props<{ errors: HttpErrorResponse }>(),
		loadBookingSuccess: props<{ bookings: Booking[] }>(),
		loadBookingFailure: props<{ errors: HttpErrorResponse }>(),
	},
});
