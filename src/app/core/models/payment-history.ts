import { Booking } from '@models/booking';
import { Currency } from '@enums/currency';
import { PaymentMethod } from '@enums/payment-method';
import { PaymentStatus } from '@enums/payment-status';

export interface PaymentHistory {
	/**
	 * The amount of the payment.
	 */
	amount: number;

	/**
	 * The payment method used for this payment.
	 */
	paymentMethod: PaymentMethod;

	/**
	 * The transaction ID associated with this payment.
	 */
	transaction?: string;

	/**
	 * The status of the payment.
	 */
	status: PaymentStatus;

	/**
	 * A description of the payment.
	 */
	description?: string;

	/**
	 * The currency of the payment.
	 */
	currency: Currency;

	/**
	 * The URL to the receipt for this payment.
	 */
	receiptUrl?: string;

	/**
	 * The booking associated with this payment.
	 */
	booking?: Booking;
}
