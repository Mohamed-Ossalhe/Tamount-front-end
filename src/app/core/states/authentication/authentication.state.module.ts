import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	authenticationFeatureKey,
	authenticationReducer,
} from '@states/authentication/authentication.reducer';
import * as AuthenticationEffects from './authentication.effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(authenticationFeatureKey, authenticationReducer),
		EffectsModule.forFeature(AuthenticationEffects),
	],
})
export class AuthenticationStateModule {}
