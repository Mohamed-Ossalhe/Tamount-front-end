import { RegistrationState } from '@interfaces/registration-state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { RegistrationPageActions } from '@states/registration/actions/registration.page.actions';
import { Gender } from '@enums/gender';

const initialState: RegistrationState = {
	email: null,
	birthDate: null,
	firstName: null,
	lastName: null,
	gender: null,
	password: null,
	phoneNumber: null,
};

const RegistrationFeatureKey: string = 'registration';

export const registrationFeature = createFeature({
	name: RegistrationFeatureKey,
	reducer: createReducer(
		initialState,
		on(
			RegistrationPageActions.enterEmail,
			(state: RegistrationState, action: { email: string }) => ({
				...state,
				email: action.email,
			})
		),
		on(
			RegistrationPageActions.enterName,
			(
				state: RegistrationState,
				action: { firstName: string; lastName: string }
			) => ({
				...state,
				firstName: action.firstName,
				lastName: action.lastName,
			})
		),
		on(
			RegistrationPageActions.enterBirthDate,
			(state: RegistrationState, action: { birthDate: Date }) => ({
				...state,
				birthDate: action.birthDate,
			})
		),
		on(
			RegistrationPageActions.enterGender,
			(state: RegistrationState, action: { gender: Gender }) => ({
				...state,
				gender: action.gender,
			})
		),
		on(
			RegistrationPageActions.enterPassword,
			(state: RegistrationState, action: { password: string }) => ({
				...state,
				password: action.password,
			})
		),
		on(
			RegistrationPageActions.enterPhone,
			(state: RegistrationState, action: { phone: string }) => ({
				...state,
				phone: action.phone,
			})
		)
	),
});

export const {
	name: registrationFeatureKey,
	reducer: registrationReducer,
	selectEmail,
	selectGender,
	selectPassword,
	selectBirthDate,
	selectFirstName,
	selectLastName,
	selectPhoneNumber,
} = registrationFeature;
