import { _IData } from './auth.credentials.web3.request.authentication.data.interface'

/**
 * Web3 Authentication Payload Interface
 * @interface _IPayload
 * @export _IPayload
 * @namespace IAuth._ICredentials._IWeb3._IRequest._IAuthentication._IPayload
 * @description Represents the payload structure for Web3 authentication requests containing URL, node and authentication data.
 * This interface defines the complete structure needed for processing Web3 authentication requests.
 * @property {string} url - The URL associated with the authentication request, typically pointing to the authentication endpoint
 * @property {string} node - The identifier of the node handling the authentication, used for routing and tracking
 * @property {_IData} data - The authentication data containing tokens and credentials
 * @since 2.0.0
 * @public
 * @category Authentication
 * @see {@link _IData} For details about the authentication data structure
 * @throws {Error} If required fields are missing or invalid
 * @remarks
 * The payload combines all necessary information for processing a Web3 authentication request,
 * including the target URL, processing node, and authentication credentials.
 * @example
 * ```typescript
 * const payload: _IPayload = {
 *   url: "https://example.com/auth",
 *   node: "node-1",
 *   data: {
 *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *   }
 * };
 * ```
 */
export interface _IPayload {
    /**
     * URL for authentication request
     * @description The URL endpoint associated with the authentication request. This URL should point 
     * to a valid authentication endpoint that can process the Web3 authentication request.
     * @property {string} url - Authentication URL
     * @type {string}
     * @memberof _IPayload
     * @since 2.0.0
     * @category Properties
     * @throws {TypeError} When attempting to assign a non-string value
     * @throws {Error} When URL format is invalid
     * @remarks
     * The URL should be a properly formatted HTTPS endpoint. HTTP endpoints may be rejected
     * for security reasons.
     * @example
     * ```typescript
     * url: "https://example.com/auth"
     * ```
     */
    url: string

    /**
     * Node identifier
     * @description The unique identifier of the node handling the authentication request. This identifier
     * is used for request routing, load balancing, and tracking authentication request processing.
     * @property {string} node - Node identifier
     * @type {string}
     * @memberof _IPayload
     * @since 2.0.0
     * @category Properties
     * @throws {TypeError} When attempting to assign a non-string value
     * @throws {Error} When node identifier format is invalid
     * @remarks
     * Node identifiers should follow the system's naming convention and be unique within
     * the authentication network.
     * @example
     * ```typescript
     * node: "node-1"
     * ```
     */
    node: string

    /**
     * Authentication data
     * @description The authentication data containing tokens and other auth-related information.
     * This object encapsulates all the necessary credentials and tokens required for authentication.
     * @property {_IData} data - Authentication data object
     * @type {_IData}
     * @memberof _IPayload
     * @since 2.0.0
     * @category Properties
     * @throws {TypeError} When data object is invalid or missing required properties
     * @see {@link _IData} For detailed structure of authentication data
     * @remarks
     * The data object must conform to the _IData interface structure and contain valid
     * authentication tokens. Invalid or expired tokens will cause authentication failure.
     * @example
     * ```typescript
     * data: {
     *   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * }
     * ```
     */
    data: _IData
}