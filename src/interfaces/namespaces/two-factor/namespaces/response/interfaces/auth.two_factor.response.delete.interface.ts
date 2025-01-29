/**
 * Interface representing the response structure for deleting a two-factor authentication factor.
 * @interface _IDelete
 * @export _IDelete
 * @namespace IAuth._ITwoFactor._IResponse._IDelete
 * @description Defines the structure of the response when a two-factor authentication factor is deleted.
 * @property {boolean} success - Indicates whether the deletion operation was successful
 * @property {string} message - A message providing additional information about the deletion process
 * @since 2.0.0
 * @category Authentication
 * @module TwoFactor
 * @public
 * @example
 * ```typescript
 * const deleteResponse: _IDelete = {
 *   success: true,
 *   message: "Two-factor authentication factor deleted successfully"
 * };
 * ```
 */
export interface _IDelete {
    /**
     * Indicates whether the deletion operation was successful.
     * @description A boolean value representing the success status of the deletion operation.
     * @property {boolean} success
     * @type {boolean}
     * @required
     * @since 2.0.0
     * @example true
     * @memberof _IDelete
     * @public
     * @returns {boolean} True if deletion was successful, false otherwise
     */
    success: boolean;

    /**
     * A message providing additional information about the deletion process.
     * @description A string containing details or feedback about the deletion process.
     * @property {string} message
     * @type {string}
     * @required
     * @since 2.0.0
     * @example "Two-factor authentication factor deleted successfully"
     * @memberof _IDelete
     * @public
     * @returns {string} A descriptive message about the deletion operation result
     */
    message: string;
}