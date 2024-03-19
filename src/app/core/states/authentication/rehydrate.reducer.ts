import { ActionReducer, INIT, MetaReducer, UPDATE } from '@ngrx/store';
import { AuthenticationState } from '@interfaces/authentication-state';

const hydrationMetaReducer = (
	reducer: ActionReducer<AuthenticationState>
): ActionReducer<AuthenticationState> => {
	return (state, action) => {
		if (action.type === INIT || action.type === UPDATE) {
			const storageValue = localStorage.getItem('access');
			if (storageValue) {
				try {
					return JSON.parse(storageValue);
				} catch {
					localStorage.removeItem('access');
				}
			}
		}
		const nextState = reducer(state, action);
		localStorage.setItem('access', JSON.stringify(nextState));
		return nextState;
	};
};

export const metaReducers: MetaReducer<AuthenticationState>[] = [
	hydrationMetaReducer,
];
