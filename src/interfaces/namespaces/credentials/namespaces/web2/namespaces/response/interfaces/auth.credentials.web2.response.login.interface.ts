import { IAuth } from '../../../../../../../auth.namespace'
import { ISmartNetwork } from "@hsuite/smart-network-types"

/**
 * Interface representing the response structure for a successful Web2 login operation
 * @interface _ILogin
 * @export _ILogin
 * @namespace IAuth._ICredentials._IWeb2._IResponse._ILogin
 * @description 
 * Represents the response structure for a successful Web2 login operation.
 * Contains the authenticated user details, associated operator information, and access token.
 * 
 * Key components:
 * - User entity with account details
 * - Linked operator information 
 * - JWT access token for authorization
 * 
 * @property {IAuth._ICredentials._IWeb2.IEntity} user - The authenticated user's entity information
 * @property {ISmartNetwork.IOperator.IEntity} operator - The operator associated with the authenticated user
 * @property {string} accessToken - The JWT token for accessing protected resources
 * 
 * @since 2.0.0
 * @category Authentication
 * @public
 * 
 * @example
 * ```typescript
 * const loginResponse: _ILogin = {
 *   user: {
 *     username: "john_doe",
 *     email: "john@example.com",
 *     created_at: 1625097600000,
 *     updated_at: 1625184000000,
 *     type: "web2",
 *     tags: [{ key: "role", value: "user" }]
 *   },
 *   operator: {
 *     id: "op_123",
 *     name: "John's Node",
 *     status: "active",
 *     created_at: 1625097600000
 *   },
 *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * };
 * ```
 */
export interface _ILogin {
    /**
     * The authenticated user's entity information
     * @description 
     * Contains the complete user profile details of the authenticated account including:
     * - Username and email identifiers
     * - Account timestamps
     * - Authentication type
     * - Associated metadata tags
     * 
     * This property provides access to all user-specific data needed after successful authentication.
     * 
     * @property {IAuth._ICredentials._IWeb2.IEntity} user
     * @type {IAuth._ICredentials._IWeb2.IEntity}
     * @memberof _ILogin
     * @since 2.0.0
     * @public
     * 
     * @example
     * ```typescript
     * user: {
     *   username: "john_doe",
     *   email: "john@example.com",
     *   created_at: 1625097600000,
     *   updated_at: 1625184000000,
     *   type: "web2",
     *   tags: [{ key: "role", value: "user" }]
     * }
     * ```
     */
    user: IAuth.ICredentials.IUser.IEntity

    /**
     * The operator associated with the authenticated user
     * @description
     * Contains details about the operator node linked to the user's account including:
     * - Unique operator identifier
     * - Operator name and status
     * - Creation timestamp
     * - Additional operator metadata
     * 
     * This property enables access to operator-specific functionality after authentication.
     * 
     * @property {ISmartNetwork.IOperator.IEntity} operator
     * @type {ISmartNetwork.IOperator.IEntity}
     * @memberof _ILogin
     * @since 2.0.0
     * @public
     * 
     * @example
     * ```typescript
     * operator: {
     *   id: "op_123",
     *   name: "John's Node", 
     *   status: "active",
     *   created_at: 1625097600000
     * }
     * ```
     */
    operator: ISmartNetwork.IOperator.IEntity

    /**
     * The JWT token for accessing protected resources
     * @description
     * A JSON Web Token (JWT) that provides secure access to protected API endpoints.
     * This token should be:
     * - Included in the Authorization header of subsequent requests
     * - Handled securely and never exposed publicly
     * - Validated on the server side for each protected request
     * - Refreshed before expiration to maintain session
     * 
     * Format: Bearer <token>
     * 
     * @property {string} accessToken
     * @type {string}
     * @memberof _ILogin
     * @since 2.0.0
     * @public
     * 
     * @example
     * ```typescript
     * accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * ```
     */
    accessToken: string
}