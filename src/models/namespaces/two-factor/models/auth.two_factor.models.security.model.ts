import { IAuth } from '../../../../interfaces/auth.namespace'
import { ApiProperty } from '@hsuite/nestjs-swagger';

/**
 * Class representing the security aspects of two-factor authentication.
 * @class _Security
 * @export _Security
 * @namespace Auth.TwoFactor
 * @implements {IAuth.ITwoFactor.ISecurity}
 * @description Defines the structure for two-factor authentication security, including the verification code.
 * This class is responsible for validating and storing 2FA verification codes used in the authentication process.
 * The verification code must be a positive integer, typically 6 digits long.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.TwoFactor
 * @public
 * 
 * @property {number} code_2fa - The two-factor authentication verification code
 * 
 * @example
 * // Create a new security instance with a verification code
 * const security = new _Security(123456);
 * 
 * // Access the verification code
 * console.log(security.code_2fa); // 123456
 * 
 * @throws {Error} Will throw an error if code_2fa is not a positive integer during instantiation
 */
export class _Security implements IAuth.ITwoFactor.ISecurity {
    /**
     * The two-factor authentication code.
     * @type {number}
     * @description A numeric code used for verifying the user's identity in two-factor authentication.
     * Must be a positive integer, typically 6 digits. This code is validated during object construction
     * to ensure it meets the required format.
     * @memberof _Security
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a security instance
     * const security = new _Security(123456);
     * 
     * // Access the verification code
     * const code = security.code_2fa; // Returns 123456
     * 
     * @throws {Error} Will throw an error if attempting to set an invalid code through the constructor
     */
    @ApiProperty({
        type: () => 'number',
        description: 'The two-factor authentication code',
        example: 123456,
        required: true
    })
    code_2fa: number;

    /**
     * Creates an instance of _Security.
     * @constructor
     * @param {number} code_2fa - The two-factor authentication code to be validated and stored
     * @throws {Error} Will throw an error if code_2fa is not a positive integer
     * @memberof _Security
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a valid security instance
     * const security = new _Security(123456);
     * 
     * // This will throw an error
     * try {
     *   const invalidSecurity = new _Security(-123);
     * } catch (error) {
     *   console.error(error.message); // "code_2fa must be a positive integer"
     * }
     */
    constructor(code_2fa: number) {
        // Validate code_2fa is a positive integer
        if (typeof code_2fa !== 'number' || isNaN(code_2fa) || !Number.isInteger(code_2fa) || code_2fa < 0) {
            throw new Error('code_2fa must be a positive integer');
        }
        this.code_2fa = code_2fa;
    }
}