import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'

/**
 * Represents the login credentials for Web2 authentication
 * 
 * @class _Login
 * @export _Login
 * @implements {IAuth.ICredentials.IWeb2.IDto.ILogin}
 * @namespace Auth.Credentials.Web2.Dto.Login
 * @description This class handles the login credentials for traditional web-based authentication.
 * It validates and stores the username, email and password for user authentication.
 * The password should always be securely hashed before storage.
 * 
 * @property {string} username - The unique identifier for the user's account
 * @property {string} email - The email address associated with the user's account
 * @property {string} password - The secret password for authentication (should be securely hashed)
 * 
 * @example
 * const loginCredentials = new _Login({
 *   username: "john_doe",
 *   email: "john@example.com",
 *   password: "securePassword123"
 * });
 * 
 * @see IAuth.ICredentials.IWeb2.IDto.ILogin
 * @since 2.0.0
 * @author HSuite Team
 */
export class _Login implements IAuth.ICredentials.IWeb2.IDto.ILogin {
    /**
     * The unique identifier for the user's account
     * 
     * @public
     * @type {string}
     * @memberof _Login
     * @description Must be a non-empty string that uniquely identifies the user.
     * Used for authentication and user lookup purposes.
     * Cannot be an empty string or contain only whitespace.
     * 
     * @example
     * login.username = "john_doe";
     * 
     * @throws {Error} When attempting to set an empty or whitespace-only username
     */
    @ApiProperty({
        description: 'The unique identifier for the user\'s account',
        type: () => String,
    })
    public username: string;

    /**
     * The email address associated with the user's account
     * 
     * @public
     * @type {string}
     * @memberof _Login
     * @description Must be a valid email format following RFC 5322 standards.
     * Used for account verification, password recovery, and communication.
     * Must contain a local part, @ symbol, and domain part.
     * 
     * @example
     * login.email = "john.doe@example.com";
     * 
     * @throws {Error} When attempting to set an invalid email format
     */
    @ApiProperty({
        description: 'The email address associated with the user\'s account',
        type: () => String,
    })
    public email: string;

    /**
     * The secret password for authentication
     * 
     * @public
     * @type {string}
     * @memberof _Login
     * @description Must be at least 8 characters long for security purposes.
     * Should be securely hashed before storage in the database.
     * Plain text passwords should never be stored or transmitted.
     * 
     * @example
     * login.password = "SecureP@ssw0rd123";
     * 
     * @throws {Error} When attempting to set a password shorter than 8 characters
     * @security Password should be transmitted securely and hashed before storage
     */
    @ApiProperty({
        description: 'The secret password for authentication (should be securely hashed)',
        type: () => String,
    })
    public password: string;

    /**
     * Creates an instance of _Login.
     * 
     * @constructor
     * @param {IAuth.ICredentials.IWeb2.IDto.ILogin} login - The login credentials object containing username, email and password
     * @throws {Error} When username is not a non-empty string or contains only whitespace
     * @throws {Error} When email format is invalid according to RFC 5322 standards
     * @throws {Error} When password is less than 8 characters in length
     * @memberof _Login
     * 
     * @example
     * // Valid login creation
     * const login = new _Login({
     *   username: "john_doe",
     *   email: "john@example.com",
     *   password: "securePassword123"
     * });
     * 
     * @example
     * // Will throw error for invalid credentials
     * try {
     *   const invalidLogin = new _Login({
     *     username: "",  // Empty string not allowed
     *     email: "invalid-email",  // Invalid email format
     *     password: "short"  // Too short
     *   });
     * } catch (error) {
     *   console.error(error.message);
     * }
     * 
     * @see IAuth.ICredentials.IWeb2.IDto.ILogin
     * @throws {Error} When any validation fails
     */
    constructor(login: IAuth.ICredentials.IWeb2.IDto.ILogin) {
        // Validate and set username
        if (typeof login.username !== 'string' || login.username.trim() === '') {
            throw new Error('Username must be a non-empty string');
        }
        this.username = login.username;

        // Validate and set email using regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof login.email !== 'string' || !emailRegex.test(login.email)) {
            throw new Error('Invalid email format');
        }
        this.email = login.email;

        // Validate and set password
        if (typeof login.password !== 'string' || login.password.length < 8) {
            throw new Error('Password must be a string with at least 8 characters');
        }
        this.password = login.password;
    }
}