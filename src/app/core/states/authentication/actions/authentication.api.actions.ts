import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthenticationResponse } from '@models/authentication-response';
import { HttpErrorResponse } from '@angular/common/http';

const source = 'Authentication API' as const;

export const AuthenticationApiActions = createActionGroup({
	source: source,
	events: {
		authenticationSuccess: props<{ response: AuthenticationResponse }>(),
		authenticationFailure: props<{ errors: HttpErrorResponse }>(),
		registrationSuccess: props<{ response: AuthenticationResponse }>(),
		registrationFailure: props<{ errors: HttpErrorResponse }>(),
		logoutSuccess: emptyProps(),
		logoutFailure: props<{ errors: HttpErrorResponse }>(),
	},
});
