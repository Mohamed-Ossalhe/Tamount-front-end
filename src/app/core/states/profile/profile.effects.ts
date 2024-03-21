import { Actions, createEffect, FunctionalEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { ProfileService } from '@services/profile/profile.service';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import { ProfileApiActions } from '@states/profile/actions/profile.api.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@models/user';
import { TypedAction } from '@ngrx/store/src/models';

export const loadAuthenticatedUser: FunctionalEffect<
	(
		actions$?: Actions<TypedAction<'[Profile Page] pageEnter'>>,
		profileService?: ProfileService
	) => Observable<
		| ({
				profile: User;
		  } & TypedAction<'[Profile API] loadProfileSuccess'>)
		| ({
				errors: HttpErrorResponse;
		  } & TypedAction<'[Profile API] loadProfileFailure'>)
	>
> = createEffect(
	(
		actions$: Actions<TypedAction<'[Profile Page] pageEnter'>> = inject(Actions),
		profileService: ProfileService = inject(ProfileService)
	) =>
		{ return actions$.pipe(
			ofType(ProfilePageActions.pageEnter),
			exhaustMap(() =>
				profileService.getAuthenticatedUser().pipe(
					map((profile: User) => ProfileApiActions.loadProfileSuccess({ profile })),
					catchError((errors: HttpErrorResponse) =>
						of(ProfileApiActions.loadProfileFailure({ errors }))
					)
				)
			)
		) },
	{ functional: true }
);
