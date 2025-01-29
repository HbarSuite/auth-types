import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'
import { _Metadata } from './auth.configuration.web3.token_gate.models.metadata.model'

/**
 * Entity Class for Token Gate Configuration
 * @description Defines the structure for an entity in the token gate system. This class represents
 * a token entity with its associated metadata, serial number and token ID. It provides validation
 * and type safety for token gate entities.
 * 
 * @export _Entity
 * @class _Entity
 * @implements {IAuth.IConfiguration.IWeb3.ITokenGate.IEntity}
 * @namespace Auth.Configuration.Web3.TokenGate.Entity
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * 
 * @example
 * const tokenEntity = new _Entity({
 *   metadata: {
 *     name: "Token #1",
 *     description: "A unique token entity",
 *     properties: {
 *       rarity: "rare",
 *       level: 5
 *     }
 *   },
 *   serial_number: 1,
 *   token_id: "0x123abc..."
 * });
 */
export class _Entity implements IAuth.IConfiguration.IWeb3.ITokenGate.IEntity {
    /**
     * Metadata associated with the entity
     * @description Contains additional information about the entity, such as name, description, and properties.
     * The metadata provides context and attributes that describe the token entity.
     * 
     * @type {IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata}
     * @memberof _Entity
     * @instance
     * @public
     * 
     * @example
     * entity.metadata = {
     *   name: "Special Token",
     *   description: "A rare collectible token",
     *   properties: {
     *     rarity: "legendary",
     *     power: 100
     *   }
     * };
     */
    @ApiProperty({
        description: 'Metadata associated with the entity',
        type: () => _Metadata,
    })
    public metadata: IAuth.IConfiguration.IWeb3.ITokenGate.IMetadata

    /**
     * The serial number of the entity
     * @description A unique identifier for the entity within its token series.
     * Used to distinguish between different instances of the same token type.
     * 
     * @type {number}
     * @memberof _Entity
     * @instance
     * @public
     * 
     * @example
     * entity.serial_number = 42; // The 42nd token in the series
     */
    @ApiProperty({
        description: 'The serial number of the entity',
        type: () => Number,
    })
    public serial_number: number

    /**
     * The token ID associated with the entity
     * @description The unique identifier of the token to which this entity belongs.
     * This is typically a blockchain-specific identifier that uniquely identifies the token contract.
     * 
     * @type {string}
     * @memberof _Entity
     * @instance
     * @public
     * 
     * @example
     * entity.token_id = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
     */
    @ApiProperty({
        description: 'The token ID associated with the entity',
        type: () => String,
    })
    public token_id: string

    /**
     * Creates an instance of _Entity.
     * @description Initializes a new token entity with validation of all required fields.
     * Ensures all entity properties meet the required format and data types.
     * 
     * @param {IAuth.IConfiguration.IWeb3.ITokenGate.IEntity} entity - The entity data to initialize the class
     * @throws {Error} If metadata is missing or not an object
     * @throws {Error} If serial_number is not a valid number
     * @throws {Error} If token_id is missing or empty
     * @memberof _Entity
     * @constructor
     * @public
     * 
     * @example
     * const entity = new _Entity({
     *   metadata: {
     *     name: "Token #1",
     *     description: "First token in series",
     *     properties: { type: "common" }
     *   },
     *   serial_number: 1,
     *   token_id: "0x123..."
     * });
     */
    constructor(entity: IAuth.IConfiguration.IWeb3.ITokenGate.IEntity) {
        // Validate metadata object
        if (!entity.metadata || typeof entity.metadata !== 'object') {
            throw new Error('metadata must be a non-null object')
        }
        this.metadata = entity.metadata

        // Validate serial number
        if (typeof entity.serial_number !== 'number' || isNaN(entity.serial_number)) {
            throw new Error('serial_number must be a valid number')
        }
        this.serial_number = entity.serial_number

        // Validate token ID
        if (typeof entity.token_id !== 'string' || entity.token_id.trim() === '') {
            throw new Error('token_id must be a non-empty string')
        }
        this.token_id = entity.token_id
    }
}