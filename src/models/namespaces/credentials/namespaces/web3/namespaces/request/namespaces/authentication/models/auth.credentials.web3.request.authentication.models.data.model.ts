import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../../../../../interfaces/auth.namespace'

/**
 * Represents the data structure for Web3 authentication requests.
 * Contains the authentication token used for verifying Web3 credentials.
 *
 * @class _Data
 * @implements {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IData}
 * @namespace Auth.Credentials.Web3.Request.Authentication
 * @description Class that encapsulates the authentication token data for Web3 requests.
 * Provides validation and storage of JWT tokens used in the authentication process.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * 
 * @property {string} token - The JWT authentication token used for Web3 credential verification
 * 
 * @throws {Error} When instantiated with an invalid token format or empty string
 * 
 * @example
 * // Create a new authentication data instance with a valid JWT token
 * const authData = new _Data({
 *   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
 * });
 * 
 * // Access the stored token
 * console.log(authData.token);
 * 
 * @see IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IData
 */
export class _Data implements IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IData {
    /**
     * The JWT authentication token used for Web3 credential verification.
     * Must be a valid JWT format string that can be decoded and verified.
     * 
     * @type {string}
     * @memberof _Data
     * @public
     * @since 2.0.0
     * @description Stores the JWT token used to authenticate Web3 credentials.
     * The token follows the standard JWT format of three base64-encoded sections
     * separated by periods.
     * 
     * @throws {Error} When set to an empty string or invalid JWT format
     * 
     * @example
     * // Valid JWT token format
     * authData.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U';
     */
    @ApiProperty({
        description: 'A unique token used for authentication purposes, typically a JWT or similar',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    })
    token: string;

    /**
     * Creates a new instance of the Web3 authentication data class.
     * Validates and stores the provided JWT token.
     * 
     * @constructor
     * @param {string} token - The JWT token to be validated and stored
     * @throws {Error} When the token is empty, not a string, or has invalid JWT format
     * @memberof _Data
     * @since 2.0.0
     * @description Initializes a new Web3 authentication data instance with the provided token.
     * Performs validation to ensure the token meets JWT format requirements.
     * 
     * @example
     * // Create instance with valid JWT token
     * const authData = new _Data('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');
     * 
     * // Will throw error for invalid token
     * try {
     *   const invalidData = new _Data('invalid-token');
     * } catch (error) {
     *   console.error(error.message); // 'Invalid token format'
     * }
     */
    constructor(token: string) {
        // Validate token is non-empty string
        if (!token || typeof token !== 'string') {
            throw new Error('Token must be a non-empty string');
        }

        // Validate JWT format using regex
        if (!/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token)) {
            throw new Error('Invalid token format');
        }

        this.token = token;
    }
}