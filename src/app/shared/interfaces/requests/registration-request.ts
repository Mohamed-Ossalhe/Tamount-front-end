import { RegistrationState } from '@interfaces/registration-state';

/**
 * DTO for creating or updating a User entity.
 * Represents a user request with details such as password, image, phone number,
 * email, first name, last name, gender, and address.
 *
 * @author Mohamed Ossalhe
 */
export interface RegistrationRequest extends RegistrationState {}
