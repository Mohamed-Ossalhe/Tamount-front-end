import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '@models/car';

/**
 * Interface representing a Car Request.
 */
export interface VehicleState {
	carCollection: Car[];

	car: Car | undefined;

	loading: boolean;

	errors: HttpErrorResponse | undefined;
}
