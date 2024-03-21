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

	errors: HttpErrorResponse | undefined;

	firstName: string | undefined;

	/**
	 * Represents the last name of the user.
	 */
	lastName: string | undefined;

	/**
	 * Represents the email address of the user. Must be unique.
	 */
	email: string | undefined;

	/**
	 * Represents the role of the user.
	 */
	role: Role | undefined;

	/**
	 * Represents the URL path of the user's profile picture.
	 */
	picture: string | undefined;

	/**
	 * Represents the biography of the user.
	 */
	bio: string | undefined;

	/**
	 * Represents the phone number associated with the user.
	 */
	phone: Phone | undefined;

	/**
	 * Represents the gender of the user.
	 */
	gender: Gender | undefined;

	/**
	 * Represents the age of the user.
	 */
	age: number | undefined;

	/**
	 * Represents the status of the user's ID verification.
	 */
	idChecked: IdChecked | undefined;

	/**
	 * Represents the type of ID verification the user underwent.
	 */
	idCheckedType: IdCheckedType | undefined;

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
	verificationStatus: VerificationStatus | undefined;

	/**
	 * Represents the list of cars associated with the user.
	 */
	cars: Car[] | undefined;

	/**
	 * Represents the preferences of the user.
	 */
	preferences: Preferences | undefined;
}
