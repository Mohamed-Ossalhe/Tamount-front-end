import { RegionCode } from '@enums/region-code';

/**
 * Data Transfer Object (DTO) for Phone requests.
 * This interface represents the data sent when a user is trying to register or verifying his number.
 *
 * @author Mohamed Ossalhe
 */
export interface PhoneRequest {
	nationalNumber: number;
	formattedNumber: string;
	nationalFormattedNumber: string;
	internationalFormattedNumber: string;
	regionCode: RegionCode;
}
