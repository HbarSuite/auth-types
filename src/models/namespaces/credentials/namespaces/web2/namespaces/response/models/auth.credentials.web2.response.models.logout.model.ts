import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'

/**
 * Represents the response structure for a Web2 logout operation.
 *
 * @class _Logout
 * @implements {IAuth.ICredentials.IWeb2.IResponse.ILogout}
 * @namespace Auth.Credentials.Web2.Response.Logout
 * @description Contains the logout status and result message for Web2 authentication logout operations
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web2
 * @public
 * 
 * @property {boolean} logout - Indicates whether the logout operation was successful.
 * @property {string} message - A descriptive message about the logout operation result.
 *
 * @example
 * const logoutResponse = new _Logout({
 *   logout: true,
 *   message: "User successfully logged out"
 * });
 */
export class _Logout implements IAuth.ICredentials.IWeb2.IResponse.ILogout {
    /**
     * Indicates whether the logout operation was successful.
     * Used to determine if the user was properly logged out of the system.
     *
     * @type {boolean}
     * @memberof _Logout
     * @public
     * @since 2.0.0
     * @default false
     * @throws {Error} If the value is not a boolean during initialization
     * 
     * @example
     * // Returns true if logout was successful
     * console.log(logoutInstance.logout); // true
     */
    @ApiProperty({
        description: 'Indicates whether the logout operation was successful',
        type: () => Boolean,
        required: true,
        example: true
    })
    public logout: boolean;

    /**
     * A descriptive message about the logout operation result.
     * Provides additional context about the logout operation outcome.
     *
     * @type {string}
     * @memberof _Logout
     * @public
     * @since 2.0.0
     * @default ""
     * @throws {Error} If the value is not a non-empty string during initialization
     * 
     * @example
     * // Returns the logout result message
     * console.log(logoutInstance.message); // "User successfully logged out"
     */
    @ApiProperty({
        description: 'A descriptive message about the logout operation result',
        type: () => String,
        required: true,
        example: 'User successfully logged out'
    })
    public message: string;

    /**
     * Creates an instance of _Logout.
     * Validates and initializes the logout status and result message.
     *
     * @constructor
     * @param {IAuth.ICredentials.IWeb2.IResponse.ILogout} logoutData - The logout response data.
     * @throws {Error} If the logout status is not a boolean or if the message is not a non-empty string.
     * @memberof _Logout
     * @since 2.0.0
     * @public
     * 
     * @example
     * try {
     *   const logoutResponse = new _Logout({
     *     logout: true,
     *     message: "User successfully logged out"
     *   });
     * } catch (error) {
     *   console.error('Failed to create logout response:', error.message);
     * }
     */
    constructor(logoutData: IAuth.ICredentials.IWeb2.IResponse.ILogout) {
        // Validate and set logout status
        if (typeof logoutData.logout !== 'boolean') {
            throw new Error('Logout status must be a boolean');
        }
        this.logout = logoutData.logout;

        // Validate and set result message
        if (typeof logoutData.message !== 'string' || logoutData.message.trim() === '') {
            throw new Error('Message must be a non-empty string');
        }
        this.message = logoutData.message;
    }
}