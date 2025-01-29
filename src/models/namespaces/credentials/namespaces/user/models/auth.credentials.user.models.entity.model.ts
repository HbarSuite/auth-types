import { ApiProperty } from '@hsuite/nestjs-swagger';
import { _User } from '../auth.credentials.user.namespace';
import { IAuth } from '../../../../../../interfaces/auth.namespace';
import { _Tags } from './auth.credentials.user.models.tags.model';

/**
 * Represents a user entity with authentication credentials
 * 
 * @class _Entity
 * @export _Entity
 * @implements {IAuth.ICredentials.IUser.IEntity}
 * @namespace Auth.Credentials.User.Entity
 * @description This class represents a user entity with authentication credentials. It includes validation for all properties.
 * 
 * @example
 * const userEntity = new _Entity({
 *   username: "john_doe",
 *   email: "john@example.com", 
 *   created_at: 1625097600000,
 *   updated_at: 1625184000000,
 *   type: _IUser.IType.WEB2,
 *   tags: [{ key: "role", value: "user" }]
 * });
 */
export class _Entity implements IAuth.ICredentials.IUser.IEntity {
    /**
     * The unique username of the user
     * 
     * @public
     * @type {string}
     * @memberof _Entity
     * @description The username that uniquely identifies this user account. Must be a non-empty string.
     * @example "john_doe"
     */
    @ApiProperty({
        description: 'The unique username of the user',
        type: () => String,
    })
    public username: string;

    /**
     * The email address associated with the user account
     * 
     * @public
     * @type {string}
     * @memberof _Entity
     * @description The email address used for account communications and verification. Must be a valid email format containing '@'.
     * @example "john@example.com"
     */
    @ApiProperty({
        description: 'The email address associated with the user account',
        type: () => String,
    })
    public email: string;

    /**
     * The timestamp when the user account was created
     * 
     * @public
     * @type {number}
     * @memberof _Entity
     * @description Unix timestamp in milliseconds representing when this account was first created. Must be a positive number.
     * @example 1625097600000
     */
    @ApiProperty({
        description: 'The timestamp (in milliseconds) when the user account was created',
        type: () => Number,
    })
    public created_at: number;

    /**
     * The timestamp when the user account was last updated
     * 
     * @public
     * @type {number}
     * @memberof _Entity
     * @description Unix timestamp in milliseconds representing the last modification to this account. Must be greater than or equal to created_at.
     * @example 1625184000000
     */
    @ApiProperty({
        description: 'The timestamp (in milliseconds) when the user account was last updated',
        type: () => Number,
    })
    public updated_at: number;

    /**
     * The type of user authentication
     * 
     * @public
     * @type {IAuth.ICredentials.IUser.IType}
     * @memberof _Entity
     * @description Specifies whether this is a Web2 (traditional) or Web3 (blockchain) authentication type. Must be a valid value from IAuth.ICredentials.IUser.IType enum.
     * @example IAuth.ICredentials.IUser.IType.WEB2
     */
    @ApiProperty({
        description: 'The type of user authentication (web2 or web3)',
        enum: IAuth.ICredentials.IUser.IType,
    })
    public type: IAuth.ICredentials.IUser.IType;

    /**
     * The tags associated with the user account
     * 
     * @public
     * @type {Array<IAuth.ICredentials.IUser.ITags>}
     * @memberof _Entity
     * @description Array of metadata tags attached to this user account. Each tag has a key and value string pair.
     * @example [{ key: "role", value: "admin" }, { key: "status", value: "active" }]
     */
    @ApiProperty({
        description: 'An array of tags associated with the user account',
        type: () => _Tags,
        isArray: true,
    })
    public tags: Array<IAuth.ICredentials.IUser.ITags>;

    /**
     * Creates an instance of _Entity
     * 
     * @constructor
     * @param {IAuth.ICredentials.IUser.IEntity} entity - The user entity data to initialize this instance
     * @throws {Error} When username is empty or not a string
     * @throws {Error} When email format is invalid
     * @throws {Error} When created_at is not a positive number
     * @throws {Error} When updated_at is less than created_at
     * @throws {Error} When type is not a valid user type enum value
     * @throws {Error} When tags is not an array or contains invalid tag objects
     * @memberof _Entity
     * @example
     * const user = new _Entity({
     *   username: "jane_doe",
     *   email: "jane@example.com",
     *   created_at: Date.now(),
     *   updated_at: Date.now(),
     *   type: IAuth.ICredentials.IUser.IType.WEB2,
     *   tags: [{ key: "department", value: "engineering" }]
     * });
     */
    constructor(entity: IAuth.ICredentials.IUser.IEntity) {
        // Validate and set username
        if (typeof entity.username !== 'string' || entity.username.trim() === '') {
            throw new Error('Username must be a non-empty string');
        }
        this.username = entity.username;

        // Validate and set email
        if (typeof entity.email !== 'string' || !entity.email.includes('@')) {
            throw new Error('Invalid email format');
        }
        this.email = entity.email;

        // Validate and set created_at timestamp
        if (typeof entity.created_at !== 'number' || entity.created_at <= 0) {
            throw new Error('Created_at must be a positive number');
        }
        this.created_at = entity.created_at;

        // Validate and set updated_at timestamp
        if (typeof entity.updated_at !== 'number' || entity.updated_at < entity.created_at) {
            throw new Error('Updated_at must be a number greater than or equal to created_at');
        }
        this.updated_at = entity.updated_at;

        // Validate and set user type
        if (!Object.values(IAuth.ICredentials.IUser.IType).includes(entity.type)) {
            throw new Error('Invalid user type');
        }
        this.type = entity.type;

        // Validate and set tags array
        if (!Array.isArray(entity.tags)) {
            throw new Error('Tags must be an array');
        }
        this.tags = entity.tags.map(tag => {
            if (typeof tag.key !== 'string' || typeof tag.value !== 'string') {
                throw new Error('Each tag must have a key and value of type string');
            }
            return tag;
        });
    }
}