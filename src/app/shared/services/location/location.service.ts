import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { LocationModel } from '@models/LocationModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class LocationService {
	private allLocationsEndPoint: string = environment.API_URL + '/locations';
	constructor(private http: HttpClient) {}

	findAllLocations(): Observable<LocationModel[]> {
		return this.http.get<LocationModel[]>(this.allLocationsEndPoint);
	}
}
