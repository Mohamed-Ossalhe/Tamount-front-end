/**
 * Data Transfer Object (DTO) for authentication requests.
 * This interface represents the data sent when a user is trying to authenticate.
 * It includes the user's email and password.
 *
 * @author Mohamed Ossalhe
 */
export interface AuthenticationRequest {
	/**
	 * Represents the email address of the user.
	 * Email should be valid and is required.
	 */
	email: string;

	/**
	 * Represents the password of the user.
	 * Password is required and must be between 6 and 20 characters.
	 */
	password: string;
}
