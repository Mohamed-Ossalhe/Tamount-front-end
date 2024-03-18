import { User } from '@models/user';
import { AbstractResponse } from '@models/abstract-response';

/**
 * Represents a car entity in the system.
 * This class includes information about a car such as its model, maker, color, comfort,
 * category, license plate, registration year, and the user which belongs to.
 *
 * @author Mohamed Ossalhe
 */
export interface Car extends AbstractResponse {
	/**
	 * Represents the model of the vehicle.
	 */
	model: string;

	/**
	 * Represents the make of the vehicle.
	 */
	make: string;

	/**
	 * Represents the color of the vehicle.
	 */
	color: string;

	/**
	 * Represents the comfort level of the vehicle.
	 */
	comfort: string;

	/**
	 * Represents the category of the vehicle.
	 */
	category: string;

	/**
	 * Represents the license plate of the vehicle.
	 */
	licensePlate: string;

	/**
	 * Represents the registration year of the vehicle.
	 */
	registrationYear: number;

	/**
	 * Represents the user who owns the vehicle.
	 */
	user: User;
}
