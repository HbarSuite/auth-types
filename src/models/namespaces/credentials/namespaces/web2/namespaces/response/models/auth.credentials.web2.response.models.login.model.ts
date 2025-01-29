import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../../../interfaces/auth.namespace';
import { ISmartNetwork, SmartNetwork } from "@hsuite/smart-network-types"
import { _User } from '../../../../user/auth.credentials.user.namespace';

/**
 * Represents the response structure for a successful Web2 login operation.
 * Contains the authenticated user information, operator details and access token.
 * 
 * @class _Login
 * @implements {IAuth.ICredentials.IWeb2.IResponse.ILogin}
 * @description Encapsulates the response data returned after a successful Web2 login authentication
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web2
 * @namespace Auth.Credentials.Web2.Response.Login
 * 
 * @property {IAuth.ICredentials.IUser.IEntity} user - The authenticated user's entity information
 * @property {ISmartNetwork.IOperator.IEntity} operator - The operator associated with the authenticated user
 * @property {string} accessToken - The JWT token for accessing protected resources
 * 
 * @throws {Error} When access token validation fails during instantiation
 * 
 * @example
 * const loginResponse = new _Login({
 *   user: {
 *     username: "john_doe",
 *     email: "john@example.com",
 *     created_at: 1625097600000,
 *     updated_at: 1625097600000,
 *     type: () => Auth.Credentials.User.Type.WEB2,
 *     tags: [{ key: "role", value: "user" }]
 *   },
 *   operator: {
 *     accountId: "0.0.789012",
 *     publicKey: "302a300506032b6570032100...",
 *     url: "https://operator.example.com",
 *     nft: {
 *       tokenId: "0.0.123456",
 *       serialNumber: 1
 *     }
 *   },
 *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * });
 */
export class _Login implements IAuth.ICredentials.IWeb2.IResponse.ILogin {
    /**
     * The authenticated user's entity information.
     * 
     * @type {IAuth.ICredentials.IUser.IEntity}
     * @memberof _Login
     * @public
     * @since 2.0.0
     * @description Contains user details including username, email, timestamps, type and tags
     * @see _User.Entity
     * 
     * @example
     * user: {
     *   username: "john_doe",
     *   email: "john@example.com",
     *   created_at: 1625097600000,
     *   updated_at: 1625097600000,
     *   type: () => Auth.Credentials.User.Type.WEB2,
     *   tags: [{ key: "role", value: "user" }]
     * }
     */
    @ApiProperty({
        description: 'The authenticated user\'s entity information',
        type: () => _User.Entity
    })
    public user: IAuth.ICredentials.IUser.IEntity;

    /**
     * The operator associated with the authenticated user.
     * 
     * @type {ISmartNetwork.IOperator.IEntity}
     * @memberof _Login
     * @public
     * @since 2.0.0
     * @description Contains operator details including account ID, public key, URL and NFT information
     * @see SmartNetwork.Operator.Entity
     * 
     * @example
     * operator: {
     *   accountId: "0.0.789012",
     *   publicKey: "302a300506032b6570032100...",
     *   url: "https://operator.example.com",
     *   nft: {
     *     tokenId: "0.0.123456",
     *     serialNumber: 1
     *   }
     * }
     */
    @ApiProperty({
        description: 'The operator associated with the authenticated user',
        type: () => SmartNetwork.Operator.Entity
    })
    public operator: ISmartNetwork.IOperator.IEntity;

    /**
     * The JWT token for accessing protected resources.
     * 
     * @type {string}
     * @memberof _Login
     * @public
     * @since 2.0.0
     * @description A JSON Web Token that must be included in the Authorization header for subsequent API requests
     * @throws {Error} When set to an empty string or non-string value
     * 
     * @example
     * accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     */
    @ApiProperty({
        description: 'The JWT token for accessing protected resources',
        type: () => String
    })
    public accessToken: string;

    /**
     * Creates an instance of _Login.
     * 
     * @constructor
     * @param {IAuth.ICredentials.IWeb2.IResponse.ILogin} login - The login response data
     * @throws {Error} If the access token is not a non-empty string
     * @memberof _Login
     * @since 2.0.0
     * @description Initializes a new login response instance by validating and setting the user entity, operator details and access token
     * 
     * @example
     * const loginResponse = new _Login({
     *   user: {
     *     username: "john_doe",
     *     email: "john@example.com",
     *     created_at: 1625097600000,
     *     updated_at: 1625097600000,
     *     type: () => Auth.Credentials.User.Type.WEB2,
     *     tags: [{ key: "role", value: "user" }]
     *   },
     *   operator: {
     *     accountId: "0.0.789012", 
     *     publicKey: "302a300506032b6570032100...",
     *     url: "https://operator.example.com",
     *     nft: {
     *       tokenId: "0.0.123456",
     *       serialNumber: 1
     *     }
     *   },
     *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * });
     */
    constructor(login: IAuth.ICredentials.IWeb2.IResponse.ILogin) {
        // Initialize user entity with provided user data
        this.user = new _User.Entity(login.user);
        
        // Create operator entity with account details and NFT information
        this.operator = new SmartNetwork.Operator.Entity(
            login.operator.accountId,
            login.operator.publicKey,
            login.operator.url,
            new SmartNetwork.Operator.NFT(login.operator.nft.id, login.operator.nft.serialNumber)
        );

        // Validate and set access token
        if (typeof login.accessToken !== 'string' || login.accessToken.trim() === '') {
            throw new Error('Access token must be a non-empty string');
        }
        this.accessToken = login.accessToken;
    }
}