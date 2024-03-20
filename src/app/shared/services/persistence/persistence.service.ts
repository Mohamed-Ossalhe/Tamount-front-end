import { Injectable } from '@angular/core';
import { AuthenticationState } from '@interfaces/authentication-state';

@Injectable({
	providedIn: 'root',
})
export class PersistenceService {
	constructor() {}

	setPersisteState(key: string, data: unknown): void {
		if (data != null)
			localStorage.setItem(
				key,
				JSON.stringify(this.fillPersist(data as AuthenticationState))
			);
		else localStorage.setItem(key, JSON.stringify(data));
	}

	getPersisteState(key: string): void {
		const data: string | null = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	}

	clearPersisteState(key: string) {
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
