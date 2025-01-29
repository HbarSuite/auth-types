import { _IEntity } from './interfaces/auth.configuration.web3.token_gate.entity.interface'
import { _IMetadata } from './interfaces/auth.configuration.web3.token_gate.metadata.interface'
import { _IOptions } from './interfaces/auth.configuration.web3.token_gate.options.interface'
import { _IProperties } from './interfaces/auth.configuration.web3.token_gate.properties.interface'
import { _IRole } from './interfaces/auth.configuration.web3.token_gate.role.interface'

/**
 * Token Gate Interface Namespace
 * @export _ITokenGate
 * @namespace IAuth._IConfiguration._IWeb3._ITokenGate
 * @description 
 * Defines the structure and types for the token-gate functionality within the authentication system.
 * This namespace consolidates all interfaces related to token gating, including roles, configuration
 * options, entities, properties and metadata.
 * 
 * Key components:
 * - Role definitions and permissions
 * - Configuration options for token gating
 * - Entity structures for tokens
 * - Property definitions for metadata
 * - Metadata schemas for tokens
 * 
 * @since 2.0.0
 * @category TokenGate
 * @public
 * 
 * @example
 * ```typescript
 * // Example of using token gate interfaces
 * const role: _ITokenGate.IRole = {
 *   tokenId: "0x1234567890abcdef",
 *   role: "premium_user"
 * };
 * 
 * const options: _ITokenGate.IOptions = {
 *   enabled: true,
 *   roles: [role]
 * };
 * 
 * const entity: _ITokenGate.IEntity = {
 *   id: "token_123",
 *   metadata: {
 *     name: "Premium Token",
 *     description: "Grants premium access",
 *     properties: {
 *       plan: "PREMIUM",
 *       periodicity: "ANNUAL"
 *     }
 *   }
 * };
 * ```
 */
export namespace _ITokenGate {
    /**
     * Role Interface
     * @description 
     * Defines the structure for roles in the token gate system. This interface
     * specifies how tokens map to specific roles and permissions within the
     * application.
     * 
     * Key aspects:
     * - Token identification
     * - Role assignment
     * - Permission mapping
     * 
     * @type {_IRole}
     * @see {@link _IRole}
     * @since 2.0.0
     * @public
     */
    export type IRole = _IRole

    /**
     * Options Interface
     * @description 
     * Defines configuration options for the token gate functionality. Controls
     * system-wide settings and behavior for token-based access control.
     * 
     * Configuration areas:
     * - System enablement
     * - Role definitions
     * - Access rules
     * - Token requirements
     * 
     * @type {_IOptions}
     * @see {@link _IOptions}
     * @since 2.0.0
     * @public
     */
    export type IOptions = _IOptions

    /**
     * Entity Interface
     * @description 
     * Defines the structure for token entities in the system. Represents the
     * core token data model and its relationships within the application.
     * 
     * Entity components:
     * - Unique identification
     * - Metadata association
     * - Property definitions
     * - Relationship mappings
     * 
     * @type {_IEntity}
     * @see {@link _IEntity}
     * @since 2.0.0
     * @public
     */
    export type IEntity = _IEntity

    /**
     * Properties Interface
     * @description 
     * Defines the properties structure for token metadata. Specifies the
     * characteristics and attributes that can be associated with tokens.
     * 
     * Property categories:
     * - Subscription details
     * - Access levels
     * - Feature flags
     * - Usage limits
     * 
     * @type {_IProperties}
     * @see {@link _IProperties}
     * @since 2.0.0
     * @public
     */
    export type IProperties = _IProperties

    /**
     * Metadata Interface
     * @description 
     * Defines the metadata structure for tokens. Specifies the descriptive
     * and configuration data associated with each token.
     * 
     * Metadata components:
     * - Basic information
     * - Display properties
     * - Configuration settings
     * - Custom attributes
     * 
     * @type {_IMetadata}
     * @see {@link _IMetadata}
     * @since 2.0.0
     * @public
     */
    export type IMetadata = _IMetadata
}