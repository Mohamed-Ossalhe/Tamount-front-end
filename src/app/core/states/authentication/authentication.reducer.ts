import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthenticationState } from '@interfaces/authentication-state';
import { AuthenticationPageActions } from '@states/authentication/actions/authentication.page.actions';
import { AuthenticationApiActions } from '@states/authentication/actions/authentication.api.actions';
import { AuthenticationResponse } from '@models/authentication-response';

const initialState: AuthenticationState = {
	user: undefined,
	isAuthenticated: false,
	loading: false,
	errors: null,
};

const AuthenticationFeatureKey: string = 'authentication';

export const authenticationFeature = createFeature({
	name: AuthenticationFeatureKey,
	reducer: createReducer(
		initialState,
		on(
			AuthenticationPageActions.authenticate,
			AuthenticationPageActions.register,
			(state: AuthenticationState): AuthenticationState => ({
				...state,
				loading: true,
			})
		),
		on(
			AuthenticationPageActions.logout,
			(): AuthenticationState => ({
				...initialState,
			})
		),
		on(
			AuthenticationApiActions.authenticationSuccess,
			AuthenticationApiActions.registrationSuccess,
			(
				state: AuthenticationState,
				action: { response: AuthenticationResponse }
			): AuthenticationState => ({
				...state,
				user: action.response,
				isAuthenticated: true,
				loading: false,
			})
		),
		on(
			AuthenticationApiActions.authenticationFailure,
			AuthenticationApiActions.registrationFailure,
			AuthenticationApiActions.logoutFailure,
			(
				state: AuthenticationState,
				action: { errors: object }
			): AuthenticationState => ({
				...state,
				loading: false,
				isAuthenticated: false,
				user: undefined,
				errors: action.errors,
			})
		)
	),
});

export const {
	name: authenticationFeatureKey,
	reducer: authenticationReducer,
	selectIsAuthenticated,
	selectLoading,
	selectUser,
	selectErrors,
} = authenticationFeature;
