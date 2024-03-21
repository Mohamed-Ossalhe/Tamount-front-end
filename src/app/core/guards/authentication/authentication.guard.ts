import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { inject, Signal } from '@angular/core';
import {
	selectIsAuthenticated,
	selectUser,
} from '@states/authentication/authentication.reducer';
import { AuthenticationResponse } from '@models/authentication-response';
import { Role } from '@enums/role';

export const authenticationGuard: CanActivateFn = (): boolean => {
	const store: Store = inject(Store);
	const user: Signal<AuthenticationResponse> = store.selectSignal(
		selectUser
	) as Signal<AuthenticationResponse>;
	const isAuthenticated: Signal<boolean> = store.selectSignal(
		selectIsAuthenticated
	);
	const router: Router = inject(Router);
	if (isAuthenticated() && user().role === Role.USER) return true;
	router.navigateByUrl('/unauthorized');
	return false;
};
