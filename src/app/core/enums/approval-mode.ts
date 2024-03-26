/**
 * Enumeration representing approval modes for a ride.
 *
 * This enum defines two approval modes: MANUAL and INSTANT.
 */
export enum ApprovalMode {
	/**
	 * Represents manual approval mode where driver approval is required.
	 *
	 * In this mode, approval is required to be provided manually by a driver.
	 */
	MANUAL = 'MANUAL',

	/**
	 * Represents instant approval mode where driver approval is not required.
	 *
	 * In this mode, approval is granted automatically without driver approval.
	 */
	INSTANT = 'INSTANT',
}
