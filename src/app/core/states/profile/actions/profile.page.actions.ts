import { createActionGroup, emptyProps } from '@ngrx/store';

const source = 'Profile Page' as const;

export const ProfilePageActions = createActionGroup({
	source: source,
	events: {
		pageEnter: emptyProps(),
	},
});
