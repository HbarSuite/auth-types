import { ISmartNetwork } from "@hsuite/smart-network-types"
import { _IWeb3 } from '../../../auth.credentials.web3.namespace'

/**
 * Web3 Login Response Interface
 * @interface _ILogin
 * @export _ILogin
 * @namespace IAuth._ICredentials._IWeb3._IResponse._ILogin
 * @description Defines the structure of the login response after successful Web3 authentication.
 * Contains session information, operator details, and access token.
 * @property {_IWeb3.IEntity} session - The authenticated Web3 session information
 * @property {ISmartNetwork.IOperator.IEntity} operator - The authenticated operator details
 * @property {string} accessToken - Authentication token for subsequent requests
 * @since 2.0.0
 * @public
 * @category Authentication
 * @group Web3
 * @remarks
 * This interface represents the response structure returned after a successful Web3 login.
 * The session contains the Web3 session details, operator contains the authenticated user info,
 * and accessToken provides the JWT for subsequent authenticated requests.
 * @throws {Error} If session validation fails
 * @throws {Error} If operator details are invalid
 * @throws {Error} If access token is malformed
 * @see {@link _IWeb3.IEntity} For session entity structure
 * @see {@link ISmartNetwork.IOperator.IEntity} For operator entity structure
 * @example
 * ```typescript
 * const loginResponse: _ILogin = {
 *   session: {
 *     id: "session-123",
 *     createdAt: new Date(),
 *     expiresAt: new Date(Date.now() + 3600000),
 *     status: "active"
 *   },
 *   operator: {
 *     id: "op-123",
 *     name: "Test Operator",
 *     address: "0x1234567890abcdef",
 *     status: "active"
 *   },
 *   accessToken: "eyJhbGciOiJIUzI1NiIs..."
 * };
 * ```
 */
export interface _ILogin {
    /**
     * Authenticated session information
     * @description Contains details about the authenticated Web3 session including session ID, creation timestamp, expiration and status
     * @property {_IWeb3.IEntity} session - Web3 session entity
     * @type {_IWeb3.IEntity}
     * @memberof _ILogin
     * @since 2.0.0
     * @category Properties
     * @throws {Error} If session ID is invalid
     * @throws {Error} If session dates are invalid
     * @throws {Error} If session status is invalid
     * @remarks
     * The session entity contains critical metadata about the authentication session.
     * All timestamps are in ISO 8601 format and status must be a valid session state.
     * @example
     * ```typescript
     * session: {
     *   id: "session-123",
     *   createdAt: new Date(),
     *   expiresAt: new Date(Date.now() + 3600000),
     *   status: "active"
     * }
     * ```
     */
    session: _IWeb3.IEntity

    /**
     * Authenticated operator information
     * @description Contains identification and details about the operator who successfully authenticated
     * @property {ISmartNetwork.IOperator.IEntity} operator - Operator entity details
     * @type {ISmartNetwork.IOperator.IEntity}
     * @memberof _ILogin
     * @since 2.0.0
     * @category Properties
     * @throws {Error} If operator ID is invalid
     * @throws {Error} If operator address is invalid
     * @throws {Error} If operator status is invalid
     * @remarks
     * The operator entity contains the authenticated user's details including their
     * blockchain address and current status in the system.
     * @example
     * ```typescript
     * operator: {
     *   id: "op-123",
     *   name: "Test Operator",
     *   address: "0x1234567890abcdef",
     *   status: "active"
     * }
     * ```
     */
    operator: ISmartNetwork.IOperator.IEntity

    /**
     * Authentication access token
     * @description A JWT token used to authenticate subsequent API requests
     * @property {string} accessToken - JWT authentication token
     * @type {string}
     * @memberof _ILogin
     * @since 2.0.0
     * @category Properties
     * @throws {Error} If token is empty or malformed
     * @throws {Error} If token signature is invalid
     * @remarks
     * The access token is a JSON Web Token (JWT) that must be included in the Authorization
     * header of subsequent API requests. The token contains encoded claims about the
     * authenticated session and operator.
     * @example
     * ```typescript
     * accessToken: "eyJhbGciOiJIUzI1NiIs..."
     * ```
     */
    accessToken: string
}