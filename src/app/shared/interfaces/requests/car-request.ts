import { User } from '@models/user';

/**
 * Interface representing a Car Request.
 */
export interface CarRequest {
	/** The model of the car. */
	model: string;

	/** The make of the car. */
	make: string;

	/** The color of the car. */
	color: string;

	/** The comfort level of the car. */
	comfort: string;

	/**
	 * The category of the car
	 */
	category: string;

	/** The license plate of the car. */
	licensePlate: string;

	/** The registration year of the car. */
	registrationYear: number;

	/** The registration information of the user. */
	user: User;
}
