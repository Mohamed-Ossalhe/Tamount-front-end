import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthenticationRequest } from '@interfaces/requests/authentication-request';
import { RegistrationRequest } from '@interfaces/requests/registration-request';

const source = 'Authentication Page' as const;

export const AuthenticationPageActions = createActionGroup({
	source: source,
	events: {
		authenticate: props<{ request: AuthenticationRequest }>(),
		register: props<{ request: RegistrationRequest }>(),
		logout: emptyProps(),
	},
});
