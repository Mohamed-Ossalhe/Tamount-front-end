import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '@models/booking';
import { BookingRequest } from '@interfaces/requests/booking-request';
import { environment } from '@environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class BookingService {
	private createBookingEndPoint = environment.API_URL + '/bookings';
	private loadBookingsEndPoint = environment.API_URL + '/bookings/owned';

	constructor(private http: HttpClient) {}

	create(request: BookingRequest): Observable<Booking> {
		return this.http.post<Booking>(this.createBookingEndPoint, request);
	}

	loadBookings(): Observable<Booking[]> {
		return this.http.get<Booking[]>(this.loadBookingsEndPoint);
	}
}
