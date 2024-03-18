import { Gender } from '@enums/gender';
import { IdChecked } from '@enums/id-check';
import { IdCheckedType } from '@enums/id-check-type';
import { Role } from '@enums/role';
import { VerificationStatus } from '@enums/verification-status';
import { Phone } from '@models/phone';
import { Car } from '@models/car';
import { Preferences } from '@models/preferences';
import { AbstractResponse } from '@models/abstract-response';

/**
 * Represents a user entity in the system.
 * This interface includes information about a user such as their first and last name, email, password, role,
 * picture, birth year, full birthdate, bio, phone, gender, age, last login date and time, member since date and time,
 * ID checked status, ID checked type, email verification status, phone verification status, picture availability, and
 * verification status.
 */
export interface User extends AbstractResponse {
	/**
	 * Represents the first name of the user.
	 */
	firstName: string;

	/**
	 * Represents the last name of the user.
	 */
	lastName: string;

	/**
	 * Represents the email address of the user. Must be unique.
	 */
	email: string;

	/**
	 * Represents the password of the user.
	 */
	password: string;

	/**
	 * Represents the role of the user.
	 */
	role: Role;

	/**
	 * Represents the URL path of the user's profile picture.
	 */
	picture: string;

	/**
	 * Represents the birth year of the user.
	 */
	birthYear: number;

	/**
	 * Represents the birthdate of the user.
	 */
	birthDate: Date;

	/**
	 * Represents the biography of the user.
	 */
	bio: string;

	/**
	 * Represents the phone number associated with the user.
	 */
	phone: Phone;

	/**
	 * Represents the gender of the user.
	 */
	gender: Gender;

	/**
	 * Represents the age of the user.
	 */
	age: number;

	/**
	 * Represents the timestamp of the user's last login.
	 */
	lastLogin: Date;

	/**
	 * Represents the timestamp when the user became a member.
	 */
	memberSince: Date;

	/**
	 * Represents the status of the user's ID verification.
	 */
	idChecked: IdChecked;

	/**
	 * Represents the type of ID verification the user underwent.
	 */
	idCheckedType: IdCheckedType;

	/**
	 * Represents whether the user's email address is verified.
	 */
	emailVerified: boolean;

	/**
	 * Represents whether the user's phone number is verified.
	 */
	phoneVerified: boolean;

	/**
	 * Represents whether the user has a profile picture.
	 */
	hasPicture: boolean;

	/**
	 * Represents the verification status of the user's account.
	 */
	verificationStatus: VerificationStatus;

	/**
	 * Represents the list of cars associated with the user.
	 */
	cars?: Car[];

	/**
	 * Represents the preferences of the user.
	 */
	preferences?: Preferences;
}
