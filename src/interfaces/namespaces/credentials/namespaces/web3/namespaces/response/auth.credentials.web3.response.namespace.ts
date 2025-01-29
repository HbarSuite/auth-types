import { _ILogin } from './interfaces/auth.credentials.web3.response.login.interface'
import { _ILogout } from './interfaces/auth.credentials.web3.response.logout.interface'

/**
 * Namespace for Web3 authentication response-related interfaces and types.
 * @export _IResponse
 * @namespace IAuth._ICredentials._IWeb3._IResponse
 * @description Contains types for login and logout responses in Web3 authentication processes.
 * This namespace provides a structured way to handle different response types for Web3 authentication operations.
 * @property {ILogin} ILogin - Type representing the login response for Web3 authentication.
 * @property {ILogout} ILogout - Type representing the logout response for Web3 authentication.
 * @since 2.0.0
 * @category Authentication
 * @module Web3
 * @group Response Types
 * @public
 * @remarks
 * The namespace encapsulates all response-related types for Web3 authentication flows.
 * It provides type definitions for both successful and failed authentication attempts.
 * @throws {Error} If response validation fails
 * @see {@link _ILogin} For login response structure details
 * @see {@link _ILogout} For logout response structure details
 * @example
 * ```typescript
 * // Example usage of Web3 response types
 * const loginResponse: _IResponse.ILogin = {
 *   session: { 
 *     id: "123", 
 *     createdAt: new Date(),
 *     updatedAt: new Date()
 *   },
 *   operator: { 
 *     id: "op-123", 
 *     name: "Test Operator",
 *     address: "0x123..."
 *   },
 *   accessToken: "jwt-token"
 * };
 * 
 * const logoutResponse: _IResponse.ILogout = {
 *   logout: true,
 *   message: "Successfully logged out"
 * };
 * ```
 */
export namespace _IResponse {
    /**
     * Type representing the login response for Web3 authentication.
     * @type {_ILogin}
     * @description Defines the structure of the login response after successful Web3 authentication.
     * Contains session information, operator details, and access token.
     * @memberof _IResponse
     * @since 2.0.0
     * @category Authentication
     * @remarks
     * This type is used to represent successful authentication responses.
     * The session contains Web3 session metadata, operator contains authenticated user details,
     * and accessToken provides JWT for subsequent authenticated requests.
     * @throws {Error} If session validation fails
     * @throws {Error} If operator details are invalid
     * @throws {Error} If access token is malformed
     * @see {@link _ILogin} For detailed interface structure
     * @example
     * ```typescript
     * const loginResponse: ILogin = {
     *   session: { 
     *     id: "123", 
     *     createdAt: new Date(),
     *     updatedAt: new Date()
     *   },
     *   operator: { 
     *     id: "op-123", 
     *     name: "Test Operator",
     *     address: "0x123..."
     *   },
     *   accessToken: "jwt-token"
     * };
     * ```
     */
    export type ILogin = _ILogin

    /**
     * Type representing the logout response for Web3 authentication.
     * @type {_ILogout}
     * @description Defines the structure of the logout response after a Web3 logout attempt.
     * Contains status and message information about the logout operation.
     * @memberof _IResponse
     * @since 2.0.0
     * @category Authentication
     * @remarks
     * This type is used to represent logout operation responses.
     * It provides status information about whether the logout was successful
     * and includes any relevant messages about the operation.
     * @throws {Error} If logout operation fails
     * @see {@link _ILogout} For detailed interface structure
     * @example
     * ```typescript
     * const logoutResponse: ILogout = {
     *   logout: true,
     *   message: "Successfully logged out"
     * };
     * ```
     */
    export type ILogout = _ILogout
}