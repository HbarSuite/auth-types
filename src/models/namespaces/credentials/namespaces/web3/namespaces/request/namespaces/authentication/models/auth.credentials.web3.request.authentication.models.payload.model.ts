import { _Data } from './auth.credentials.web3.request.authentication.models.data.model'
import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IAuth } from '../../../../../../../../../../interfaces/auth.namespace'

/**
 * Represents the payload structure for Web3 authentication requests.
 * Contains the URL, node identifier, and authentication data required for Web3 authentication.
 * 
 * @class _Payload
 * @implements {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload}
 * @description This class encapsulates the necessary information for a Web3 authentication request.
 * It validates and stores the URL, node identifier, and authentication data.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * 
 * @property {string} url - The URL associated with the authentication request
 * @property {string} node - The identifier of the node handling the authentication
 * @property {_Data} data - The authentication data containing the token
 * 
 * @example
 * const payload = new _Payload({
 *   url: "https://example.com/auth",
 *   node: "node-1",
 *   data: new _Data("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
 * });
 * 
 * @throws {Error} Will throw an error if URL is empty or invalid format
 * @throws {Error} Will throw an error if node identifier is empty or invalid
 * @throws {Error} Will throw an error if data object is invalid or missing token
 */
export class _Payload implements IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload {
    /**
     * The URL associated with the authentication request.
     * Must be a valid URL string that points to the authentication endpoint.
     * 
     * @type {string}
     * @memberof _Payload
     * @public
     * @since 2.0.0
     * @throws {Error} Will throw an error if URL is empty or has invalid format
     * 
     * @example
     * url = "https://example.com/auth"
     */
    @ApiProperty({
        description: 'The URL associated with the authentication request',
        example: 'https://example.com/auth'
    })
    url: string

    /**
     * The identifier of the node handling the authentication.
     * Must be a non-empty string that uniquely identifies the processing node.
     * Used for routing and tracking authentication requests.
     * 
     * @type {string}
     * @memberof _Payload
     * @public
     * @since 2.0.0
     * @throws {Error} Will throw an error if node identifier is empty or invalid
     * 
     * @example
     * node = "node-1"
     */
    @ApiProperty({
        description: 'The identifier of the node handling the authentication',
        example: 'node-1'
    })
    node: string

    /**
     * The authentication data containing the token.
     * Contains the JWT token and related authentication information.
     * Instantiated as a _Data object for token validation and management.
     * 
     * @type {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IData}
     * @memberof _Payload
     * @public
     * @since 2.0.0
     * @throws {Error} Will throw an error if data object is invalid or missing token
     * 
     * @example
     * data = new _Data("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
     */
    @ApiProperty({
        description: 'The authentication data',
        type: () => _Data
    })
    data: IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IData

    /**
     * Creates an instance of _Payload.
     * Validates and initializes the payload properties including URL, node identifier, and authentication data.
     * Performs validation checks on all input parameters before instantiation.
     * 
     * @constructor
     * @param {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload} payload - The payload object containing url, node, and data
     * @throws {Error} Will throw an error if URL is empty or invalid format
     * @throws {Error} Will throw an error if node identifier is empty or invalid
     * @throws {Error} Will throw an error if data object is invalid or missing token
     * @memberof _Payload
     * @since 2.0.0
     * 
     * @example
     * const payload = new _Payload({
     *   url: "https://example.com/auth",
     *   node: "node-1", 
     *   data: {
     *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *   }
     * });
     */
    constructor(payload: IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload) {
        // Validate URL is non-empty string
        if (!payload.url || typeof payload.url !== 'string') {
            throw new Error('URL must be a non-empty string')
        }

        // Validate URL format
        try {
            new URL(payload.url)
        } catch (error) {
            throw new Error('Invalid URL format')
        }

        // Validate node identifier
        if (!payload.node || typeof payload.node !== 'string') {
            throw new Error('Node must be a non-empty string')
        }

        // Validate data object and token
        if (!payload.data || typeof payload.data !== 'object' || !payload.data.token) {
            throw new Error('Invalid data object')
        }

        // Initialize instance properties
        this.url = payload.url
        this.node = payload.node
        this.data = new _Data(payload.data.token)
    }
}