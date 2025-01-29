import { ApiProperty } from '@hsuite/nestjs-swagger';
import { _Configuration } from '../../../../configuration/auth.configuration.namespace';
import { IAuth } from '../../../../../../interfaces/auth.namespace'

/**
 * Class representing a Web3 entity with wallet and balance information.
 * This class handles the storage and validation of Web3 wallet credentials and associated token balances.
 * 
 * @class _Entity
 * @export _Entity
 * @implements {IAuth.ICredentials.IWeb3.IEntity}
 * @namespace Auth.Credentials.Web3.Entity
 * @description Represents a Web3 entity containing wallet identification, public key, and token balance information
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * 
 * @property {string} walletId - Unique identifier for the Web3 wallet in hexadecimal format
 * @property {string} publicKey - Public key associated with the wallet for cryptographic operations
 * @property {Array<_Configuration.IWeb3.ITokenGate.IEntity>} balance - Array of token balances and related information
 * 
 * @throws {Error} When instantiated with invalid wallet credentials or balance data
 * 
 * @example
 * const web3Entity = new _Entity({
 *   walletId: "0x1234567890abcdef",
 *   publicKey: "0xabcdef1234567890",
 *   balance: [
 *     { tokenId: "0x123", amount: "100", network: "ethereum" },
 *     { tokenId: "0x456", amount: "200", network: "polygon" }
 *   ]
 * });
 */
export class _Entity implements IAuth.ICredentials.IWeb3.IEntity {
    /**
     * Unique identifier for the Web3 wallet.
     * This property stores the unique address or identifier of the wallet in hexadecimal format.
     * 
     * @type {string}
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @description Stores the unique wallet identifier used for transactions and identification
     * @throws {Error} When set to an empty string or invalid format
     * 
     * @example
     * entity.walletId = "0x1234567890abcdef";
     */
    @ApiProperty({
        description: 'Unique identifier for the wallet',
        type: () => String,
        example: '0x1234567890abcdef'
    })
    public walletId: string;

    /**
     * Public key associated with the Web3 wallet.
     * Used for cryptographic operations and transaction signing.
     * 
     * @type {string}
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @description The public key component of the wallet's cryptographic key pair
     * @throws {Error} When set to an empty string or invalid format
     * 
     * @example
     * entity.publicKey = "0xabcdef1234567890";
     */
    @ApiProperty({
        description: 'Public key associated with the wallet',
        type: () => String,
        example: '0xabcdef1234567890'
    })
    public publicKey: string;

    /**
     * Array of token balances associated with the Web3 entity.
     * Contains detailed information about different tokens held by the wallet.
     * 
     * @type {Array<IAuth.IConfiguration.IWeb3.ITokenGate.IEntity>}
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @description Collection of token balance information including amounts and token details
     * @throws {Error} When set to a non-array value
     * 
     * @example
     * entity.balance = [
     *   { tokenId: "0x123", amount: "100", network: "ethereum" },
     *   { tokenId: "0x456", amount: "200", network: "polygon" }
     * ];
     */
    @ApiProperty({
        description: 'Array of token balances for the entity',
        type: () => _Configuration.Web3.TokenGate.Entity
    })
    public balance: Array<IAuth.IConfiguration.IWeb3.ITokenGate.IEntity>;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {IAuth.ICredentials.IWeb3.IEntity} entity - The entity data to initialize with
     * @throws {Error} When walletId is not a valid non-empty string
     * @throws {Error} When publicKey is not a valid non-empty string
     * @throws {Error} When balance is not a valid array
     */
    constructor(entity: IAuth.ICredentials.IWeb3.IEntity) {
        // Validate and set walletId
        if (typeof entity.walletId !== 'string' || entity.walletId.trim() === '') {
            throw new Error('walletId must be a non-empty string');
        }
        this.walletId = entity.walletId;

        // Validate and set publicKey
        if (typeof entity.publicKey !== 'string' || entity.publicKey.trim() === '') {
            throw new Error('publicKey must be a non-empty string');
        }
        this.publicKey = entity.publicKey;

        // Validate and set balance array
        if (!Array.isArray(entity.balance)) {
            throw new Error('balance must be an array');
        }
    }
}