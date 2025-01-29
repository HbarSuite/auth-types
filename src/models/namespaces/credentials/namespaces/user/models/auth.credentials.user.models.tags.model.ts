import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../interfaces/auth.namespace';

/**
 * Represents a key-value pair tag for user credentials
 * 
 * @class _Tags
 * @export _Tags
 * @implements {IAuth.ICredentials.IUser.ITags}
 * @namespace Auth.Credentials.User.Tags
 * @description This class represents a key-value pair tag that can be associated with user credentials.
 * It provides validation for both key and value properties to ensure they are non-empty strings.
 * Tags can be used to add metadata, roles, or any other custom attributes to user credentials.
 * The class implements the IAuth.ICredentials.IUser.ITags interface.
 * 
 * @property {string} key - The identifier or category of the tag (e.g., "role", "permission", "status")
 * @property {string} value - The corresponding value or content of the tag (e.g., "admin", "read", "active")
 * 
 * @example
 * // Create a role tag
 * const roleTag = new _Tags({
 *   key: "role",
 *   value: "admin"
 * });
 * 
 * // Create a permission tag
 * const permissionTag = new _Tags({
 *   key: "permission",
 *   value: "read_only"
 * });
 * 
 * @see IAuth.ICredentials.IUser.ITags
 * @since 2.0.0
 * @author HSuite
 */
export class _Tags implements IAuth.ICredentials.IUser.ITags {
    /**
     * The identifier or category of the tag
     * 
     * @public
     * @type {string}
     * @memberof _Tags
     * @description Must be a non-empty string that identifies the type or category of the tag.
     * Common examples include "role", "permission", "status", etc.
     * This property is validated in the constructor to ensure it is a non-empty string.
     * 
     * @example
     * const tag = new _Tags({
     *   key: "role",  // Valid key
     *   value: "admin"
     * });
     * 
     * @throws {Error} When key is not a non-empty string during initialization
     */
    @ApiProperty({
        description: 'The identifier or category of the tag',
        type: () => String,
        example: 'role'
    })
    public key: string;

    /**
     * The corresponding value or content of the tag
     * 
     * @public
     * @type {string}
     * @memberof _Tags
     * @description Must be a non-empty string that specifies the actual value for the tag.
     * The meaning of the value depends on the key (e.g., "admin" for role, "active" for status).
     * This property is validated in the constructor to ensure it is a non-empty string.
     * 
     * @example
     * const tag = new _Tags({
     *   key: "status",
     *   value: "active"  // Valid value
     * });
     * 
     * @throws {Error} When value is not a non-empty string during initialization
     */
    @ApiProperty({
        description: 'The corresponding value or content of the tag',
        type: () => String,
        example: 'admin'
    })
    public value: string;

    /**
     * Creates an instance of _Tags.
     * 
     * @constructor
     * @param {IAuth.ICredentials.IUser.ITags} tag - The tag object containing key and value properties
     * @throws {Error} When key is not a non-empty string
     * @throws {Error} When value is not a non-empty string
     * @memberof _Tags
     * 
     * @example
     * // Valid tag creation
     * const tag = new _Tags({
     *   key: "role",
     *   value: "admin"
     * });
     * 
     * // Will throw error - empty key
     * const invalidTag1 = new _Tags({
     *   key: "",  // Empty string not allowed
     *   value: "admin"
     * });
     * 
     * // Will throw error - empty value
     * const invalidTag2 = new _Tags({
     *   key: "role",
     *   value: ""  // Empty string not allowed
     * });
     * 
     * // Will throw error - invalid key type
     * const invalidTag3 = new _Tags({
     *   key: null,  // Must be string
     *   value: "admin"
     * });
     */
    constructor(tag: IAuth.ICredentials.IUser.ITags) {
        // Validate and set the key
        if (typeof tag.key !== 'string' || tag.key.trim() === '') {
            throw new Error('Key must be a non-empty string');
        }
        this.key = tag.key;

        // Validate and set the value
        if (typeof tag.value !== 'string' || tag.value.trim() === '') {
            throw new Error('Value must be a non-empty string');
        }
        this.value = tag.value;
    }
}