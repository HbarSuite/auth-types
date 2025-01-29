import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Login } from './models/auth.credentials.web2.dto.models.login.model'
import { _Signup } from './models/auth.credentials.web2.dto.models.signup.model'

/**
 * Web2 Data Transfer Object (DTO) Namespace
 * @namespace Auth.Credentials.Web2.Dto
 * @description Contains classes for login and signup operations in Web2 authentication.
 * Provides standardized DTOs for handling user authentication data in a Web2 context.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web2
 * @public
 * 
 * @property {Login} Login - Class for handling login credentials and validation
 * @property {Signup} Signup - Class for handling new user registration data and validation
 * 
 * @remarks
 * All DTOs in this namespace implement strict validation rules and type safety.
 * The namespace follows RESTful principles for data transfer.
 * 
 * @example
 * // Using the Login DTO
 * const loginDto = new _Dto.Login({
 *   username: "john_doe",
 *   email: "john@example.com",
 *   password: "securePassword123"
 * });
 * 
 * // Using the Signup DTO
 * const signupDto = new _Dto.Signup({
 *   username: "jane_doe",
 *   email: "jane@example.com",
 *   password: "strongPassword456",
 *   tags: [{ key: "role", value: "user" }]
 * });
 * 
 * @see IAuth.ICredentials.IWeb2.IDto
 * @author HSuite
 */
export namespace _Dto {
    /**
     * Login Data Transfer Object class
     * @class Login
     * @extends _Login
     * @description Represents the login data transfer object for Web2 authentication.
     * Handles validation and transfer of user login credentials.
     * 
     * @see _Login
     * @since 2.0.0
     * @category DTOs
     * @public
     * 
     * @property {string} username - The unique identifier for the user's account
     * @property {string} email - The email address associated with the user's account
     * @property {string} password - The secret password for authentication
     * 
     * @remarks
     * - Username and email are used for user identification
     * - Password should be securely hashed before transmission
     * - All fields are required and validated
     * 
     * @example
     * const loginDto = new _Dto.Login({
     *   username: "john_doe",
     *   email: "john@example.com",
     *   password: "securePassword123"
     * });
     * 
     * @throws {ValidationError} When required fields are missing or invalid
     * @see IAuth.ICredentials.IWeb2.IDto.ILogin
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web2.Dto.Login'
    })
    export class Login extends _Login {}

    /**
     * Signup Data Transfer Object class
     * @class Signup
     * @extends _Signup
     * @description Represents the signup data transfer object for Web2 authentication.
     * Handles validation and transfer of new user registration data.
     * 
     * @see _Signup
     * @since 2.0.0
     * @category DTOs
     * @public
     * 
     * @property {string} username - The unique identifier for the user's account
     * @property {string} email - The email address associated with the user's account
     * @property {string} password - The secret password for authentication
     * @property {Array<IAuth.ICredentials.IUser.ITags>} tags - Array of user metadata tags
     * 
     * @remarks
     * - Username must be unique in the system
     * - Email must be valid and unique
     * - Password must meet security requirements
     * - Tags provide additional user metadata
     * - All fields are validated before processing
     * 
     * @example
     * const signupDto = new _Dto.Signup({
     *   username: "jane_doe",
     *   email: "jane@example.com",
     *   password: "strongPassword456",
     *   tags: [{ key: "role", value: "user" }]
     * });
     * 
     * @throws {ValidationError} When required fields are missing or invalid
     * @throws {DuplicateError} When username or email already exists
     * @see IAuth.ICredentials.IWeb2.IDto.ISignup
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web2.Dto.Signup'
    })
    export class Signup extends _Signup {}
}