import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'

/**
 * Class representing the logout response for Web3 authentication.
 * @class _Logout
 * @implements {IAuth.ICredentials.IWeb3.IResponse.ILogout}
 * @export _Logout
 * @namespace Auth.Credentials.Web3.Response
 * @description Defines the structure of the logout response after a Web3 logout attempt.
 * This class handles the response data when a user logs out of the Web3 authentication system.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * @see IAuth.ICredentials.IWeb3.IResponse.ILogout
 * @see Auth.Credentials.Web3.Response
 * @see Auth.Credentials.Web3
 * @see Auth.Credentials
 * @see Auth
 * 
 * @property {boolean} logout - Indicates whether the logout was successful
 * @property {string} message - A message describing the result of the logout attempt
 * 
 * @example
 * const logoutResponse = new _Logout(true, "Logout successful");
 * console.log(logoutResponse.logout); // true
 * console.log(logoutResponse.message); // "Logout successful"
 */
export class _Logout implements IAuth.ICredentials.IWeb3.IResponse.ILogout {
    /**
     * Indicates whether the logout was successful.
     * @type {boolean}
     * @description A boolean value that is true if the logout was successful, false otherwise.
     * Used to quickly determine the success state of the logout operation.
     * @memberof _Logout
     * @public
     * @since 2.0.0
     * @default false
     * @see IAuth.ICredentials.IWeb3.IResponse.ILogout#logout
     * 
     * @example
     * const logoutResponse = new _Logout(true, "Logout successful");
     * console.log(logoutResponse.logout); // true
     */
    @ApiProperty({
        description: 'Indicates whether the logout was successful',
        type: () => Boolean,
        example: true
    })
    logout: boolean;

    /**
     * A message describing the result of the logout attempt.
     * @type {string}
     * @description A string containing information about the logout process, such as "Logout successful" or an error message.
     * Provides human-readable feedback about the logout operation result.
     * @memberof _Logout
     * @public
     * @since 2.0.0
     * @default ""
     * @see IAuth.ICredentials.IWeb3.IResponse.ILogout#message
     * 
     * @example
     * const logoutResponse = new _Logout(true, "Logout successful");
     * console.log(logoutResponse.message); // "Logout successful"
     */
    @ApiProperty({
        description: 'A message describing the result of the logout attempt',
        type: () => String,
        example: "Logout successful"
    })
    message: string;

    /**
     * Creates an instance of _Logout.
     * @constructor
     * @param {boolean} logout - Indicates whether the logout was successful.
     * @param {string} message - A message describing the result of the logout attempt.
     * @throws {Error} Will throw an error if logout is not a boolean value
     * @throws {Error} Will throw an error if message is not a non-empty string
     * @memberof _Logout
     * @public
     * @since 2.0.0
     * @see IAuth.ICredentials.IWeb3.IResponse.ILogout
     * 
     * @example
     * const logoutResponse = new _Logout(true, "Logout successful");
     */
    constructor(logout: boolean, message: string) {
        // Validate logout parameter is a boolean
        if (typeof logout !== 'boolean') {
            throw new Error('Logout must be a boolean value');
        }
        this.logout = logout;

        // Validate message parameter is a non-empty string
        if (typeof message !== 'string' || message.trim().length === 0) {
            throw new Error('Message must be a non-empty string');
        }
        this.message = message;
    }
}
