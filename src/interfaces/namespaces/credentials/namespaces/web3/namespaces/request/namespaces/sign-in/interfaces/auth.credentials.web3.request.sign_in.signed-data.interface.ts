import { _ISignedPayload } from './auth.credentials.web3.request.sign_in.signed-payload.interface'

/**
 * Web3 Sign-in Signed Data Interface
 * @interface _ISignedData
 * @export _ISignedData
 * @namespace IAuth._ICredentials._IWeb3._IRequest._ISignin._ISignedData
 * @description Defines the structure of the signed data used in the Web3 sign-in process.
 * Contains both server-signed payload and user signature for authentication.
 * @property {_ISignedPayload} signedPayload - The signed payload containing server signature and authentication data
 * @property {Uint8Array} userSignature - The user's cryptographic signature
 * @since 2.0.0
 * @public
 * @category Authentication
 * @see {@link _ISignedPayload} For details about the signed payload structure
 * @throws {Error} When signatures are invalid or payload is malformed
 * @remarks
 * The signed data combines server and user signatures to establish a secure authentication chain.
 * Both signatures must be valid for the authentication to succeed.
 * @example
 * ```typescript
 * const signedData: _ISignedData = {
 *   signedPayload: {
 *     serverSignature: new Uint8Array([1, 2, 3]),
 *     originalPayload: {
 *       url: "https://example.com",
 *       node: "node-1",
 *       data: { token: "abc123" }
 *     }
 *   },
 *   userSignature: new Uint8Array([4, 5, 6])
 * };
 * ```
 */
export interface _ISignedData {
    /**
     * Signed payload data
     * @description Contains the server-generated signature and the original authentication payload.
     * The server signs the payload first to establish authenticity of the request parameters.
     * @property {_ISignedPayload} signedPayload - Server-signed payload object
     * @type {_ISignedPayload}
     * @memberof _ISignedData
     * @since 2.0.0
     * @category Properties
     * @see {@link _ISignedPayload}
     * @throws {TypeError} When attempting to assign invalid payload data
     * @throws {Error} When server signature verification fails
     * @remarks
     * The signed payload must be verified before processing the user signature
     * to ensure the request parameters haven't been tampered with.
     * @example
     * ```typescript
     * signedPayload: {
     *   serverSignature: new Uint8Array([1, 2, 3]),
     *   originalPayload: {
     *     url: "https://example.com",
     *     node: "node-1",
     *     data: { token: "abc123" }
     *   }
     * }
     * ```
     */
    signedPayload: _ISignedPayload

    /**
     * User signature
     * @description A cryptographic signature created by the user to authenticate their identity.
     * This signature proves ownership of the Web3 wallet address being used for authentication.
     * @property {Uint8Array} userSignature - User's digital signature bytes
     * @type {Uint8Array}
     * @memberof _ISignedData
     * @since 2.0.0
     * @category Properties
     * @throws {TypeError} When attempting to assign invalid signature data
     * @throws {Error} When signature verification fails
     * @remarks
     * The user signature should be generated using the wallet's signing capabilities
     * and must follow the standard Web3 signature format.
     * @example
     * ```typescript
     * userSignature: new Uint8Array([4, 5, 6])
     * ```
     */
    userSignature: Uint8Array
}