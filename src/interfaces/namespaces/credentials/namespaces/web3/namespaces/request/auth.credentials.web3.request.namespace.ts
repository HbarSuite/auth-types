import { _IAuthentication } from './namespaces/authentication/auth.credentials.web3.request.authentication.namespace'
import { _ISignin } from './namespaces/sign-in/auth.credentials.web3.request.sign_in.namespace'

/**
 * Namespace for Web3 authentication request-related interfaces and types.
 * @namespace _IRequest
 * @export _IRequest
 * @namespace IAuth._ICredentials._IWeb3._IRequest
 * @description Contains sub-namespaces for authentication and sign-in processes in Web3 requests.
 * This namespace provides a structured way to handle different aspects of Web3 authentication.
 * @property {IAuthentication} IAuthentication - Namespace containing authentication-related interfaces and types.
 * @property {ISignin} ISignin - Namespace containing sign-in related interfaces and types.
 * @since 2.0.0
 * @group Authentication
 * @category Types
 * @public
 * @see {@link _IAuthentication} For authentication-specific interfaces
 * @see {@link _ISignin} For sign-in specific interfaces
 * @example
 * ```typescript
 * // Using authentication namespace
 * const authData: _IRequest.IAuthentication.ISignedData = {
 *   signature: new Uint8Array([1, 2, 3]),
 *   serverSigningAccount: "0x123..."
 * };
 * 
 * // Using sign-in namespace
 * const signInData: _IRequest.ISignin.ISignedData = {
 *   signedPayload: {...},
 *   userSignature: new Uint8Array([4, 5, 6])
 * };
 * ```
 */
export namespace _IRequest {
    /**
     * Authentication-related interfaces and types.
     * @namespace IAuthentication
     * @description Contains interfaces and types for Web3 authentication processes.
     * Provides structures for handling signed data, payloads, and authentication requests.
     * @group Authentication
     * @category Types
     * @public
     * @since 2.0.0
     * @see {@link _IAuthentication.ISignedData}
     * @see {@link _IAuthentication.IPayload}
     * @see {@link _IAuthentication.IData}
     * @see {@link _IAuthentication.IAuthenticate}
     */
    export import IAuthentication = _IAuthentication

    /**
     * Sign-in related interfaces and types.
     * @namespace ISignin
     * @description Contains interfaces and types for Web3 sign-in processes.
     * Provides structures for handling login requests, signed payloads, and signed data.
     * @group Authentication
     * @category Types
     * @public
     * @since 2.0.0
     * @see {@link _ISignin.ISignedPayload}
     * @see {@link _ISignin.ISignedData}
     * @see {@link _ISignin.ILogin}
     */
    export import ISignin = _ISignin
}