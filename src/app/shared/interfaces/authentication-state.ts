import { AuthenticationResponse } from '@models/authentication-response';

/**
 * Represents the state related to authentication in the NgRx store.
 */
export interface AuthenticationState {
	/**
	 * Information about the authenticated user.
	 */
	user: AuthenticationResponse | undefined | null;

	/**
	 * Indicates whether the user is authenticated.
	 */
	isAuthenticated: boolean;

	/**
	 * Indicates whether authentication-related operations are ongoing.
	 */
	loading: boolean;

	/**
	 * Stores authentication-related errors, if any.
	 */
	errors: object | null;
}
