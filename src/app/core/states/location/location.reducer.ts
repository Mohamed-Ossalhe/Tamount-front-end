import { LocationState } from '@interfaces/location-state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { LocationPageActions } from '@states/location/actions/location.page.actions';
import { LocationApiActions } from '@states/location/actions/location.api.actions';

const initialState: LocationState = {
	locationCollection: [],
	location: undefined,
	errors: undefined,
	loading: false,
};

const LocationFeatureKey: string = 'Location Feature';

export const locationFeature = createFeature({
	name: LocationFeatureKey,
	reducer: createReducer(
		initialState,
		// TODO: this is a simple temp solution refactor later
		on(LocationPageActions.loadLocations, (state) => ({
			...state,
			loading: true,
		})),
		on(LocationApiActions.loadLocationsSuccess, (state, action) => ({
			...state,
			loading: false,
			locationCollection: action.locations,
		})),
		on(LocationApiActions.loadLocationsFailure, (state, action) => ({
			...state,
			loading: false,
			errors: action.errors,
		}))
	),
});

export const {
	name: locationFeatureKey,
	reducer: locationFeatureReducer,
	selectLocationCollection,
	selectLocation,
	selectLoading,
	selectErrors,
} = locationFeature;
