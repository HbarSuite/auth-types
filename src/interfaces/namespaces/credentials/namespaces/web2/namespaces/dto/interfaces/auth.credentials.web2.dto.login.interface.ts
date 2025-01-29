/**
 * Login Interface for Web2 Authentication
 * @export _ILogin
 * @interface _ILogin
 * @namespace IAuth._ICredentials._IWeb2._IDto._ILogin
 * @description Represents the login credentials for Web2 authentication
 * @property {string} username - The unique identifier for the user's account
 * @property {string} email - The email address associated with the user's account
 * @property {string} password - The secret password for authentication (should be securely hashed)
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const loginCredentials: _ILogin = {
 *   username: "john_doe",
 *   email: "john@example.com",
 *   password: "securePassword123"
 * };
 * ```
 */
export interface _ILogin {
    /**
     * The unique username identifier for the user's account
     * @description A unique string that identifies the user in the system
     * @property {string} username
     * @type {string}
     * @since 2.0.0
     * @public
     * @example
     * ```typescript
     * username: "john_doe"
     * ```
     * @minLength 3
     * @maxLength 50
     * @pattern ^[a-zA-Z0-9_-]+$
     */
    username: string;

    /**
     * The email address associated with the user's account
     * @description The user's email address used for communication and account recovery
     * @property {string} email
     * @type {string} 
     * @since 2.0.0
     * @public
     * @example
     * ```typescript
     * email: "john@example.com"
     * ```
     * @format email
     * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     */
    email: string;

    /**
     * The secret password for authentication
     * @description The user's password that should be securely hashed before storage
     * @property {string} password
     * @type {string}
     * @since 2.0.0
     * @public
     * @example
     * ```typescript
     * password: "securePassword123"
     * ```
     * @minLength 8
     * @maxLength 128
     * @pattern ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$
     * @format password
     */
    password: string;
}