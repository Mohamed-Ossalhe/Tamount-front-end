import { LocationModel } from '@models/LocationModel';
import { ApprovalMode } from '@enums/approval-mode';
import { User } from '@models/user';
import { Car } from '@models/car';

/**
 * Interface representing a ride request.
 */
export interface RideRequest {
	/**
	 * Departure location.
	 * @NotNull message: "departure is required"
	 */
	departure: LocationModel;

	/**
	 * Arrival location.
	 * @NotNull message: "arrival is required"
	 */
	arrival: LocationModel;

	/**
	 * Departure time.
	 * @NotNull message: "departure time is required"
	 */
	departureTime: Date;

	/**
	 * Approval mode.
	 * @NotNull message: "approval mode is required"
	 */
	approvalMode: ApprovalMode;

	/**
	 * Indicates if comfort is required.
	 * @NotNull message: "comfort is required"
	 */
	isComfort: boolean;

	/**
	 * Indicates if women only ride is required.
	 * @NotNull message: "women only is required"
	 */
	womenOnly: boolean;

	/**
	 * Number of seats required.
	 * @NotNull message: "seats is required"
	 */
	seats: number;

	/**
	 * Price for the ride.
	 * @NotNull message: "price is required"
	 */
	price: number;

	/**
	 * Route ID.
	 * @NotNull message: "route id is required"
	 */
	routeId: string;

	/**
	 * User details.
	 * @NotNull message: "user is required"
	 */
	user: User;

	/**
	 * Vehicle details.
	 * @NotNull message: "vehicle is required"
	 */
	vehicle: Car;
}
