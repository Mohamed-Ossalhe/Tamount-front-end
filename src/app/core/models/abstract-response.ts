/**
 * Abstract base class for entities.
 * Provides common fields such as id, creation timestamp, and update timestamp.
 * Subclasses should use the @MappedSuperclass annotation.
 *
 * @author Mohamed Ossalhe
 */
export interface AbstractResponse {
	/**
	 * The unique identifier for the entity.
	 */
	id: string;

	/**
	 * The timestamp indicating when the entity was created.
	 */
	createdAt: Date;

	/**
	 * The timestamp indicating when the entity was last updated.
	 */
	updatedAt: Date;
}
