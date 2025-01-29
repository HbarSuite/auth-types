import { _ILogin } from './interfaces/auth.credentials.web2.response.login.interface'
import { _ILogout } from './interfaces/auth.credentials.web2.response.logout.interface'

/**
 * Web2 Authentication Response Namespace
 * @export _IResponse
 * @namespace IAuth._ICredentials._IWeb2._IResponse
 * @description Namespace containing response interfaces for Web2 authentication operations like login and logout
 * @property {_ILogin} ILogin - Interface representing the response structure for a successful Web2 login operation
 * @property {_ILogout} ILogout - Interface representing the response structure for a Web2 logout operation
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * // Using login response type
 * const loginResponse: _IResponse.ILogin = {
 *   user: {
 *     id: "123",
 *     username: "john_doe",
 *     email: "john@example.com"
 *   },
 *   operator: {
 *     id: "456",
 *     name: "John's Operator"
 *   },
 *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * };
 * 
 * // Using logout response type
 * const logoutResponse: _IResponse.ILogout = {
 *   logout: true,
 *   message: "Successfully logged out"
 * };
 * ```
 */
export namespace _IResponse {
    /**
     * Login Response Type
     * @type {_ILogin}
     * @description Interface representing the response structure for a successful Web2 login operation
     * @see {@link _ILogin} For detailed interface definition
     * @since 2.0.0
     * @public
     * @example
     * ```typescript
     * const loginResponse: ILogin = {
     *   user: {
     *     id: "123",
     *     username: "john_doe"
     *   },
     *   operator: {
     *     id: "456",
     *     name: "John's Operator"
     *   },
     *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * };
     * ```
     * @remarks This type is used to ensure type safety for login response objects
     * @throws {ValidationError} When required fields are missing or invalid
     * @returns {_ILogin} A strongly typed login response object
     */
    export type ILogin = _ILogin

    /**
     * Logout Response Type
     * @type {_ILogout}
     * @description Interface representing the response structure for a Web2 logout operation
     * @see {@link _ILogout} For detailed interface definition
     * @since 2.0.0
     * @public
     * @example
     * ```typescript
     * const logoutResponse: ILogout = {
     *   logout: true,
     *   message: "Successfully logged out"
     * };
     * ```
     * @remarks This type is used to ensure type safety for logout response objects
     * @throws {ValidationError} When required fields are missing or invalid
     * @returns {_ILogout} A strongly typed logout response object
     */
    export type ILogout = _ILogout
}