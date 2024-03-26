import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ApprovalMode } from '@enums/approval-mode';
import { Car } from '@models/car';
import { RideRequest } from '@interfaces/requests/ride-request';
import { LocationModel } from '@models/LocationModel';
import { SearchRequest } from '@interfaces/requests/search-request';
import { Ride } from '@models/ride';

const source = 'Ride Page' as const;

export const RidePageActions = createActionGroup({
	source: source,
	events: {
		enterApproval: props<{ approval: ApprovalMode }>(),
		enterArrival: props<{ arrival: LocationModel }>(),
		chooseCar: props<{ car: Car }>(),
		enterComfort: props<{ comfort: boolean }>(),
		enterDeparture: props<{ departure: LocationModel }>(),
		enterDepartureTime: props<{ dateTime: Date }>(),
		enterPrice: props<{ price: number }>(),
		enterSeats: props<{ seats: number }>(),
		publishRide: props<{ request: RideRequest }>(),
		loadUserRides: emptyProps(),
		searchRides: props<{ request: SearchRequest }>(),
		enterSearchPage: emptyProps(),
		chooseRide: props<{ ride: Ride }>(),
	},
});
