import { Booking } from '@models/booking';
import { HttpErrorResponse } from '@angular/common/http';

export interface BookingState {
	bookingCollection: Booking[];
	booking: Booking | undefined;
	loading: boolean;
	errors: HttpErrorResponse | undefined;
}
