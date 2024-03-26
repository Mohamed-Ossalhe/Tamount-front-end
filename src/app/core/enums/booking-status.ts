/**
 * Enumeration representing the status of a booking.
 *
 * Possible values are:
 * - CONFIRMED: The booking has been confirmed.
 * - CANCELLED: The booking has been cancelled.
 * - PENDING: The booking is pending confirmation.
 */
export enum BookingStatus {
	CONFIRMED = 'CONFIRMED',
	CANCELLED = 'CANCELLED',
	PENDING = 'PENDING',
}
