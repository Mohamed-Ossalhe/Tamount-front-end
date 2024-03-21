import { createFeature, createReducer, on } from '@ngrx/store';
import { ProfileState } from '@interfaces/profile-state';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';
import { ProfileApiActions } from '@states/profile/actions/profile.api.actions';

const initialState: ProfileState = {
	loading: false,
	errors: null,
	firstName: null,
	lastName: null,
	email: null,
	role: null,
	picture: null,
	bio: null,
	phone: null,
	gender: null,
	age: null,
	idChecked: null,
	idCheckedType: null,
	emailVerified: false,
	phoneVerified: false,
	hasPicture: false,
	verificationStatus: null,
	cars: null,
	preferences: null,
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
