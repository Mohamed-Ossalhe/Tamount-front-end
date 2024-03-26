/**
 * Enum representing the status of a payment transaction.
 * This enum includes the possible states a payment can be in: PENDING, SUCCESS, FAILED, and REFUNDED.
 */
export enum PaymentStatus {
	/**
	 * The payment is pending.
	 */
	PENDING = 'PENDING',

	/**
	 * The payment was successful.
	 */
	SUCCEEDED = 'SUCCEEDED',

	/**
	 * The payment failed.
	 */
	FAILED = 'FAILED',

	/**
	 * The payment was refunded.
	 */
	REFUNDED = 'REFUNDED',
}
