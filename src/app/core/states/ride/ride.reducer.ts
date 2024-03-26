import { RideState } from '@interfaces/ride-state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';
import { Ride } from '@models/ride';
import { RideApiActions } from '@states/ride/actions/ride.api.actions';

const initialState: RideState = {
	rideCollection: [],
	ride: undefined,
	loading: false,
	errors: undefined,
};

const RideFeatureKey: string = 'Ride';

export const rideFeature = createFeature({
	name: RideFeatureKey,
	reducer: createReducer(
		initialState,
		// this is a temp solution refactor later
		on(RidePageActions.enterDeparture, (state, action) => ({
			...state,
			ride: { ...state.ride, departure: action.departure } as Ride,
		})),
		on(RidePageActions.enterArrival, (state, action) => ({
			...state,
			ride: { ...state.ride, arrival: action.arrival } as Ride,
		})),
		on(RidePageActions.enterPrice, (state, action) => ({
			...state,
			ride: { ...state.ride, price: action.price } as Ride,
		})),
		on(RidePageActions.enterApproval, (state, action) => ({
			...state,
			ride: { ...state.ride, approvalMode: action.approval } as Ride,
		})),
		on(RidePageActions.enterComfort, (state, action) => ({
			...state,
			ride: { ...state.ride, isComfort: action.comfort, womenOnly: false } as Ride,
		})),
		on(RidePageActions.enterDepartureTime, (state, action) => ({
			...state,
			ride: { ...state.ride, departureTime: action.dateTime } as Ride,
		})),
		on(RidePageActions.enterSeats, (state, action) => ({
			...state,
			ride: { ...state.ride, seats: action.seats } as Ride,
		})),
		on(RidePageActions.chooseCar, (state, action) => ({
			...state,
			ride: { ...state.ride, vehicle: action.car } as Ride,
		})),
		on(RidePageActions.enterSearchPage, (state) => ({
			...state,
			rideCollection: [],
		})),
		on(RidePageActions.chooseRide, (state, action) => ({
			...state,
			ride: action.ride,
		})),
		on(
			RidePageActions.publishRide,
			RidePageActions.loadUserRides,
			RidePageActions.searchRides,
			(state) => ({
				...state,
				loading: true,
			})
		),
		on(RideApiActions.rideCreatedSuccess, (state, action) => ({
			...state,
			rideCollection: [...state.rideCollection, action.ride],
			loading: false,
		})),
		on(
			RideApiActions.loadUserRidesSuccess,
			RideApiActions.searchSuccess,
			(state, action) => ({
				...state,
				rideCollection: action.rides,
				loading: false,
			})
		),
		on(
			RideApiActions.rideCreatedFailure,
			RideApiActions.loadUserRidesFailure,
			RideApiActions.searchFailure,
			(state, action) => ({
				...state,
				errors: action.errors,
				loading: false,
			})
		)
	),
});

export const {
	name: rideFeatureKey,
	reducer: rideFeatureReducer,
	selectRideCollection,
	selectRide,
	selectErrors,
	selectLoading,
} = rideFeature;
