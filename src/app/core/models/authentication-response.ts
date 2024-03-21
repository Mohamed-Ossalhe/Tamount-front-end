/**
 * Interface representing the response for authentication.
 * Contains access and refresh tokens.
 *
 * @author Mohamed Ossalhe
 */
export interface AuthenticationResponse {
	/**
	 * Access token for authentication.
	 */
	access_token: string;

	/**
	 * Refresh token for token refreshing.
	 */
	refresh_token: string;

	/**
	 * The user's username.
	 */
	username: string;

	/**
	 * The user's email.
	 */
	email: string;

	/**
	 * The user's role.
	 */
	role: string;
}
