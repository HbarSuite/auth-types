import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Login } from './models/auth.credentials.web2.response.models.login.model'
import { _Logout } from './models/auth.credentials.web2.response.models.logout.model'

/**
 * Web2 Response Namespace containing classes for handling Web2 authentication response structures.
 * This namespace provides standardized response classes for login and logout operations.
 * 
 * @namespace _Response
 * @description Contains classes for handling Web2 authentication response structures including login and logout responses
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web2
 * @public
 * 
 * @property {Login} Login - Class for handling login responses with user authentication details
 * @property {Logout} Logout - Class for handling logout responses with operation status
 * 
 * @remarks
 * All response classes in this namespace implement strict validation and type safety.
 * The namespace follows RESTful principles for response handling.
 * 
 * @example
 * // Using the Login response class
 * const loginResponse = new _Response.Login({
 *   user: userEntity,
 *   operator: operatorEntity,
 *   accessToken: "jwt_token_string"
 * });
 * 
 * // Using the Logout response class
 * const logoutResponse = new _Response.Logout({
 *   logout: true,
 *   message: "User successfully logged out"
 * });
 * 
 * @see IAuth.ICredentials.IWeb2.IResponse
 * @author HSuite Team
 */
export namespace _Response {
    /**
     * Login Response class for handling successful Web2 login operations.
     * Extends the base _Login class to provide response structure for authentication.
     * 
     * @class Login
     * @extends _Login
     * @description Represents the response structure for a successful Web2 login operation.
     * Contains authenticated user information, operator details and access token.
     * 
     * @see _Login
     * @since 2.0.0
     * @category Responses
     * @public
     * 
     * @property {IAuth.ICredentials.IUser.IEntity} user - The authenticated user's entity information containing profile details
     * @property {ISmartNode.IOperator.IEntity} operator - The operator associated with the authenticated user for network operations
     * @property {string} accessToken - The JWT token for accessing protected resources and API endpoints
     * 
     * @throws {Error} When required response properties are missing or invalid
     * @throws {Error} When access token validation fails
     * 
     * @example
     * const loginResponse = new _Response.Login({
     *   user: {
     *     username: "john_doe",
     *     email: "john@example.com",
     *     created_at: 1625097600000
     *   },
     *   operator: {
     *     accountId: "0.0.123456",
     *     publicKey: "302a300506032b6570..."
     *   }, 
     *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5..."
     * });
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web2.Response.Login'
    })
    export class Login extends _Login {}

    /**
     * Logout Response class for handling Web2 logout operations.
     * Extends the base _Logout class to provide response structure for logout events.
     * 
     * @class Logout
     * @extends _Logout
     * @description Represents the response structure for a Web2 logout operation.
     * Contains logout status and result message for tracking operation success.
     * 
     * @see _Logout
     * @since 2.0.0
     * @category Responses
     * @public
     * 
     * @property {boolean} logout - Indicates whether the logout operation was successful (true/false)
     * @property {string} message - A descriptive message about the logout operation result and status
     * 
     * @throws {Error} When required response properties are missing or invalid
     * 
     * @example
     * const logoutResponse = new _Response.Logout({
     *   logout: true,
     *   message: "User successfully logged out at 2023-10-20T15:30:00Z"
     * });
     * 
     * @example
     * // Failed logout example
     * const failedLogout = new _Response.Logout({
     *   logout: false,
     *   message: "Logout failed: Invalid session token"
     * });
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web2.Response.Logout'
    })
    export class Logout extends _Logout {}
}