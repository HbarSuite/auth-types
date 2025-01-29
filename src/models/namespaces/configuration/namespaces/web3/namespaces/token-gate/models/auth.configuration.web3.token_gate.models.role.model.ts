import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'

/**
 * Role Class for Token Gate Configuration
 * @export _Role
 * @class _Role
 * @implements {IAuth.IConfiguration.IWeb3.ITokenGate.IRole}
 * @namespace Auth.Configuration.Web3.TokenGate.Role
 * @description Defines the structure for a role in the token gate system. This class handles validation
 * and storage of role information including the token ID and role name. It ensures proper access control
 * by associating specific tokens with defined roles. The role system allows for granular permission control
 * based on token ownership.
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * @see {@link IAuth.IConfiguration.IWeb3.ITokenGate.IRole} For interface definition
 * 
 * @example
 * ```typescript
 * const tokenRole = new _Role({
 *   tokenId: "0x123abc...",
 *   role: "ADMIN"
 * });
 * ```
 */
export class _Role implements IAuth.IConfiguration.IWeb3.ITokenGate.IRole {
    /**
     * The unique identifier of the token associated with this role
     * @type {string}
     * @description Represents the specific token ID that grants this role. This is typically
     * a blockchain token identifier that users must possess to be granted the role.
     * The token ID is used to verify ownership and grant appropriate permissions.
     * @throws {Error} If tokenId is empty or not a string during initialization
     * @memberof _Role
     * @public
     * @example
     * ```typescript
     * role.tokenId = "0x789def..."; // Ethereum token ID
     * ```
     */
    @ApiProperty({
        description: 'The unique identifier of the token associated with this role',
        type: () => String,
    })
    public tokenId: string

    /**
     * The name or identifier of the role
     * @type {string}
     * @description Defines the role name or identifier associated with the token. This determines
     * the permissions and access levels granted to users who possess the corresponding token.
     * Common role names might include "ADMIN", "MODERATOR", "USER", etc.
     * @throws {Error} If role is empty or not a string during initialization
     * @memberof _Role
     * @public
     * @example
     * ```typescript
     * role.role = "MODERATOR"; // Sets moderator role permissions
     * ```
     */
    @ApiProperty({
        description: 'The name or identifier of the role',
        type: () => String,
    })
    public role: string

    /**
     * Creates an instance of _Role.
     * @param {IAuth.IConfiguration.IWeb3.ITokenGate.IRole} role - The role configuration object
     * @throws {Error} If tokenId is missing, empty, or not a string
     * @throws {Error} If role name is missing, empty, or not a string
     * @memberof _Role
     * @description Initializes and validates role properties including token ID and role name.
     * Ensures that all required fields are present and properly formatted. The constructor performs
     * validation to maintain data integrity and prevent invalid role configurations.
     * @public
     * @example
     * ```typescript
     * const role = new _Role({
     *   tokenId: "0x456abc...", // Valid blockchain token ID
     *   role: "USER" // Valid role name
     * });
     * ```
     */
    constructor(role: IAuth.IConfiguration.IWeb3.ITokenGate.IRole) {
        // Validate tokenId property
        if (!role.tokenId || typeof role.tokenId !== 'string') {
            throw new Error('tokenId must be a non-empty string')
        }
        this.tokenId = role.tokenId

        // Validate role property
        if (!role.role || typeof role.role !== 'string') {
            throw new Error('role must be a non-empty string')
        }
        this.role = role.role
    }
}