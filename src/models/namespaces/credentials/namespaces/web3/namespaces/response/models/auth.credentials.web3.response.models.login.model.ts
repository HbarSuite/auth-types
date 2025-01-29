import { ISmartNetwork, SmartNetwork } from "@hsuite/smart-network-types"
import { ApiProperty } from '@hsuite/nestjs-swagger'
import { _Entity } from '../../../models/auth.credentials.web3.models.entity.model'
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'
import { Auth } from '../../../../../../../auth.namespace'

/**
 * Class representing the login response for Web3 authentication.
 * @class _Login
 * @implements {IAuth.ICredentials.IWeb3.IResponse.ILogin}
 * @export _Login
 * @namespace Auth.Credentials.Web3.Response
 * @description Defines the structure of the login response after successful Web3 authentication.
 * Contains session information, operator details, and access token.
 * @example
 * const loginResponse = new _Login({
 *   session: web3Session,
 *   operator: operatorDetails,
 *   accessToken: 'jwt-token-string'
 * });
 * @see Auth.Credentials.Web3.Entity
 * @see ISmartNetwork.IOperator.IEntity
 */
export class _Login implements IAuth.ICredentials.IWeb3.IResponse.ILogin {
    /**
     * The authenticated session information.
     * @type {Auth.Credentials.Web3.Entity}
     * @description Contains details about the authenticated Web3 session, including:
     * - Wallet address
     * - Chain information
     * - Session timestamp
     * - Authentication status
     * @memberof _Login
     * @public
     * @see Auth.Credentials.Web3.Entity
     */
    @ApiProperty({
        type: () => _Entity,
        description: 'The authenticated Web3 session information.'
    })
    // session: IAuth.ICredentials.IWeb3.IEntity
    session: Auth.Credentials.Web3.Entity

    /**
     * The operator information associated with the authenticated session.
     * @type {ISmartNetwork.IOperator.IEntity}
     * @description Contains comprehensive details about the authenticated operator:
     * - Operator identification
     * - Permission levels and access rights
     * - Assigned roles and responsibilities
     * - Network participation status
     * - Associated metadata
     * @memberof _Login
     * @public
     * @see ISmartNetwork.IOperator.IEntity
     */
    @ApiProperty({
        type: () => SmartNetwork.Operator,
        description: 'The operator information associated with the authenticated session.'
    })
    operator: ISmartNetwork.IOperator.IEntity

    /**
     * The access token for the authenticated session.
     * @type {string}
     * @description A JWT (JSON Web Token) that:
     * - Provides secure authentication for subsequent requests
     * - Must be included in the Authorization header
     * - Contains encoded session and operator information
     * - Has a defined expiration period
     * @memberof _Login
     * @public
     */
    @ApiProperty({
        type: () => String,
        description: 'The access token for the authenticated session.'
    })
    accessToken: string

    /**
     * Creates an instance of _Login.
     * @param {IAuth.ICredentials.IWeb3.IResponse.ILogin} data - The login response data containing session, operator, and access token.
     * @throws {Error} Will throw an error if session is missing or invalid - must be a valid object
     * @throws {Error} Will throw an error if operator is missing or invalid - must be a valid object
     * @throws {Error} Will throw an error if accessToken is missing or invalid - must be a non-empty string
     * @memberof _Login
     * @public
     * @example
     * try {
     *   const login = new _Login({
     *     session: validSession,
     *     operator: validOperator,
     *     accessToken: 'valid-jwt-token'
     *   });
     * } catch (error) {
     *   console.error('Login creation failed:', error.message);
     * }
     */
    constructor(data: IAuth.ICredentials.IWeb3.IResponse.ILogin) {
        // Validate session object
        if (!data.session || typeof data.session !== 'object') {
            throw new Error('Invalid session: must be an object')
        }
        // Validate operator object
        if (!data.operator || typeof data.operator !== 'object') {
            throw new Error('Invalid operator: must be an object')
        }
        // Validate access token
        if (!data.accessToken || typeof data.accessToken !== 'string') {
            throw new Error('Invalid accessToken: must be a non-empty string')
        }

        this.session = data.session
        this.operator = data.operator
        this.accessToken = data.accessToken
    }
}