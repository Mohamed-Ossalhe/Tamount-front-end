import {
	ApplicationConfig,
	importProvidersFrom,
	isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ALL_PRIMENG_UI_MODULES } from '@config/primeng-ui.imports';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimengConfig } from '@config/primeng.config';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
		provideEffects(),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		provideAnimationsAsync('noop'),
	],
};
