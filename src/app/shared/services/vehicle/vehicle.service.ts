import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarRequest } from '@interfaces/requests/car-request';
import { Observable } from 'rxjs';
import { Car } from '@models/car';
import { environment } from '@environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class VehicleService {
	private createVehicleEndPoint: string = environment.API_URL + '/cars';
	private userVehiclesEndPoint: string = environment.API_URL + '/cars/owned';

	constructor(private http: HttpClient) {}

	create(request: CarRequest): Observable<Car> {
		return this.http.post<Car>(this.createVehicleEndPoint, request);
	}

	findCarsByUser(): Observable<Car[]> {
		return this.http.get<Car[]>(this.userVehiclesEndPoint);
	}
}
