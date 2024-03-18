import { RegionCode } from '@enums/region-code';
import { User } from '@models/user';
import { AbstractResponse } from '@models/abstract-response';

/**
 * Represents a phone entity in the system.
 * This interface includes information about a phone number such as its national number, formatted number,
 * national formatted number, international formatted number, region code, and the user which belongs to.
 *
 * @author Mohamed Ossalhe
 */
export interface Phone extends AbstractResponse {
	/**
	 * Represents the national number associated with a phone number.
	 * This field cannot be null.
	 */
	nationalNumber: number;

	/**
	 * Represents the formatted number of a phone number.
	 * This field cannot be null.
	 */
	formattedNumber: string;

	/**
	 * Represents the national formatted number of a phone number.
	 * This field cannot be null.
	 */
	nationalFormattedNumber: string;

	/**
	 * Represents the international formatted number of a phone number.
	 * This field cannot be null.
	 */
	internationalFormattedNumber: string;

	/**
	 * Represents the region code associated with a phone number.
	 * This field cannot be null.
	 */
	regionCode: RegionCode;

	/**
	 * Represents the user associated with a phone number.
	 * This field is fetched lazily and is subject to cascading deletion.
	 */
	user?: User;
}
