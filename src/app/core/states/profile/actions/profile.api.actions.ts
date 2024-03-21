import { createActionGroup, props } from '@ngrx/store';
import { User } from '@models/user';
import { HttpErrorResponse } from '@angular/common/http';

const source = 'Profile API' as const;

export const ProfileApiActions = createActionGroup({
	source: source,
	events: {
		loadProfileSuccess: props<{ profile: User }>(),
		loadProfileFailure: props<{ errors: HttpErrorResponse }>(),
	},
});
