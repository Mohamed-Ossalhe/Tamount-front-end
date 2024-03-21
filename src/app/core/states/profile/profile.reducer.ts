import { createFeature, createReducer, on } from '@ngrx/store';
import { ProfileState } from '@interfaces/profile-state';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';
import { ProfileApiActions } from '@states/profile/actions/profile.api.actions';

const initialState: ProfileState = {
	loading: false,
	errors: undefined,
	firstName: undefined,
	lastName: undefined,
	email: undefined,
	role: undefined,
	picture: undefined,
	bio: undefined,
	phone: undefined,
	gender: undefined,
	age: undefined,
	idChecked: undefined,
	idCheckedType: undefined,
	emailVerified: false,
	phoneVerified: false,
	hasPicture: false,
	verificationStatus: undefined,
	cars: undefined,
	preferences: undefined,
};

const ProfileFeatureKey: string = 'Profile';

export const profileFeature = createFeature({
	name: ProfileFeatureKey,
	reducer: createReducer(
		initialState,
		on(ProfilePageActions.pageEnter, (state) => ({
			...state,
			loading: true,
		})),
		on(ProfileApiActions.loadProfileSuccess, (state, action) => ({
			...state,
			loading: false,
			firstName: action.profile.firstName,
			lastName: action.profile.lastName,
			email: action.profile.email,
			role: action.profile.role,
			picture: action.profile.picture,
			bio: action.profile.bio,
			phone: action.profile.phone,
			gender: action.profile.gender,
			age: action.profile.age,
			idChecked: action.profile.idChecked,
			idCheckedType: action.profile.idCheckedType,
			emailVerified: action.profile.emailVerified,
			phoneVerified: action.profile.phoneVerified,
			hasPicture: action.profile.hasPicture,
			verificationStatus: action.profile.verificationStatus,
			cars: action.profile.cars,
			preferences: action.profile.preferences,
		})),
		on(ProfileApiActions.loadProfileFailure, (state, action) => ({
			...state,
			loading: false,
			errors: action.errors,
		}))
	),
});

export const {
	name: profileFeatureKey,
	reducer: profileFeatureReducer,
	selectProfileState,
	selectLoading,
	selectErrors,
} = profileFeature;
