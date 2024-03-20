import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { AuthenticationPageActions } from '@states/authentication/actions/authentication.page.actions';
import { catchError, concatMap, map, Observable, of, tap } from 'rxjs';
import { AuthenticationApiActions } from '@states/authentication/actions/authentication.api.actions';
import { AuthenticationResponse } from '@models/authentication-response';
import { TypedAction } from '@ngrx/store/src/models';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Role } from '@enums/role';
import { PersistenceService } from '@services/persistence/persistence.service';

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
		authenticationService: AuthenticationService = inject(AuthenticationService),
		persistenceService: PersistenceService = inject(PersistenceService)
	) => {
		return actions$.pipe(
			ofType(AuthenticationPageActions.authenticate),
			concatMap(({ request }) => {
				return authenticationService.authenticate(request).pipe(
					map((response: AuthenticationResponse) => {
						persistenceService.setPersistState('access', response);
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
		authenticationService: AuthenticationService = inject(AuthenticationService),
		persistenceService: PersistenceService = inject(PersistenceService)
	) => {
		return actions$.pipe(
			ofType(AuthenticationPageActions.register),
			concatMap(({ request }) =>
				authenticationService.register(request).pipe(
					map((response: AuthenticationResponse) => {
						persistenceService.setPersistState('access', response);
						return AuthenticationApiActions.registrationSuccess({ response });
					}),
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
		authenticationService: AuthenticationService = inject(AuthenticationService),
		persistenceService: PersistenceService = inject(PersistenceService)
	) => {
		return actions$.pipe(
			ofType(AuthenticationPageActions.logout),
			concatMap(() =>
				authenticationService.logout().pipe(
					map(() => {
						persistenceService.clearPersistedState('access');
						return AuthenticationApiActions.logoutSuccess();
					}),
					catchError((errors: HttpErrorResponse) =>
						of(AuthenticationApiActions.logoutFailure({ errors }))
					)
				)
			)
		);
	},
	{ functional: true }
);

/**
 * Redirection After Login or Register Effect
 *
 * this effect handles the process of redirections after a successful sign in or sign up or logout by
 * intercepting the loginSuccess or registerSuccess or logoutSuccess action, and navigate to the appropriate route based
 * on the user's role.
 *
 * @param actions$ - The stream of actions in the application.
 * @param router - The injected Router service for navigation.
 * @returns An Observable with no dispatched actions (dispatch: false)
 */
export const redirectAfterLoginOrRegisterOrLogoutEffect: FunctionalEffect<
	(
		actions$?: Actions<
			| TypedAction<'[Authentication API] authenticationSuccess'>
			| TypedAction<'[Authentication API] registrationSuccess'>
			| TypedAction<'[Authentication API] logoutSuccess'>
		>,
		router?: Router
	) => Observable<unknown>
> = createEffect(
	(
		actions$: Actions<
			| TypedAction<'[Authentication API] authenticationSuccess'>
			| TypedAction<'[Authentication API] registrationSuccess'>
			| TypedAction<'[Authentication API] logoutSuccess'>
		> = inject(Actions),
		router = inject(Router)
	) => {
		return actions$.pipe(
			ofType(
				AuthenticationApiActions.authenticationSuccess,
				AuthenticationApiActions.registrationSuccess,
				AuthenticationApiActions.logoutSuccess
			),
			tap((action) => {
				if (action.type !== '[Authentication API] logoutSuccess') {
					if (action.response.role == Role.ADMIN) {
						router.navigateByUrl('/admin/');
					} else {
						router.navigateByUrl('/');
					}
				} else {
					router.navigateByUrl('/');
				}
			})
		);
	},
	{ functional: true, dispatch: false }
);
