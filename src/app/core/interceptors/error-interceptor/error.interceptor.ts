import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
	const router: Router = inject(Router);
	return next(req).pipe(
		catchError((error) => {
			if (error instanceof HttpErrorResponse) {
				switch (error.status) {
					case 401:
						router.navigateByUrl('/unauthorized');
						break;
					case 403:
						router.navigateByUrl('/forbidden');
						break;
					case 500:
						router.navigateByUrl('/something-went-wrong');
						break;
					case 400:
						router.navigateByUrl('/bad-request');
						break;
					case 429:
						router.navigateByUrl('/too-many-requests');
						break;
					default:
						router.navigateByUrl('/');
						break;
				}
			}

			return throwError(() => new Error(error));
		})
	);
};
