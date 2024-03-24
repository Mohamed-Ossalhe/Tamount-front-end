import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '@models/car';

const source = 'Vehicle API' as const;

export const VehicleApiActions = createActionGroup({
	source: source,
	events: {
		loadUserVehiclesSuccess: props<{ cars: Car[] }>(),
		loadUserVehiclesFailure: props<{ errors: HttpErrorResponse }>(),
		vehicleCreatedSuccess: props<{ car: Car }>(),
		vehicleCreatedFailure: props<{ errors: HttpErrorResponse }>(),
	},
});
