import { _IPayload } from './auth.credentials.web3.request.authentication.payload.interface'
import { _ISignedData } from './auth.credentials.web3.request.authentication.signed-data.interface'

/**
 * Interface representing Web3 authentication request
 * @interface _IAuthenticate
 * @export _IAuthenticate
 * @namespace IAuth._ICredentials._IWeb3._IRequest._IAuthentication._IAuthenticate
 * @description Represents the interface for Web3 authentication, combining signed data and payload information.
 * This interface is used to structure authentication requests in Web3 environments, ensuring proper validation
 * and security measures are in place.
 * @property {_ISignedData} signedData - The signed data for the authentication request.
 * @property {_IPayload} payload - The payload containing authentication details.
 * @since 2.0.0
 * @see {@link _ISignedData} For details about the signed data structure
 * @see {@link _IPayload} For details about the payload structure
 * @public
 * @category Authentication
 * @throws {Error} If signedData or payload are invalid or missing
 * @remarks
 * The authentication process requires both signed data for verification and a payload containing
 * the actual authentication information. This dual structure ensures security and data integrity.
 * @example
 * ```typescript
 * const authRequest: _IAuthenticate = {
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
export interface _IAuthenticate {
    /**
     * The signed data containing signature and server signing account
     * @description The signed data for the authentication request, including cryptographic signature
     * and server account information. This data is used to verify the authenticity of the request.
     * @property {_ISignedData} signedData - Signed data object
     * @type {_ISignedData}
     * @memberof _IAuthenticate
     * @required
     * @throws {Error} If signature or server signing account is invalid
     * @since 2.0.0
     * @example
     * ```typescript
     * signedData: {
     *   signature: new Uint8Array([1, 2, 3, 4, 5]),
     *   serverSigningAccount: "0x1234567890abcdef"
     * }
     * ```
     */
    signedData: _ISignedData

    /**
     * The payload containing url, node and authentication data
     * @description The payload containing authentication details including the target URL,
     * node identifier, and any additional authentication data required for the request.
     * This structure allows for flexible authentication mechanisms while maintaining
     * type safety.
     * @property {_IPayload} payload - Authentication payload object
     * @type {_IPayload}
     * @memberof _IAuthenticate
     * @required
     * @throws {Error} If payload data is invalid or incomplete
     * @since 2.0.0
     * @example
     * ```typescript
     * payload: {
     *   url: "https://example.com/auth",
     *   node: "node-1",
     *   data: {
     *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     *   }
     * }
     * ```
     */
    payload: _IPayload
}