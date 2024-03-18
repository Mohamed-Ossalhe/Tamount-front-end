import { createActionGroup, props } from '@ngrx/store';
import { Gender } from '@enums/gender';

const source = 'Registration Page' as const;

export const RegistrationPageActions = createActionGroup({
	source: source,
	events: {
		enterEmail: props<{ email: string }>(),
		enterName: props<{ firstName: string; lastName: string }>(),
		enterBirthDate: props<{ birthDate: Date }>(),
		enterGender: props<{ gender: Gender }>(),
		enterPassword: props<{ password: string }>(),
		enterPhone: props<{ phone: string }>(),
	},
});
