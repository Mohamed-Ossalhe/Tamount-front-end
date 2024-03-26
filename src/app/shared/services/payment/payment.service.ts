import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ChargeRequest } from '@interfaces/requests/charge-request';

@Injectable({
	providedIn: 'root',
})
export class PaymentService {
	private stripePaymentEndpoint = environment.API_URL + '/payment-history';

	constructor(private http: HttpClient) {}

	stripePayment(request: ChargeRequest): Observable<string> {
		return this.http.post<string>(this.stripePaymentEndpoint, request);
	}
}
