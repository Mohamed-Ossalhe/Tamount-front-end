import { Ride } from '@models/ride';
import { HttpErrorResponse } from '@angular/common/http';

export interface RideState {
	rideCollection: Ride[];
	ride: Ride | undefined;
	loading: boolean;
	errors: HttpErrorResponse | undefined;
}
