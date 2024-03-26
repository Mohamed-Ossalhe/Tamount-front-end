import { User } from '@models/user';
import { Car } from '@models/car';
import { ApprovalMode } from '@enums/approval-mode';
import { LocationModel } from '@models/LocationModel';

/**
 * Represents a Ride entity.
 */
export interface Ride {
	/**
	 * The departure location of the ride.
	 */
	departure: LocationModel;

	/**
	 * The arrival location of the ride.
	 */
	arrival: LocationModel;

	/**
	 * The departure time of the ride.
	 */
	departureTime: Date;

	/**
	 * The approval mode of the ride.
	 */
	approvalMode: ApprovalMode;

	/**
	 * Indicates whether the ride offers comfort amenities.
	 */
	isComfort: boolean;

	/**
	 * Indicates whether the ride is cancelled or not.
	 */
	isCancelled: boolean;

	/**
	 * Indicates whether the ride is for women only.
	 */
	womenOnly: boolean;

	/**
	 * The number of available seats in the ride.
	 */
	seats: number;

	/**
	 * The price of the trip.
	 */
	price: number;

	/**
	 * The identifier of the route associated with the ride.
	 */
	routeId: string;

	/**
	 * The user associated with the ride.
	 */
	user: User;

	/**
	 * The vehicle associated with the ride.
	 */
	vehicle: Car;
}
