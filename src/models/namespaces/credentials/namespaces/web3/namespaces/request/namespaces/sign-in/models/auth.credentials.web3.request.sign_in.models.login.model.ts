import { ISmartNetwork } from "@hsuite/smart-network-types"
import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IAuth } from '../../../../../../../../../../interfaces/auth.namespace'
import { _SignedData } from './auth.credentials.web3.request.sign_in.models.signed-data.model'

/**
 * Class representing the login request for Web3 sign-in process.
 * 
 * @class _Login
 * @implements {IAuth.ICredentials.IWeb3.IRequest.ISignin.ILogin}
 * @namespace Auth.Credentials.Web3.Request.Signin
 * @description Defines the structure and validation of the login request for Web3 sign-in process.
 * This class handles the operator information and signed data required for authentication.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * 
 * @property {ISmartNetwork.IOperator.IEntity} operator - The operator information for authentication
 * @property {IAuth.ICredentials.IWeb3.IRequest.ISignin.ISignedData} signedData - The signed data containing signature
 * 
 * @example
 * const login = new _Login({
 *   operator: {
 *     id: "op-123",
 *     name: "Test Operator"
 *   },
 *   signedData: {
 *     signature: "0x123...",
 *     payload: "Message to sign"
 *   }
 * });
 * 
 * @throws {Error} Will throw an error if operator object is invalid or missing
 * @throws {Error} Will throw an error if signed data object is invalid or missing
 */
export class _Login implements IAuth.ICredentials.IWeb3.IRequest.ISignin.ILogin {
    /**
     * The operator information for the login request.
     * Contains details about the operator attempting to authenticate.
     * 
     * @type {ISmartNetwork.IOperator.IEntity}
     * @memberof _Login
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * operator = {
     *   id: "op-123",
     *   name: "Test Operator"
     * }
     * 
     * @throws {Error} Will throw an error if operator object is invalid or missing
     */
    @ApiProperty({
        description: 'The operator information for the login request',
        type: () => 'object'
    })
    operator: ISmartNetwork.IOperator.IEntity

    /**
     * The signed data for the login request.
     * Contains the cryptographic signature and payload used for authentication.
     * 
     * @type {IAuth.ICredentials.IWeb3.IRequest.ISignin.ISignedData}
     * @memberof _Login
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * signedData = {
     *   signature: "0x123...",
     *   payload: "Message to sign"
     * }
     * 
     * @throws {Error} Will throw an error if signed data object is invalid or missing
     */
    @ApiProperty({
        description: 'The signed data for the login request',
        type: () => _SignedData
    })
    signedData: IAuth.ICredentials.IWeb3.IRequest.ISignin.ISignedData

    /**
     * Creates an instance of _Login.
     * Validates and initializes the operator and signed data properties.
     * 
     * @constructor
     * @param {IAuth.ICredentials.IWeb3.IRequest.ISignin.ILogin} login - The login object containing operator and signedData
     * @throws {Error} Will throw an error if operator object is invalid or missing during validation
     * @throws {Error} Will throw an error if signed data object is invalid or missing during validation
     * @memberof _Login
     * @since 2.0.0
     * @public
     * 
     * @example
     * const login = new _Login({
     *   operator: {
     *     id: "op-123",
     *     name: "Test Operator"
     *   },
     *   signedData: {
     *     signature: "0x123...",
     *     payload: "Message to sign"
     *   }
     * });
     */
    constructor(login: IAuth.ICredentials.IWeb3.IRequest.ISignin.ILogin) {
        // Validate operator object
        if (!login.operator || typeof login.operator !== 'object') {
            throw new Error('Operator must be a valid object')
        }
        this.operator = login.operator

        // Validate signed data object
        if (!login.signedData || typeof login.signedData !== 'object') {
            throw new Error('Signed data must be a valid object')
        }
        this.signedData = login.signedData
    }
}