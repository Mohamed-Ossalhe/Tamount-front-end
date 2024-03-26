import { LocationModel } from '@models/LocationModel';
import { HttpErrorResponse } from '@angular/common/http';

export interface LocationState {
	locationCollection: LocationModel[];
	location: LocationModel | undefined;
	errors: HttpErrorResponse | undefined;
	loading: boolean;
}
