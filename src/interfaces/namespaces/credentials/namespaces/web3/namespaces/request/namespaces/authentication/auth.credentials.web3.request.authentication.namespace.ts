import { _IAuthenticate } from './interfaces/auth.credentials.web3.request.authentication.authenticate.interface'
import { _IData } from './interfaces/auth.credentials.web3.request.authentication.data.interface'
import { _IPayload } from './interfaces/auth.credentials.web3.request.authentication.payload.interface'
import { _ISignedData } from './interfaces/auth.credentials.web3.request.authentication.signed-data.interface'

/**
 * Web3 Authentication Namespace
 * @namespace _IAuthentication
 * @export _IAuthentication
 * @namespace IAuth._ICredentials._IWeb3._IRequest._IAuthentication
 * @description Namespace for Web3 Authentication interfaces and types.
 * This namespace contains all the necessary interfaces and types for handling
 * Web3 authentication requests, including signed data, payload, and authentication data.
 * @property {_IAuthentication.ISignedData} ISignedData - Interface for signed authentication data containing signature and server account
 * @property {_IAuthentication.IPayload} IPayload - Interface for authentication payload containing URL, node and data
 * @property {_IAuthentication.IData} IData - Interface for authentication data containing token
 * @property {_IAuthentication.IAuthenticate} IAuthenticate - Interface combining signed data and payload for complete authentication
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * // Using the Web3 Authentication namespace
 * const authRequest: _IAuthentication.IAuthenticate = {
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
 * };
 * ```
 */
export namespace _IAuthentication {
    /**
     * Signed Data Type
     * @type {_ISignedData} ISignedData
     * @description Represents the signed data for Web3 authentication.
     * Contains the digital signature and the server signing account.
     * @property {Uint8Array} signature - The digital signature as a byte array
     * @property {string} serverSigningAccount - The Ethereum address of the signing server
     * @memberof _IAuthentication
     * @since 2.0.0
     * @see {@link _ISignedData}
     * @example
     * ```typescript
     * const signedData: ISignedData = {
     *   signature: new Uint8Array([1, 2, 3, 4, 5]),
     *   serverSigningAccount: "0x1234567890abcdef"
     * };
     * ```
     */
    export type ISignedData = _ISignedData

    /**
     * Authentication Data Type
     * @type {_IData} IData
     * @description Represents the authentication data structure.
     * Contains a token used for authentication purposes.
     * @property {string} token - The JWT or other authentication token
     * @memberof _IAuthentication
     * @since 2.0.0
     * @see {@link _IData}
     * @example
     * ```typescript
     * const authData: IData = {
     *   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * };
     * ```
     */
    export type IData = _IData

    /**
     * Authentication Payload Type
     * @type {_IPayload} IPayload
     * @description Represents the payload structure for Web3 authentication requests.
     * Includes URL, node identifier, and authentication data.
     * @property {string} url - The authentication endpoint URL
     * @property {string} node - The identifier of the node making the request
     * @property {IData} data - The authentication data containing the token
     * @memberof _IAuthentication
     * @since 2.0.0
     * @see {@link _IPayload}
     * @example
     * ```typescript
     * const payload: IPayload = {
     *   url: "https://example.com/auth",
     *   node: "node-1",
     *   data: {
     *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *   }
     * };
     * ```
     */
    export type IPayload = _IPayload

    /**
     * Complete Authentication Type
     * @type {_IAuthenticate} IAuthenticate
     * @description Represents the complete Web3 authentication interface.
     * Combines signed data and payload information for authentication requests.
     * @property {ISignedData} signedData - The signed authentication data
     * @property {IPayload} payload - The authentication payload
     * @memberof _IAuthentication
     * @since 2.0.0
     * @see {@link _IAuthenticate}
     * @example
     * ```typescript
     * const authenticate: IAuthenticate = {
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
     * };
     * ```
     */
    export type IAuthenticate = _IAuthenticate
}