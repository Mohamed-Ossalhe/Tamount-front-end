import { Gender } from '@enums/gender';
import { PhoneRequest } from '@interfaces/requests/phone-request';

/**
 * DTO for creating or updating a User entity.
 * Represents a user request with details such as password, image, phone number,
 * email, first name, last name, gender, and address.
 *
 * @author Mohamed Ossalhe
 */
export interface RegistrationRequest {
	email: string;
	firstName: string;
	lastName: string;
	birthDate: Date;
	gender: Gender;
	password: string;
	phoneNumber: PhoneRequest;
}
