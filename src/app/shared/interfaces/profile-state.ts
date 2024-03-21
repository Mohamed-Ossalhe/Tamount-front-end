import { Role } from '@enums/role';
import { Phone } from '@models/phone';
import { Gender } from '@enums/gender';
import { IdChecked } from '@enums/id-check';
import { IdCheckedType } from '@enums/id-check-type';
import { VerificationStatus } from '@enums/verification-status';
import { Car } from '@models/car';
import { Preferences } from '@models/preferences';
import { HttpErrorResponse } from '@angular/common/http';

export interface ProfileState {
	loading: boolean;

	errors: HttpErrorResponse | null;

	firstName: string | null;

	/**
	 * Represents the last name of the user.
	 */
	lastName: string | null;

	/**
	 * Represents the email address of the user. Must be unique.
	 */
	email: string | null;

	/**
	 * Represents the role of the user.
	 */
	role: Role | null;

	/**
	 * Represents the URL path of the user's profile picture.
	 */
	picture: string | null;

	/**
	 * Represents the biography of the user.
	 */
	bio: string | null;

	/**
	 * Represents the phone number associated with the user.
	 */
	phone: Phone | null;

	/**
	 * Represents the gender of the user.
	 */
	gender: Gender | null;

	/**
	 * Represents the age of the user.
	 */
	age: number | null;

	/**
	 * Represents the status of the user's ID verification.
	 */
	idChecked: IdChecked | null;

	/**
	 * Represents the type of ID verification the user underwent.
	 */
	idCheckedType: IdCheckedType | null;

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
	verificationStatus: VerificationStatus | null;

	/**
	 * Represents the list of cars associated with the user.
	 */
	cars: Car[] | null | undefined;

	/**
	 * Represents the preferences of the user.
	 */
	preferences: Preferences | null | undefined;
}
