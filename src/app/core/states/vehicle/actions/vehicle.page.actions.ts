import { createActionGroup, props } from '@ngrx/store';
import { CarRequest } from '@interfaces/requests/car-request';

const source = 'Vehicle Page' as const;

export const VehiclePageActions = createActionGroup({
	source: source,
	events: {
		enterVehicleLicencePlate: props<{ vehicleLicencePlate: string }>(),
		enterVehicleBrand: props<{ vehicleBrand: string }>(),
		enterVehicleModel: props<{ vehicleModel: string }>(),
		enterVehicleType: props<{ vehicleType: string }>(),
		enterVehicleColor: props<{ vehicleColor: string }>(),
		enterVehicleRegistrationYear: props<{ year: number }>(),
		createVehicle: props<{ request: CarRequest }>(),
	},
});
