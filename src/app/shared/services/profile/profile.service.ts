import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '@models/user';

@Injectable({
	providedIn: 'root',
})
export class ProfileService {
	private getAuthenticatedUserEndPoint: string =
		environment.API_URL + '/users/authenticated-user';

	constructor(private http: HttpClient) {}

	getAuthenticatedUser(): Observable<User> {
		return this.http.get<User>(this.getAuthenticatedUserEndPoint);
	}
}
