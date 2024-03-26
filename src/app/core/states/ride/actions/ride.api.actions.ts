import { createActionGroup, props } from '@ngrx/store';
import { Ride } from '@models/ride';
import { HttpErrorResponse } from '@angular/common/http';

const source = 'Ride API' as const;

export const RideApiActions = createActionGroup({
	source: source,
	events: {
		rideCreatedSuccess: props<{ ride: Ride }>(),
		rideCreatedFailure: props<{ errors: HttpErrorResponse }>(),
		loadUserRidesSuccess: props<{ rides: Ride[] }>(),
		loadUserRidesFailure: props<{ errors: HttpErrorResponse }>(),
		searchSuccess: props<{ rides: Ride[] }>(),
		searchFailure: props<{ errors: HttpErrorResponse }>(),
	},
});
