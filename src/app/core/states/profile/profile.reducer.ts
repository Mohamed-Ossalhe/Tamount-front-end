import { createFeature, createReducer, on } from '@ngrx/store';
import { ProfileState } from '@interfaces/profile-state';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';
import { ProfileApiActions } from '@states/profile/actions/profile.api.actions';

const initialState: ProfileState = {
	profile: undefined,
	loading: false,
	errors: undefined,
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
			profile: action.profile,
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
	selectProfile,
	selectLoading,
	selectErrors,
} = profileFeature;
