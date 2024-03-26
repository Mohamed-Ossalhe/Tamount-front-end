import { createActionGroup, emptyProps } from '@ngrx/store';

const source = 'Location Page' as const;

export const LocationPageActions = createActionGroup({
	source: source,
	events: {
		loadLocations: emptyProps(),
	},
});
