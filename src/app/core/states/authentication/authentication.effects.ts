import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { AuthenticationPageActions } from '@states/authentication/actions/authentication.page.actions';
import { catchError, concatMap, map, Observable, of } from 'rxjs';
import { AuthenticationApiActions } from '@states/authentication/actions/authentication.api.actions';
import { AuthenticationResponse } from '@models/authentication-response';
import { TypedAction } from '@ngrx/store/src/models';
import { HttpErrorResponse } from '@angular/common/http';

export const authenticate: FunctionalEffect<
	(
		actions$?: Actions<TypedAction<'[Authentication Page] authenticate'>>,
		authenticationService?: AuthenticationService
	) => Observable<
		| ({
				response: AuthenticationResponse;
		  } & TypedAction<'[Authentication API] authenticationSuccess'>)
		| ({
				errors: HttpErrorResponse;
		  } & TypedAction<'[Authentication API] authenticationFailure'>)
	>
> = createEffect(
	(
		actions$: Actions<TypedAction<'[Authentication Page] authenticate'>> = inject(
			Actions
		),
		authenticationService: AuthenticationService = inject(AuthenticationService)
	) => {
		return actions$.pipe(
			ofType(AuthenticationPageActions.authenticate),
			concatMap(({ request }) => {
				return authenticationService.authenticate(request).pipe(
					map((response: AuthenticationResponse) => {
						return AuthenticationApiActions.authenticationSuccess({
							response,
						});
					}),
					catchError((errors: HttpErrorResponse) =>
						of(AuthenticationApiActions.authenticationFailure({ errors }))
					)
				);
			})
		);
	},
	{ functional: true }
);

export const registration: FunctionalEffect<
	(
		actions$?: Actions<TypedAction<'[Authentication Page] register'>>,
		authenticationService?: AuthenticationService
	) => Observable<
		| ({
				response: AuthenticationResponse;
		  } & TypedAction<'[Authentication API] registrationSuccess'>)
		| ({
				errors: HttpErrorResponse;
		  } & TypedAction<'[Authentication API] registrationFailure'>)
	>
> = createEffect(
	(
		actions$: Actions<TypedAction<'[Authentication Page] register'>> = inject(
			Actions
		),
		authenticationService: AuthenticationService = inject(AuthenticationService)
	) => {
		return actions$.pipe(
			ofType(AuthenticationPageActions.register),
			concatMap(({ request }) =>
				authenticationService.register(request).pipe(
					map((response: AuthenticationResponse) =>
						AuthenticationApiActions.registrationSuccess({ response })
					),
					catchError((errors: HttpErrorResponse) =>
						of(AuthenticationApiActions.registrationFailure({ errors }))
					)
				)
			)
		);
	},
	{ functional: true }
);

export const logout: FunctionalEffect<
	(
		actions$?: Actions<TypedAction<'[Authentication Page] logout'>>,
		authenticationService?: AuthenticationService
	) => Observable<
		| TypedAction<'[Authentication API] logoutSuccess'>
		| ({
				errors: HttpErrorResponse;
		  } & TypedAction<'[Authentication API] logoutFailure'>)
	>
> = createEffect(
	(
		actions$: Actions<TypedAction<'[Authentication Page] logout'>> = inject(
			Actions
		),
		authenticationService: AuthenticationService = inject(AuthenticationService)
	) => {
		return actions$.pipe(
			ofType(AuthenticationPageActions.logout),
			concatMap(() =>
				authenticationService.logout().pipe(
					map(() => AuthenticationApiActions.logoutSuccess()),
					catchError((errors: HttpErrorResponse) =>
						of(AuthenticationApiActions.logoutFailure({ errors }))
					)
				)
			)
		);
	},
	{ functional: true }
);
