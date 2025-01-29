import { ISmartNetwork } from "@hsuite/smart-network-types"
import { _ISignedData } from './auth.credentials.web3.request.sign_in.signed-data.interface'

/**
 * Web3 Login Request Interface
 * @interface _ILogin
 * @export _ILogin
 * @namespace IAuth._ICredentials._IWeb3._IRequest._ISignin._ILogin
 * @description Defines the structure of the login request for Web3 sign-in process.
 * Contains operator information and signed authentication data.
 * @property {ISmartNetwork.IOperator.IEntity} operator - The operator information for the login request
 * @property {_ISignedData} signedData - The signed data containing signature and payload for authentication
 * @since 2.0.0
 * @public
 * @category Authentication
 * @see {@link _ISignedData} For details about the signed data structure
 * @throws {Error} If operator or signedData are invalid or missing
 * @remarks
 * The login request combines operator identity with cryptographically signed data to ensure
 * secure and verifiable authentication in Web3 environments.
 * @example
 * ```typescript
 * const loginRequest: _ILogin = {
 *   operator: {
 *     id: "op-123",
 *     name: "Test Operator",
 *     address: "0x1234567890abcdef",
 *     status: "active"
 *   },
 *   signedData: {
 *     signature: new Uint8Array([1, 2, 3, 4, 5]),
 *     payload: {
 *       message: "Login request",
 *       timestamp: Date.now(),
 *       nonce: "abc123"
 *     }
 *   }
 * };
 * ```
 */
export interface _ILogin {
    /**
     * Operator information
     * @description Contains identification and details about the operator attempting to log in.
     * This includes the operator's unique ID, name, blockchain address and current status.
     * @property {ISmartNetwork.IOperator.IEntity} operator - Operator entity details
     * @type {ISmartNetwork.IOperator.IEntity}
     * @memberof _ILogin
     * @since 2.0.0
     * @category Properties
     * @throws {TypeError} When operator object is malformed or contains invalid data
     * @throws {Error} When required operator fields are missing
     * @remarks
     * The operator information must be valid and match an existing operator record.
     * All required fields must be present and properly formatted.
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
     * Signed authentication data
     * @description Contains the cryptographic signature and payload data used for authentication.
     * The signature proves the authenticity of the login request and the payload contains
     * necessary metadata like timestamps and nonces.
     * @property {_ISignedData} signedData - Signed authentication data
     * @type {_ISignedData}
     * @memberof _ILogin
     * @since 2.0.0
     * @category Properties
     * @see {@link _ISignedData} For the complete structure of signed data
     * @throws {TypeError} When signature is invalid or payload is malformed
     * @throws {Error} When required signed data fields are missing
     * @remarks
     * The signed data must include a valid cryptographic signature that can be verified
     * against the operator's public key. The payload should contain a recent timestamp
     * and unique nonce to prevent replay attacks.
     * @example
     * ```typescript
     * signedData: {
     *   signature: new Uint8Array([1, 2, 3, 4, 5]),
     *   payload: {
     *     message: "Login request",
     *     timestamp: Date.now(),
     *     nonce: "abc123"
     *   }
     * }
     * ```
     */
    signedData: _ISignedData
}