import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '@models/authentication-response';
import { AuthenticationRequest } from '@interfaces/requests/authentication-request';
import { RegistrationRequest } from '@interfaces/requests/registration-request';

/**
 * Represents the user authentication service.
 *
 * @author Mohamed Ossalhe
 */
@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private authenticateEndPoint: string =
		environment.API_URL + '/auth/authenticate';
	private registrationEndPoint: string = environment.API_URL + '/auth/register';
	private logoutEndPoint: string = environment.API_URL + '/auth/logout';

	constructor(private http: HttpClient) {}

	/**
	 * Authenticates the user using the provided authentication request.
	 *
	 * @param authenticationRequest The authentication request containing user credentials.
	 * @returns An Observable emitting an AuthenticationResponse upon successful authentication.
	 */
	public authenticate(
		authenticationRequest: AuthenticationRequest
	): Observable<AuthenticationResponse> {
		return this.http.post<AuthenticationResponse>(
			this.authenticateEndPoint,
			authenticationRequest
		);
	}

	/**
	 * Register a new user using the provided registration request.
	 *
	 * @param registrationRequest The authentication request containing user credentials.
	 * @returns An Observable emitting an AuthenticationResponse upon successful authentication.
	 */
	public register(
		registrationRequest: RegistrationRequest
	): Observable<AuthenticationResponse> {
		return this.http.post<AuthenticationResponse>(
			this.registrationEndPoint,
			registrationRequest
		);
	}

	/**
	 * signs out the authenticated user.
	 */
	logout(): Observable<void> {
		return this.http.post<void>(this.logoutEndPoint, {});
	}
}
