import { _ILogin } from './interfaces/auth.credentials.web3.request.sign_in.login.interface'
import { _ISignedData } from './interfaces/auth.credentials.web3.request.sign_in.signed-data.interface'
import { _ISignedPayload } from './interfaces/auth.credentials.web3.request.sign_in.signed-payload.interface'

/**
 * Namespace for Web3 Sign-in related interfaces.
 * @export _ISignin
 * @namespace IAuth._ICredentials._IWeb3._IRequest._ISignin
 * @description Contains interfaces and types related to the Web3 sign-in process, including signed payloads, signed data, and login requests.
 * @property {ISignedPayload} ISignedPayload - Represents the signed payload for Web3 sign-in.
 * @property {ISignedData} ISignedData - Represents the signed data for Web3 sign-in.
 * @property {ILogin} ILogin - Represents the login request for Web3 sign-in.
 * @since 2.0.0
 * @category Authentication
 * @module Web3
 * @public
 * @interface
 * @see {@link _ISignedPayload}
 * @see {@link _ISignedData}
 * @see {@link _ILogin}
 */
export namespace _ISignin {
    /**
     * Represents the signed payload for Web3 sign-in.
     * @type {_ISignedPayload}
     * @description Contains the server signature and original authentication payload.
     * @memberof _ISignin
     * @since 2.0.0
     * @category Authentication
     * @public
     * @interface
     * @see {@link _ISignedPayload}
     * @example
     * ```typescript
     * const signedPayload: ISignedPayload = {
     *   signature: '0x...',
     *   payload: {...}
     * };
     * ```
     */
    export type ISignedPayload = _ISignedPayload

    /**
     * Represents the signed data for Web3 sign-in.
     * @type {_ISignedData}
     * @description Includes the signed payload and user signature for authentication.
     * @memberof _ISignin
     * @since 2.0.0
     * @category Authentication
     * @public
     * @interface
     * @see {@link _ISignedData}
     * @example
     * ```typescript
     * const signedData: ISignedData = {
     *   signedPayload: {...},
     *   signature: '0x...'
     * };
     * ```
     */
    export type ISignedData = _ISignedData

    /**
     * Represents the login request for Web3 sign-in.
     * @type {_ILogin}
     * @description Contains operator information and signed data for the login process.
     * @memberof _ISignin
     * @since 2.0.0
     * @category Authentication
     * @public
     * @interface
     * @see {@link _ILogin}
     * @example
     * ```typescript
     * const loginRequest: ILogin = {
     *   operator: '0x...',
     *   signedData: {...}
     * };
     * ```
     */
    export type ILogin = _ILogin
}