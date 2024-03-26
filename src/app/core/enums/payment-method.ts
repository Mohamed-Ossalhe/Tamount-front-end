/**
 * The PaymentMethod enum represents different methods of payment.
 * It provides a set of predefined constants for common payment methods.
 *
 * @author Mohamed Ossalhe
 */
export enum PaymentMethod {
	/**
	 * Represents payment via a credit card.
	 */
	CREDIT_CARD = 'CREDIT_CARD',

	/**
	 * Represents payment via a debit card.
	 */
	DEBIT_CARD = 'DEBIT_CARD',

	/**
	 * Represents payment via bank transfer.
	 */
	BANK_TRANSFER = 'BANK_TRANSFER',

	/**
	 * Represents payment via PayPal.
	 */
	PAYPAL = 'PAYPAL',

	/**
	 * Represents payment in cash.
	 */
	CASH = 'CASH',
}
