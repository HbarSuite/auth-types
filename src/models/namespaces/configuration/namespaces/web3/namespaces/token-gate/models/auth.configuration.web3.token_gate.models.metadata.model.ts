import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'
import { _Properties } from './auth.configuration.web3.token_gate.models.properties.model'

/**
 * Metadata Class for Token Gate Configuration
 * @export _Metadata
 * @class _Metadata
 * @implements {IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata}
 * @namespace Auth.Configuration.Web3.TokenGate.Metadata
 * @description Defines the structure for metadata associated with a token in the token gate system.
 * This class handles validation and storage of token metadata including name, description,
 * creator information, properties, and associated images. The metadata provides essential 
 * information about the token's identity, purpose, and visual representation.
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * @see {@link IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata}
 * 
 * @example
 * ```typescript
 * const tokenMetadata = new _Metadata({
 *   name: "Premium Access Token",
 *   description: "Grants premium access to platform features",
 *   creator: "Platform Admin",
 *   properties: {
 *     plan: "premium",
 *     periodicity: "monthly"
 *   },
 *   image: "https://example.com/token-image.png"
 * });
 * ```
 */
export class _Metadata implements IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata {
    /**
     * The name of the token
     * @type {string}
     * @description A human-readable name for the token. Must be a non-empty string.
     * Used for display and identification purposes in user interfaces and token listings.
     * @throws {Error} If name is empty or not a string
     * @memberof _Metadata
     * @public
     * @example
     * ```typescript
     * metadata.name = "Gold Access Token";
     * ```
     */
    @ApiProperty({
        description: 'The name of the token',
        type: () => String,
    })
    public name: string

    /**
     * The description of the token
     * @type {string}
     * @description A detailed description of the token and its purpose.
     * Provides additional context about the token's functionality, benefits, and usage.
     * Should clearly explain what access or privileges this token grants to its holder.
     * @throws {Error} If description is empty or not a string
     * @memberof _Metadata
     * @public
     * @example
     * ```typescript
     * metadata.description = "Provides premium access to all platform features";
     * ```
     */
    @ApiProperty({
        description: 'The description of the token',
        type: () => String,
    })
    public description: string

    /**
     * The creator of the token
     * @type {string}
     * @description The identifier or name of the entity that created the token.
     * Could be a username, wallet address, or organization name.
     * Used for attribution and verification purposes.
     * @throws {Error} If creator is empty or not a string
     * @memberof _Metadata
     * @public
     * @example
     * ```typescript
     * metadata.creator = "0x1234...abcd" // Ethereum address
     * // or
     * metadata.creator = "Platform Admin" // Organization name
     * ```
     */
    @ApiProperty({
        description: 'The creator of the token',
        type: () => String,
    })
    public creator: string

    /**
     * The properties associated with the token
     * @type {_Properties}
     * @description Additional properties and attributes of the token that define its characteristics
     * and access rights. Can include details such as:
     * - Access level or tier
     * - Subscription plan details
     * - Time-based restrictions
     * - Feature access flags
     * - Custom attributes
     * @throws {Error} If properties is null or not an object
     * @memberof _Metadata
     * @public
     * @see {@link _Properties}
     * @example
     * ```typescript
     * metadata.properties = {
     *   plan: "enterprise",
     *   periodicity: "annual",
     *   features: ["api_access", "admin_panel"],
     *   maxUsers: 100,
     *   customField: "value"
     * };
     * ```
     */
    @ApiProperty({
        description: 'The properties associated with the token',
        type: () => _Properties,
    })
    public properties: IAuth.IConfiguration.IWeb3.ITokenGate.IProperties

    /**
     * The image associated with the token
     * @type {string}
     * @description A URL or identifier for the visual representation of the token.
     * Can be used for displaying token artwork, badges, or icons in the user interface.
     * Supports various image formats and can be either:
     * - A direct URL to the image
     * - An IPFS hash
     * - A relative path to an asset
     * @throws {Error} If image is empty or not a string
     * @memberof _Metadata
     * @public
     * @example
     * ```typescript
     * // Direct URL
     * metadata.image = "https://token-assets.com/premium-token.png";
     * // IPFS
     * metadata.image = "ipfs://QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ";
     * // Relative path
     * metadata.image = "/assets/tokens/premium.svg";
     * ```
     */
    @ApiProperty({
        description: 'The image associated with the token',
        type: () => String,
    })
    public image: string

    /**
     * Creates an instance of _Metadata.
     * @param {IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata} metadata - The metadata to initialize the class
     * @throws {Error} If any of the required properties are missing or invalid:
     * - name must be a non-empty string
     * - description must be a non-empty string
     * - creator must be a non-empty string
     * - properties must be a non-null object
     * - image must be a non-empty string
     * @memberof _Metadata
     * @description Initializes and validates all metadata properties for a token.
     * Ensures that all required fields are present and properly formatted.
     * Performs type checking and validation for each field.
     * @example
     * ```typescript
     * const metadata = new _Metadata({
     *   name: "VIP Access Token",
     *   description: "Exclusive access to VIP features",
     *   creator: "Platform Owner",
     *   properties: {
     *     tier: "vip",
     *     duration: "lifetime",
     *     features: ["priority_support", "exclusive_content"]
     *   },
     *   image: "https://example.com/vip-token.png"
     * });
     * ```
     */
    constructor(metadata: IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata) {
        // Validate name property
        if (typeof metadata.name !== 'string' || metadata.name.trim() === '') {
            throw new Error('name must be a non-empty string')
        }
        this.name = metadata.name

        // Validate description property
        if (typeof metadata.description !== 'string' || metadata.description.trim() === '') {
            throw new Error('description must be a non-empty string')
        }
        this.description = metadata.description

        // Validate creator property
        if (typeof metadata.creator !== 'string' || metadata.creator.trim() === '') {
            throw new Error('creator must be a non-empty string')
        }
        this.creator = metadata.creator

        // Validate properties object
        if (typeof metadata.properties !== 'object' || metadata.properties === null) {
            throw new Error('properties must be a non-null object')
        }
        this.properties = metadata.properties

        // Validate image URL/identifier
        if (typeof metadata.image !== 'string' || metadata.image.trim() === '') {
            throw new Error('image must be a non-empty string')
        }
        this.image = metadata.image
    }
}