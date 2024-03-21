import {
	HttpEvent,
	HttpHandlerFn,
	HttpInterceptorFn,
	HttpRequest,
} from '@angular/common/http';
import { inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationState } from '@interfaces/authentication-state';
import { selectUser } from '@states/authentication/authentication.reducer';
import { AuthenticationResponse } from '@models/authentication-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.development';

export const authorizationInterceptor: HttpInterceptorFn = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
	const allowedRequestUrl: string[] = [
		`${environment.API_URL}/auth/authenticate`,
		`${environment.API_URL}/auth/register`,
	];
	const store: Store<AuthenticationState> = inject(Store);
	const user: Signal<AuthenticationResponse> = store.selectSignal(
		selectUser
	) as Signal<AuthenticationResponse>;
	if (allowedRequestUrl.includes(req.url)) {
		return next(req);
	}
	const newReq: HttpRequest<unknown> = req.clone({
		headers: req.headers.set('Authorization', `Bearer ${user().access_token}`),
	});
	console.log(newReq);
	return next(newReq);
};
