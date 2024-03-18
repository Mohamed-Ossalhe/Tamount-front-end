import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
	registrationFeatureKey,
	registrationReducer,
} from '@states/registration/registration.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(registrationFeatureKey, registrationReducer),
	],
})
export class RegistrationStateModule {}
