import { _IProperties } from './auth.configuration.web3.token_gate.properties.interface'

/**
 * Token Gate Metadata Interface
 * @export _IMetadata
 * @interface _IMetadata
 * @namespace IAuth.IConfiguration.IWeb3.ITokenGate._IMetadata
 * @description
 * Defines the comprehensive metadata structure for tokens in the token gate system.
 * This interface provides a standardized way to describe token attributes,
 * including basic information, visual assets, and custom properties.
 * 
 * Core components:
 * - Basic token information
 * - Creator attribution
 * - Custom properties
 * - Visual representation
 * 
 * @since 2.0.0
 * @category TokenGate
 * 
 * @example
 * ```typescript
 * const tokenMetadata: _IMetadata = {
 *   name: "Enterprise Access Token",
 *   description: "Grants enterprise-level access to platform services",
 *   creator: "Platform Governance DAO",
 *   properties: {
 *     plan: "enterprise",
 *     periodicity: "annual",
 *     features: ["api_access", "priority_support", "custom_integrations"]
 *   },
 *   image: "https://assets.platform.com/tokens/enterprise.png",
 *   external_url: "https://platform.com/tokens/enterprise",
 *   attributes: [
 *     { trait_type: "Access Level", value: "Enterprise" },
 *     { trait_type: "Validity", value: "1 Year" }
 *   ]
 * };
 * ```
 */
export interface _IMetadata {
    /**
     * Token Name
     * @description
     * The human-readable name of the token. Should be unique and descriptive
     * within its collection or context.
     * 
     * Best practices:
     * - Keep it concise but descriptive
     * - Include relevant identifiers
     * - Use consistent naming conventions
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * name: "Enterprise Access Token #042"
     * ```
     */
    name: string

    /**
     * Token Description
     * @description
     * A detailed description of the token's purpose, features, and any special
     * characteristics. Should provide clear value proposition and usage information.
     * 
     * Recommended content:
     * - Access rights granted
     * - Usage instructions
     * - Validity information
     * - Special features
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * description: "This token grants enterprise-level access to all platform " +
     *   "services, including API access, priority support, and custom integrations. " +
     *   "Valid for one year from activation."
     * ```
     */
    description: string

    /**
     * Token Creator
     * @description
     * Identifies the entity responsible for creating and issuing the token.
     * Can be an individual, organization, or smart app address.
     * 
     * Common formats:
     * - Organization name
     * - Wallet address
     * - DAO identifier
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * creator: "Platform Governance DAO"
     * // or
     * creator: "0x1234567890abcdef..."
     * ```
     */
    creator: string

    /**
     * Token Properties
     * @description
     * Custom properties that define the token's characteristics and behavior
     * within the system. Includes subscription details, access levels, and
     * other configurable attributes.
     * 
     * Property categories:
     * - Access control
     * - Subscription details
     * - Feature flags
     * - Custom attributes
     * 
     * @type {_IProperties}
     * @see {@link _IProperties}
     * 
     * @example
     * ```typescript
     * properties: {
     *   plan: "enterprise",
     *   periodicity: "annual",
     *   features: ["api_access", "priority_support"],
     *   customization: {
     *     allowed: true,
     *     limits: { api_calls: 1000000 }
     *   }
     * }
     * ```
     */
    properties: _IProperties

    /**
     * Token Image
     * @description
     * URL or IPFS hash pointing to the token's visual representation.
     * Should be high-quality and properly formatted for different display contexts.
     * 
     * Supported formats:
     * - HTTPS URLs
     * - IPFS hashes
     * - Base64 encoded images
     * 
     * Best practices:
     * - Use HTTPS for centralized storage
     * - IPFS for decentralized storage
     * - Include multiple resolutions
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * // HTTPS URL
     * image: "https://assets.platform.com/tokens/enterprise.png"
     * 
     * // IPFS
     * image: "ipfs://QmXw8K7ahL5k8uDdcw7X9jFs6m2kkXhY..."
     * 
     * // Base64
     * image: "data:image/png;base64,iVBORw0KGgoAAAANSU..."
     * ```
     */
    image: string
}