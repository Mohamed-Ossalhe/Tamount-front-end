import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { BookingService } from '@services/booking/booking.service';
import { BookingPageActions } from '@states/booking/actions/booking.page.actions';
import { catchError, concatMap, map, of } from 'rxjs';
import { BookingApiActions } from '@states/booking/actions/booking.api.actions';
import { HttpErrorResponse } from '@angular/common/http';

export const createBooking = createEffect(
	(actions$ = inject(Actions), bookingService = inject(BookingService)) =>
		{ return actions$.pipe(
			ofType(BookingPageActions.createBooking),
			concatMap(({ request }) =>
				bookingService.create(request).pipe(
					map((booking) => BookingApiActions.bookingCreatedSuccess({ booking })),
					catchError((errors: HttpErrorResponse) =>
						of(BookingApiActions.bookingCreatedFailure({ errors }))
					)
				)
			)
		) },
	{ functional: true }
);

export const loadUserBookings = createEffect(
	(actions$ = inject(Actions), bookingService = inject(BookingService)) =>
		{ return actions$.pipe(
			ofType(BookingPageActions.loadUserBookings),
			concatMap(() =>
				bookingService.loadBookings().pipe(
					map((bookings) => BookingApiActions.loadBookingSuccess({ bookings })),
					catchError((errors: HttpErrorResponse) =>
						of(BookingApiActions.loadBookingFailure({ errors }))
					)
				)
			)
		) },
	{ functional: true }
);
