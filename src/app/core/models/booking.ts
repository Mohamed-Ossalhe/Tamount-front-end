import { Ride } from '@models/ride';
import { User } from '@models/user';
import { BookingStatus } from '@enums/booking-status';
import { PaymentHistory } from '@models/payment-history';
import { AbstractResponse } from '@models/abstract-response';

/**
 * Represents a booking made by a user for a specific ride.
 * Each booking contains information about the user who made the booking,
 * the ride being booked, the status of the booking, and optionally,
 * a reason for cancellation if the booking is canceled.
 */
export interface Booking extends AbstractResponse {
	/**
	 * The status of this booking.
	 */
	bookingStatus: BookingStatus;

	/**
	 * The reason for cancellation if this booking is canceled.
	 * This field will be null if the booking is not canceled.
	 */
	cancellationReason?: string;

	/**
	 * The user who made this booking.
	 */
	user: User;

	/**
	 * The ride that is being booked.
	 */
	ride: Ride;

	/**
	 * The payment history associated with the booking.
	 */
	paymentHistory?: PaymentHistory;
}
