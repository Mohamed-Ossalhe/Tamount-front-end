import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { Ride } from '@models/ride';
import { RideRequest } from '@interfaces/requests/ride-request';
import { SearchRequest } from '@interfaces/requests/search-request';

@Injectable({
	providedIn: 'root',
})
export class RideService {
	private publishRideEndPoint: string = environment.API_URL + '/rides';
	private loadUserRidesEndPoint: string = environment.API_URL + '/rides/created';
	private searchRidesEndPoint: string = environment.API_URL + '/rides/search?';
	constructor(private http: HttpClient) {}

	create(request: RideRequest): Observable<Ride> {
		return this.http.post<Ride>(this.publishRideEndPoint, request);
	}

	loadUserRides(): Observable<Ride[]> {
		return this.http.get<Ride[]>(this.loadUserRidesEndPoint);
	}

	search(request: SearchRequest): Observable<Ride[]> {
		return this.http.post<Ride[]>(this.searchRidesEndPoint, request);
	}
}
