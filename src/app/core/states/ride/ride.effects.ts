import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { RideService } from '@services/ride/ride.service';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';
import { catchError, concatMap, exhaustMap, map, of, switchMap } from 'rxjs';
import { RideApiActions } from '@states/ride/actions/ride.api.actions';
import { HttpErrorResponse } from '@angular/common/http';

export const publishRide = createEffect(
	(actions$ = inject(Actions), rideService: RideService = inject(RideService)) =>
		{ return actions$.pipe(
			ofType(RidePageActions.publishRide),
			concatMap(({ request }) => {
				console.log('request:', request);
				return rideService.create(request).pipe(
					map((ride) => RideApiActions.rideCreatedSuccess({ ride })),
					catchError((errors: HttpErrorResponse) =>
						of(RideApiActions.rideCreatedFailure({ errors }))
					)
				);
			})
		) },
	{ functional: true }
);

export const loadUserRides = createEffect(
	(actions$ = inject(Actions), rideService: RideService = inject(RideService)) =>
		{ return actions$.pipe(
			ofType(RidePageActions.loadUserRides),
			exhaustMap(() => {
				return rideService.loadUserRides().pipe(
					map((rides) => RideApiActions.loadUserRidesSuccess({ rides })),
					catchError((errors: HttpErrorResponse) =>
						of(RideApiActions.loadUserRidesFailure({ errors }))
					)
				);
			})
		) },
	{ functional: true }
);

export const searchRides = createEffect(
	(actions$ = inject(Actions), rideService: RideService = inject(RideService)) =>
		{ return actions$.pipe(
			ofType(RidePageActions.searchRides),
			switchMap(({ request }) => {
				return rideService.search(request).pipe(
					map((rides) => RideApiActions.searchSuccess({ rides })),
					catchError((errors: HttpErrorResponse) =>
						of(RideApiActions.searchFailure({ errors }))
					)
				);
			})
		) },
	{ functional: true }
);
