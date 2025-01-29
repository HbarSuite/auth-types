import { _ILogin } from './interfaces/auth.credentials.web2.dto.login.interface'
import { _ISignup } from './interfaces/auth.credentials.web2.dto.signup.interface'

/**
 * Web2 Data Transfer Object (DTO) Namespace
 * @export _IDto
 * @namespace IAuth._ICredentials._IWeb2._IDto
 * @description Contains type definitions for Web2 authentication data transfer objects
 * @property {_ILogin} ILogin - Type definition for Web2 login credentials
 * @property {_ISignup} ISignup - Type definition for Web2 signup data
 * @since 2.0.0
 * @public
 * @category DTO
 * @see {@link _ILogin} For login interface details
 * @see {@link _ISignup} For signup interface details
 * @example
 * ```typescript
 * // Using login DTO
 * const loginData: _IDto.ILogin = {
 *   username: "john_doe",
 *   email: "john@example.com", 
 *   password: "securePass123"
 * };
 * 
 * // Using signup DTO
 * const signupData: _IDto.ISignup = {
 *   username: "jane_doe",
 *   email: "jane@example.com",
 *   password: "securePass456",
 *   tags: [{ key: "role", value: "user" }]
 * };
 * ```
 */
export namespace _IDto {
    /**
     * Login Data Transfer Object Type
     * @type {_ILogin}
     * @description Type definition for Web2 login credentials containing username, email and password
     * @see {@link _ILogin} For detailed interface definition
     * @since 2.0.0
     * @public
     * @category DTO
     * @memberof _IDto
     * @property {string} username - The unique username identifier
     * @property {string} email - The user's email address
     * @property {string} password - The user's password (should be hashed)
     * @example
     * ```typescript
     * const loginDto: ILogin = {
     *   username: "john_doe",
     *   email: "john@example.com",
     *   password: "securePass123"
     * };
     * ```
     */
    export type ILogin = _ILogin

    /**
     * Signup Data Transfer Object Type
     * @type {_ISignup}
     * @description Type definition for Web2 signup data extending login credentials with additional metadata
     * @see {@link _ISignup} For detailed interface definition
     * @since 2.0.0
     * @public
     * @category DTO
     * @memberof _IDto
     * @property {string} username - The unique username identifier
     * @property {string} email - The user's email address  
     * @property {string} password - The user's password (should be hashed)
     * @property {Array<_IUser.ITags>} tags - Array of metadata tags
     * @example
     * ```typescript
     * const signupDto: ISignup = {
     *   username: "jane_doe",
     *   email: "jane@example.com",
     *   password: "securePass456",
     *   tags: [{ key: "role", value: "user" }]
     * };
     * ```
     */
    export type ISignup = _ISignup
}