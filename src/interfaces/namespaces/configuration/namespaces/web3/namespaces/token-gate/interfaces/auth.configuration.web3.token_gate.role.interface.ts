/**
 * Role Interface for Token Gate Configuration
 * @export _IRole
 * @interface _IRole
 * @namespace IAuth._IConfiguration._IWeb3._ITokenGate._IRole
 * @description
 * Defines the structure for a role in the token gate system. This interface specifies
 * the relationship between tokens and access roles, enabling token-based authorization.
 * 
 * Key components:
 * - Token identification
 * - Role assignment
 * - Access control mapping
 * 
 * @since 2.0.0
 * @category TokenGate
 * 
 * @example
 * ```typescript
 * const role: _IRole = {
 *   tokenId: "0x1234567890abcdef",
 *   role: "premium_user",
 *   minBalance: 1,
 *   contractAddress: "0xabcdef1234567890",
 *   chainId: 1,
 *   metadata: {
 *     displayName: "Premium User",
 *     description: "Access to premium features"
 *   }
 * }
 * ```
 */
export interface _IRole {
    /**
     * Token Identifier
     * @description
     * The unique identifier of the token associated with this role. This ID is used
     * to link specific tokens to access permissions within the system.
     * 
     * Format options:
     * - Ethereum token ID (hex)
     * - UUID
     * - Custom format string
     * 
     * Usage:
     * - Token lookup
     * - Access validation
     * - Role mapping
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * // Ethereum token ID
     * tokenId: "0x1234567890abcdef"
     * 
     * // UUID format
     * tokenId: "123e4567-e89b-12d3-a456-426614174000"
     * ```
     */
    tokenId: string

    /**
     * Role Identifier
     * @description
     * The name or identifier of the role that defines access permissions. Maps tokens
     * to specific access levels and capabilities within the system.
     * 
     * Common roles:
     * - basic_user
     * - premium_user
     * - admin
     * - moderator
     * 
     * Best practices:
     * - Use lowercase with underscores
     * - Keep names descriptive
     * - Follow consistent naming
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * // Basic role
     * role: "basic_user"
     * 
     * // Administrative role
     * role: "system_admin"
     * ```
     */
    role: string
}