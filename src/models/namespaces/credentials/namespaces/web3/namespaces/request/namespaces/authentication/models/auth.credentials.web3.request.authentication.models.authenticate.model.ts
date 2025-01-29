import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IAuth } from '../../../../../../../../../../interfaces/auth.namespace'
import { _SignedData } from './auth.credentials.web3.request.authentication.models.signed-data.model'
import { _Payload } from './auth.credentials.web3.request.authentication.models.payload.model'

/**
 * Represents the class for Web3 authentication, combining signed data and payload information.
 * 
 * @class _Authenticate
 * @implements {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IAuthenticate}
 * @namespace Auth.Credentials.Web3.Request.Authentication
 * @description This class encapsulates the necessary components for a Web3 authentication request,
 * including signed data for verification and a payload with authentication details.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * 
 * @property {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData} signedData - The signed data for the authentication request.
 * @property {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload} payload - The payload containing authentication details.
 * 
 * @example
 * const authRequest = new _Authenticate({
 *   signedData: {
 *     signature: new Uint8Array([1, 2, 3, 4, 5]),
 *     serverSigningAccount: "0x1234567890abcdef"
 *   },
 *   payload: {
 *     url: "https://example.com/auth",
 *     node: "node-1",
 *     data: {
 *       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     }
 *   }
 * });
 * 
 * @throws {Error} Will throw an error if signedData or payload is invalid or missing during instantiation.
 */
export class _Authenticate implements IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IAuthenticate {
    /**
     * The signed data for the authentication request.
     * Contains the signature and server signing account information.
     * 
     * @type {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData}
     * @memberof _Authenticate
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * signedData: {
     *   signature: new Uint8Array([1, 2, 3, 4, 5]),
     *   serverSigningAccount: "0x1234567890abcdef"
     * }
     * 
     * @throws {Error} Will throw an error if signedData is not an object or is missing
     */
    @ApiProperty({
        type: () => _SignedData,
        description: 'The signed data for the authentication request.'
    })
    public signedData: IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData

    /**
     * The payload containing authentication details.
     * Includes URL, node identifier and additional authentication data.
     * 
     * @type {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload}
     * @memberof _Authenticate
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * payload: {
     *   url: "https://example.com/auth",
     *   node: "node-1",
     *   data: {
     *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *   }
     * }
     * 
     * @throws {Error} Will throw an error if payload is not an object or is missing
     */
    @ApiProperty({
        type: () => _Payload,
        description: 'The payload containing authentication details.'
    })
    public payload: IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IPayload

    /**
     * Creates an instance of _Authenticate.
     * Validates and initializes the authentication request data.
     * 
     * @constructor
     * @param {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IAuthenticate} data - The authentication data containing signedData and payload.
     * @throws {Error} Will throw an error if signedData or payload is invalid or missing.
     * @memberof _Authenticate
     * @since 2.0.0
     * @public
     * 
     * @example
     * const authRequest = new _Authenticate({
     *   signedData: {
     *     signature: new Uint8Array([1, 2, 3, 4, 5]),
     *     serverSigningAccount: "0x1234567890abcdef"
     *   },
     *   payload: {
     *     url: "https://example.com/auth",
     *     node: "node-1",
     *     data: {
     *       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *     }
     *   }
     * });
     * 
     * @returns {_Authenticate} A new instance of the _Authenticate class
     */
    constructor(data: IAuth.ICredentials.IWeb3.IRequest.IAuthentication.IAuthenticate) {
        // Validate signedData is present and is an object
        if (!data.signedData || typeof data.signedData !== 'object') {
            throw new Error('Invalid signedData: must be an object')
        }

        // Validate payload is present and is an object 
        if (!data.payload || typeof data.payload !== 'object') {
            throw new Error('Invalid payload: must be an object')
        }

        // Initialize the instance properties
        this.signedData = data.signedData
        this.payload = data.payload
    }
}