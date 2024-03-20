import { Injectable } from '@angular/core';
import { AuthenticationState } from '@interfaces/authentication-state';

@Injectable({
	providedIn: 'root',
})
export class PersistenceService {
	constructor() {}

	setPersistState(key: string, data: unknown): void {
		if (data != null)
			localStorage.setItem(
				key,
				JSON.stringify(this.fillPersist(data as AuthenticationState))
			);
		else localStorage.setItem(key, JSON.stringify(data));
	}

	getPersistedState(key: string): AuthenticationState {
		const data: string | null = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	}

	clearPersistedState(key: string): void {
		if (localStorage.getItem(key) !== null) {
			localStorage.removeItem(key);
		}
	}

	fillPersist(data: AuthenticationState): AuthenticationState {
		return {
			errors: data.errors,
			user: data.user,
			loading: data.loading,
			isAuthenticated: data.isAuthenticated,
		};
	}
}
