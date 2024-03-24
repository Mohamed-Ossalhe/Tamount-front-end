import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { VehicleService } from '@services/vehicle/vehicle.service';
import { VehiclePageActions } from '@states/vehicle/actions/vehicle.page.actions';
import { catchError, concatMap, exhaustMap, map, of } from 'rxjs';
import { VehicleApiActions } from '@states/vehicle/actions/vehicle.api.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '@models/car';
import { CarRequest } from '@interfaces/requests/car-request';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';

export const loadUserVehicles = createEffect(
	(
		actions$ = inject(Actions),
		vehicleService: VehicleService = inject(VehicleService)
	) =>
		{ return actions$.pipe(
			ofType(ProfilePageActions.pageEnter),
			exhaustMap(() =>
				vehicleService.findCarsByUser().pipe(
					map((cars) => VehicleApiActions.loadUserVehiclesSuccess({ cars })),
					catchError((errors: HttpErrorResponse) =>
						of(VehicleApiActions.loadUserVehiclesFailure({ errors }))
					)
				)
			)
		) },
	{ functional: true }
);

export const createVehicle = createEffect(
	(
		actions$ = inject(Actions),
		vehicleService: VehicleService = inject(VehicleService)
	) =>
		{ return actions$.pipe(
			ofType(VehiclePageActions.createVehicle),
			concatMap((action: { request: CarRequest }) =>
				vehicleService.create(action.request).pipe(
					map((car: Car) => VehicleApiActions.vehicleCreatedSuccess({ car })),
					catchError((errors: HttpErrorResponse) =>
						of(VehicleApiActions.vehicleCreatedFailure({ errors }))
					)
				)
			)
		) },
	{ functional: true }
);
