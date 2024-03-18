import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthenticationResponse } from '@models/authentication-response';

const source = 'Authentication API' as const;

export const AuthenticationApiActions = createActionGroup({
	source: source,
	events: {
		authenticationSuccess: props<{ response: AuthenticationResponse }>(),
		authenticationFailure: props<{ errors: object }>(),
		registrationSuccess: props<{ response: AuthenticationResponse }>(),
		registrationFailure: props<{ errors: object }>(),
		logoutSuccess: emptyProps(),
		logoutFailure: props<{ errors: object }>(),
	},
});
