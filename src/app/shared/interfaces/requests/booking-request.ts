import { Ride } from '@models/ride';
import { User } from '@models/user';
import { BookingStatus } from '@enums/booking-status';
import { ChargeRequest } from '@interfaces/requests/charge-request';

/**
 * Data Transfer Object (DTO) for Booking requests.
 * This class represents the data sent when a user is trying to book new booking or update an existing booking.
 *
 * @author Mohamed Ossalhe
 */
export interface BookingRequest {
	/**
	 * Booking status.
	 * @NotNull message: "booking status is required"
	 */
	bookingStatus: BookingStatus;

	/**
	 * Cancellation reason.
	 */
	cancellationReason?: string;

	/**
	 * User details.
	 * @NotNull message: "user is required"
	 */
	user: User;

	/**
	 * Ride details.
	 * @NotNull message: "ride is required"
	 */
	ride: Ride;

	/**
	 * Ride details.
	 * @NotNull message: "ride is required"
	 */
	chargeRequest: ChargeRequest;
}
