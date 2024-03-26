import { createActionGroup, props } from '@ngrx/store';
import { LocationModel } from '@models/LocationModel';
import { HttpErrorResponse } from '@angular/common/http';

const source = 'Location API' as const;

export const LocationApiActions = createActionGroup({
	source: source,
	events: {
		loadLocationsSuccess: props<{ locations: LocationModel[] }>(),
		loadLocationsFailure: props<{ errors: HttpErrorResponse }>(),
	},
});
