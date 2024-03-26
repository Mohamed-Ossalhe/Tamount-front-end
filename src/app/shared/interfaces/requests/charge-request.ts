import { Currency } from '@enums/currency';
import { PaymentMethod } from '@enums/payment-method';

export interface ChargeRequest {
	/**
	 * Description of the charge.
	 */
	description?: string;

	/**
	 * Amount of the charge.
	 * @NotNull message: "amount cannot be null"
	 * @NotEmpty message: "amount is required"
	 */
	amount: number;

	/**
	 * Currency of the charge.
	 * @NotNull message: "currency cannot be null"
	 * @NotEmpty message: "currency is required"
	 */
	currency: Currency;

	/**
	 * Payment Method of the charge.
	 * @NotNull message: "Payment Method cannot be null"
	 * @NotEmpty message: "Payment Method is required"
	 */
	paymentMethod: PaymentMethod;

	/**
	 * Token for the charge.
	 * @NotNull message: "token cannot be null"
	 * @NotEmpty message: "token is required"
	 */
	token: string;

	/**
	 * Customer associated with the charge.
	 */
	customer?: string;
}
