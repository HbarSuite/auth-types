import { ApiProperty } from '@hsuite/nestjs-swagger';
import { _User } from '../../../../user/auth.credentials.user.namespace';
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'

/**
 * Class representing signup data for Web2 authentication
 * @class _Signup
 * @export _Signup
 * @implements {IAuth.ICredentials.IWeb2.IDto.ISignup}
 * @namespace Auth.Credentials.Web2.Dto.Signup
 * @description Handles validation and storage of Web2 signup credentials including username, email, password and user tags
 */
export class _Signup implements IAuth.ICredentials.IWeb2.IDto.ISignup {
    /**
     * The unique username identifier for the account
     * @type {string}
     * @memberof _Signup
     * @public
     * @description Must be a non-empty string that uniquely identifies the user account
     * @example "john_doe"
     */
    @ApiProperty({
        description: 'The unique identifier for the user\'s account',
        type: () => String,
    })
    public username: string;

    /**
     * The email address for the account
     * @type {string}
     * @memberof _Signup
     * @public 
     * @description Must be a valid email format (e.g. user@domain.com)
     * @example "john@example.com"
     */
    @ApiProperty({
        description: 'The email address associated with the user\'s account',
        type: () => String,
    })
    public email: string;

    /**
     * The account password
     * @type {string}
     * @memberof _Signup
     * @public
     * @description Must be at least 8 characters long. Should be securely hashed before storage.
     * @example "securePassword123"
     */
    @ApiProperty({
        description: 'The secret password for authentication (should be securely hashed)',
        type: () => String,
    })
    public password: string;

    /**
     * Array of metadata tags associated with the user
     * @type {Array<IAuth.ICredentials.IUser.ITags>}
     * @memberof _Signup
     * @public
     * @description Must be a non-empty array of tag objects containing key-value pairs
     * @example [{ key: "role", value: "user" }, { key: "status", value: "active" }]
     */
    @ApiProperty({
        description: 'An array of tags associated with the user',
        type: () => _User.Tags,
        isArray: true
    })
    public tags: Array<IAuth.ICredentials.IUser.ITags>;

    /**
     * Creates and validates a new signup credentials instance
     * @param {IAuth.ICredentials.IWeb2.IDto.ISignup} signup - The signup data object
     * @param {string} signup.username - The unique username (must be non-empty string)
     * @param {string} signup.email - The email address (must be valid email format)
     * @param {string} signup.password - The password (must be 8+ characters)
     * @param {Array<IAuth.ICredentials.IUser.ITags>} signup.tags - Array of user tags (must be non-empty)
     * @throws {Error} When username is empty or not a string
     * @throws {Error} When email format is invalid
     * @throws {Error} When password is less than 8 characters
     * @throws {Error} When tags array is empty or invalid
     * @memberof _Signup
     * @example
     * const signup = new _Signup({
     *   username: "john_doe",
     *   email: "john@example.com", 
     *   password: "securePassword123",
     *   tags: [{ key: "role", value: "user" }]
     * });
     */
    constructor(signup: IAuth.ICredentials.IWeb2.IDto.ISignup) {
        // Validate and set username
        if (typeof signup.username !== 'string' || signup.username.trim() === '') {
            throw new Error('Username must be a non-empty string');
        }
        this.username = signup.username;

        // Validate and set email using regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof signup.email !== 'string' || !emailRegex.test(signup.email)) {
            throw new Error('Invalid email format');
        }
        this.email = signup.email;

        // Validate and set password
        if (typeof signup.password !== 'string' || signup.password.length < 8) {
            throw new Error('Password must be a string with at least 8 characters');
        }
        this.password = signup.password;

        // Validate and set tags array
        if (!Array.isArray(signup.tags) || signup.tags.length === 0) {
            throw new Error('Tags must be a non-empty array');
        }
        this.tags = signup.tags.map(tag => new _User.Tags(tag));
    }
}