import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationService } from '@services/location/location.service';
import { LocationApiActions } from '@states/location/actions/location.api.actions';
import { LocationPageActions } from '@states/location/actions/location.page.actions';

export const loadLocations = createEffect(
	(
		actions$ = inject(Actions),
		locationService: LocationService = inject(LocationService)
	) => {
		return actions$.pipe(
			ofType(LocationPageActions.loadLocations),
			exhaustMap(() =>
				locationService.findAllLocations().pipe(
					map((locations) => {
						console.log('locations: ', locations);
						return LocationApiActions.loadLocationsSuccess({ locations });
					}),
					catchError((errors: HttpErrorResponse) =>
						of(LocationApiActions.loadLocationsFailure({ errors }))
					)
				)
			)
		);
	},
	{ functional: true }
);
