import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../interfaces/auth.namespace'

/**
 * Class representing the response structure for deleting a two-factor authentication factor.
 * @class _Delete
 * @export _Delete
 * @implements {IAuth.ITwoFactor.IResponse.IDelete}
 * @namespace Auth.TwoFactor.Response
 * @description Defines the structure of the response when a two-factor authentication factor is deleted.
 * This class handles validation and storage of the deletion operation results.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.TwoFactor.Response
 * @public
 * @see IAuth.ITwoFactor.IResponse.IDelete
 * @see Auth.TwoFactor.Response
 * @see Auth.TwoFactor
 * @see Auth
 * 
 * @property {boolean} success - Indicates if the deletion was successful
 * @property {string} message - Additional information about the deletion
 * 
 * @example
 * const deleteResponse = new _Delete(
 *   true,
 *   'Two-factor authentication factor deleted successfully'
 * );
 * 
 * @remarks
 * The _Delete class provides a standardized response format for 2FA deletion operations.
 * It ensures proper validation of the success status and message content.
 * This class is essential for maintaining consistent deletion response handling.
 */
export class _Delete implements IAuth.ITwoFactor.IResponse.IDelete {
    /**
     * Indicates whether the deletion operation was successful.
     * @type {boolean}
     * @description A boolean value representing the success status of the deletion operation.
     * True indicates successful deletion, false indicates failure.
     * @memberof _Delete
     * @public
     * @since 2.0.0
     * @see IAuth.ITwoFactor.IResponse.IDelete#success
     * 
     * @remarks
     * This property is crucial for determining the outcome of the deletion operation.
     * It should be checked before proceeding with any subsequent operations.
     * 
     * @example
     * const success = true;
     */
    @ApiProperty({
        description: 'Indicates whether the deletion operation was successful',
        type: () => Boolean,
        example: true
    })
    success: boolean;

    /**
     * A message providing additional information about the deletion process.
     * @type {string}
     * @description A string containing details or feedback about the deletion process.
     * Provides context about the operation result.
     * @memberof _Delete
     * @public
     * @since 2.0.0
     * @see IAuth.ITwoFactor.IResponse.IDelete#message
     * 
     * @remarks
     * The message property provides human-readable feedback about the deletion operation.
     * It can contain success confirmations, error details, or additional instructions.
     * 
     * @example
     * const message = 'Two-factor authentication factor deleted successfully';
     */
    @ApiProperty({
        description: 'A message providing additional information about the deletion process',
        type: () => String,
        example: 'Two-factor authentication factor deleted successfully'
    })
    message: string;

    /**
     * Creates an instance of the Delete response model for two-factor authentication.
     * @constructor
     * @param {boolean} success - Indicates whether the deletion operation was successful
     * @param {string} message - A message providing additional information about the deletion process
     * @throws {Error} Will throw an error if success is not a boolean or message is not a string
     * @memberof _Delete
     * @public
     * @since 2.0.0
     * 
     * @remarks
     * The constructor performs validation on both parameters to ensure data integrity.
     * It enforces type checking to maintain consistent response structures.
     * 
     * @example
     * const deleteResponse = new _Delete(
     *   true,
     *   'Two-factor authentication factor deleted successfully'
     * );
     */
    constructor(success: boolean, message: string) {
        // Validate success is a boolean
        if (typeof success !== 'boolean') {
            throw new Error('Success must be a boolean value');
        }

        // Validate message is a string
        if (typeof message !== 'string') {
            throw new Error('Message must be a string');
        }

        this.success = success;
        this.message = message;
    }
}