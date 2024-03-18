import { PreferenceStatus } from '@enums/preference-status';
import { User } from '@models/user';
import { AbstractResponse } from '@models/abstract-response';

/**
 * Represents a preferences entity in the system.
 * This class includes information about a user rides preferences such as smoking, music, pets, dialog
 * and whether the preferences are saved or not.
 *
 * @author Mohamed Ossalhe
 */
export interface Preferences extends AbstractResponse {
	/**
	 * Represents the preference status for smoking.
	 * This field is mapped to a database column with the constraint that it cannot be null.
	 */
	smoking: PreferenceStatus;

	/**
	 * Represents the preference status for music.
	 * This field is mapped to a database column with the constraint that it cannot be null.
	 */
	music: PreferenceStatus;

	/**
	 * Represents the preference status for pets.
	 * This field is mapped to a database column with the constraint that it cannot be null.
	 */
	pets: PreferenceStatus;

	/**
	 * Represents the preference status for dialog.
	 * This field is mapped to a database column with the constraint that it cannot be null.
	 */
	dialog: PreferenceStatus;

	/**
	 * Indicates whether the preferences are saved or not.
	 * This field is mapped to a database column with the constraint that it cannot be null.
	 */
	preferencesSaved: boolean;

	/**
	 * Represents the user associated with these preferences.
	 * This field is mapped as a lazy-loaded one-to-one relationship with the user table.
	 * Deletion of associated user records triggers a cascade delete action.
	 */
	user: User;
}
