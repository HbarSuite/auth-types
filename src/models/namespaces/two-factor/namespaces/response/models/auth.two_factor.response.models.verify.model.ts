import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../interfaces/auth.namespace'

/**
 * Class representing the response structure for verifying a two-factor authentication code.
 * @class Verify
 * @export Verify
 * @implements {IAuth.ITwoFactor.IResponse.IVerify}
 * @namespace _Auth._TwoFactor._Response._Verify
 * @description Defines the structure of the response when a two-factor authentication code is verified.
 * @example
 * const verifyResponse = new _Verify(true, 'Two-factor authentication successful');
 * verifyResponse.success; // true
 * verifyResponse.message; // 'Two-factor authentication successful'
 */
export class _Verify implements IAuth.ITwoFactor.IResponse.IVerify {
    /**
     * Indicates whether the verification was successful.
     * @description A boolean value that represents the success status of the verification process.
     * @type {boolean}
     * @memberof _Verify
     * @example
     * const verifyResponse = new _Verify(true, 'Success');
     * verifyResponse.success; // true
     * @public
     */
    @ApiProperty({
        description: 'Indicates whether the verification was successful',
        type: () => Boolean,
        example: true
    })
    success: boolean;

    /**
     * A message providing additional information about the verification process.
     * @description A string containing details or explanations about the verification outcome.
     * @type {string}
     * @memberof _Verify
     * @example
     * const verifyResponse = new _Verify(true, 'Success');
     * verifyResponse.message; // 'Success'
     * @public
     */
    @ApiProperty({
        description: 'A message providing additional information about the verification process',
        type: () => String,
        example: 'Two-factor authentication successful'
    })
    message: string;

    /**
     * Creates an instance of the Verify response model for two-factor authentication.
     * @param {boolean} success - Indicates whether the verification was successful.
     * @param {string} message - A message providing additional information about the verification process.
     * @description Initializes a new Verify response object with the provided verification details.
     * @throws {Error} When success is not a boolean or message is not a string
     * @memberof _Verify
     * @example
     * // Success case
     * const successResponse = new _Verify(true, 'Two-factor authentication successful');
     * console.log(successResponse.success); // true
     * console.log(successResponse.message); // 'Two-factor authentication successful'
     * 
     * // Error cases
     * try {
     *   new _Verify('not-boolean' as any, 'message'); // Throws Error: Success must be a boolean
     * } catch (e) {
     *   console.error(e);
     * }
     * 
     * try {
     *   new _Verify(true, 123 as any); // Throws Error: Message must be a string
     * } catch (e) {
     *   console.error(e);
     * }
     * @public
     */
    constructor(success: boolean, message: string) {
        // Validate success parameter is boolean
        if (typeof success !== 'boolean') {
            throw new Error('Success must be a boolean');
        }
        // Validate message parameter is string
        if (typeof message !== 'string') {
            throw new Error('Message must be a string');
        }
        this.success = success;
        this.message = message;
    }
}