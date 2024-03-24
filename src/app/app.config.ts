import {
	ApplicationConfig,
	importProvidersFrom,
	isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ALL_PRIMENG_UI_MODULES } from '@config/primeng-ui.imports';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimengConfig } from '@config/primeng.config';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as AuthenticationEffects from '@states/authentication/authentication.effects';
import * as ProfileEffects from '@states/profile/profile.effects';
import * as VehicleEffects from '@states/vehicle/vehicle.effects';
import {
	authenticationFeatureKey,
	authenticationReducer,
} from '@states/authentication/authentication.reducer';
import { registrationFeature } from '@states/registration/registration.reducer';
import { metaReducers } from '@states/authentication/rehydrate.reducer';
import { profileFeature } from '@states/profile/profile.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authorizationInterceptor } from '@interceptors/authorization-interceptor/authorization.interceptor';
import { vehicleFeature } from '@states/vehicle/vehicle.reducer';

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(
			BrowserModule,
			BrowserAnimationsModule,
			...ALL_PRIMENG_UI_MODULES,
			PrimengConfig
		),
		provideRouter(routes),
		provideStore(),
		provideEffects(AuthenticationEffects, ProfileEffects, VehicleEffects),
		provideState(authenticationFeatureKey, authenticationReducer, {
			metaReducers: metaReducers,
		}),
		provideState(registrationFeature),
		provideState(vehicleFeature),
		provideState(profileFeature),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		provideAnimationsAsync('noop'),
		provideHttpClient(withInterceptors([authorizationInterceptor])),
	],
};
