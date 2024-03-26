import { AbstractResponse } from '@models/abstract-response';
import { RegionCode } from '@enums/region-code';

/**
 * Represents a city entity.
 */
export interface City extends AbstractResponse {
	/**
	 * Represents the name of the city. This field cannot be null.
	 */
	name: string;

	/**
	 * Represents the city's country code which the city belongs to. This field cannot be null.
	 */
	country: RegionCode;
}
