import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@models/user';

export interface ProfileState {
	profile: User | undefined;

	loading: boolean;

	errors: HttpErrorResponse | undefined;
}
