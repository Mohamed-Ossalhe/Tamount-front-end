import { createFeature, createReducer, on } from '@ngrx/store';
import { VehiclePageActions } from '@states/vehicle/actions/vehicle.page.actions';
import { VehicleState } from '@interfaces/vehicle-state';
import { VehicleApiActions } from '@states/vehicle/actions/vehicle.api.actions';
import { Car } from '@models/car';

const initialState: VehicleState = {
	errors: undefined,
	loading: false,
	car: undefined,
	carCollection: [],
};

const VehicleFeatureKey: string = 'Vehicle Feature';

export const vehicleFeature = createFeature({
	name: VehicleFeatureKey,
	reducer: createReducer(
		initialState,
		// TODO: this is a simple temp solution refactor later
		on(VehiclePageActions.enterVehicleLicencePlate, (state, action) => ({
			...state,
			car: { ...state.car, licensePlate: action.vehicleLicencePlate } as Car,
		})),
		on(VehiclePageActions.enterVehicleModel, (state, action) => ({
			...state,
			car: { ...state.car, model: action.vehicleModel } as Car,
		})),
		on(VehiclePageActions.enterVehicleType, (state, action) => ({
			...state,
			car: { ...state.car, category: action.vehicleType } as Car,
		})),
		on(VehiclePageActions.enterVehicleColor, (state, action) => ({
			...state,
			car: { ...state.car, color: action.vehicleColor } as Car,
		})),
		on(VehiclePageActions.enterVehicleRegistrationYear, (state, action) => ({
			...state,
			car: { ...state.car, registrationYear: action.year } as Car,
		})),
		on(VehiclePageActions.enterVehicleBrand, (state, action) => ({
			...state,
			car: { ...state.car, make: action.vehicleBrand } as Car,
		})),
		on(VehicleApiActions.loadUserVehiclesSuccess, (state, action) => ({
			...state,
			loading: false,
			carCollection: action.cars,
		})),
		on(VehiclePageActions.createVehicle, (state) => ({
			...state,
			loading: true,
		})),
		on(VehicleApiActions.vehicleCreatedSuccess, (state, action) => ({
			...state,
			loading: false,
			carCollection: [...state.carCollection, action.car],
		})),
		on(
			VehicleApiActions.vehicleCreatedFailure,
			VehicleApiActions.loadUserVehiclesFailure,
			(state, action) => ({
				...state,
				loading: false,
				errors: action.errors,
			})
		)
	),
});

export const {
	name: vehicleFeatureKey,
	reducer: vehicleFeatureReducer,
	selectCar,
	selectCarCollection,
	selectErrors,
	selectLoading,
} = vehicleFeature;
