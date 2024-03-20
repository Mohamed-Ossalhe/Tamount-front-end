import { Action, ActionReducer, INIT, MetaReducer, UPDATE } from '@ngrx/store';
import { AuthenticationState } from '@interfaces/authentication-state';
import { PersistenceService } from '@services/persistence/persistence.service';
import { inject } from '@angular/core';

const hydrationMetaReducer = (
	reducer: ActionReducer<AuthenticationState>,
	persistenceService: PersistenceService = inject(PersistenceService)
): ActionReducer<AuthenticationState> => {
	return (
		state: AuthenticationState | undefined,
		action: Action
	): AuthenticationState => {
		if (action.type === INIT || action.type === UPDATE) {
			const storageValue: AuthenticationState =
				persistenceService.getPersistedState('access');
			if (storageValue) {
				try {
					return persistenceService.getPersistedState('access');
				} catch {
					persistenceService.clearPersistedState('access');
				}
			}
		}
		const nextState: AuthenticationState = reducer(state, action);
		persistenceService.setPersistState('access', nextState);
		return nextState;
	};
};

export const metaReducers: MetaReducer<AuthenticationState>[] = [
	hydrationMetaReducer,
];
