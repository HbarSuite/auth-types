import { _IMetadata } from './auth.configuration.web3.token_gate.metadata.interface'

/**
 * Token Gate Entity Interface
 * @export _IEntity
 * @interface _IEntity
 * @namespace IAuth._IConfiguration._IWeb3._ITokenGate._IEntity
 * @description
 * Defines the structure for a token entity in the token gate system. This interface
 * represents a unique token instance with its associated metadata, serial number,
 * and blockchain identifiers.
 * 
 * Core components:
 * - Token metadata (name, description, properties)
 * - Unique identifiers (serial number, token ID)
 * - Blockchain-specific data
 * 
 * @since 2.0.0
 * @category TokenGate
 * 
 * @example
 * ```typescript
 * const tokenEntity: _IEntity = {
 *   metadata: {
 *     name: "Premium Access NFT",
 *     description: "Grants premium platform access",
 *     creator: "Platform DAO",
 *     properties: {
 *       plan: "enterprise",
 *       periodicity: "annual"
 *     },
 *     image: "https://assets.example.com/nfts/premium.png"
 *   },
 *   serial_number: 42,
 *   token_id: "0x1234567890abcdef"
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Token Metadata
     * @description
     * Contains comprehensive information about the token, including its
     * name, description, properties, and visual assets.
     * 
     * Metadata components:
     * - Basic information (name, description)
     * - Creator details
     * - Custom properties
     * - Visual assets (images)
     * 
     * @type {_IMetadata}
     * @see {@link _IMetadata}
     * 
     * @example
     * ```typescript
     * metadata: {
     *   name: "Premium Access NFT",
     *   description: "Grants premium platform access",
     *   creator: "Platform DAO",
     *   properties: {
     *     plan: "enterprise",
     *     periodicity: "annual"
     *   },
     *   image: "https://assets.example.com/nfts/premium.png"
     * }
     * ```
     */
    metadata: _IMetadata

    /**
     * Token Serial Number
     * @description
     * A unique sequential identifier for the token within its collection or series.
     * Used for ordering and identification purposes within the token gate system.
     * 
     * Usage:
     * - Collection ordering
     * - Unique identification
     * - Edition tracking
     * 
     * @type {number}
     * 
     * @example
     * ```typescript
     * serial_number: 42  // The 42nd token in the series
     * ```
     */
    serial_number: number

    /**
     * Blockchain Token ID
     * @description
     * The unique identifier of the token on the blockchain. This can be:
     * - An Ethereum-style token ID (hex)
     * - A Solana-style token address
     * - A custom blockchain token identifier
     * 
     * Format varies by blockchain:
     * - Ethereum: "0x1234..."
     * - Solana: "ABC123..."
     * - Other chains: Chain-specific format
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * // Ethereum-style token ID
     * token_id: "0x1234567890abcdef"
     * 
     * // Solana-style token address
     * token_id: "ABC123XYZ789"
     * ```
     */
    token_id: string
}