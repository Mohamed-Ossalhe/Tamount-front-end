import { AbstractResponse } from '@models/abstract-response';
import { City } from '@models/city';

/**
 * Represents a location entity.
 */
export interface LocationModel extends AbstractResponse {
	/**
	 * The city associated with this location.
	 */
	city: City;

	/**
	 * The address of this location.
	 */
	address: string;

	/**
	 * Latitude of the location.
	 */
	latitude?: number;

	/**
	 * Longitude of the location.
	 */
	longitude?: number;
}
