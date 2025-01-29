import { _IConfiguration } from '../../../../configuration/auth.configuration.namespace'

/**
 * Web3 Entity Interface
 * @interface _IEntity
 * @export _IEntity
 * @namespace IAuth._ICredentials._IWeb3._IEntity
 * @description Represents a Web3 entity with wallet and balance information. This interface defines the structure for storing wallet identification and token balance data.
 * @property {string} walletId - Unique identifier for the wallet in the format "0.0.1234567"
 * @property {string} publicKey - Public key associated with the wallet for authentication and verification
 * @property {Array<IAuth.ICredentials.IWeb3.ITokenGate._IEntity>} balance - Array of token balances containing token IDs and amounts
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const web3Entity: _IEntity = {
 *   walletId: "0.0.1234567",
 *   publicKey: "dhiueri7r4bxhbxwb", 
 *   balance: [
 *     { tokenId: "0.0.123", amount: "100" },
 *     { tokenId: "0.0.456", amount: "200" }
 *   ]
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Unique identifier for the wallet
     * @description The wallet ID that uniquely identifies a blockchain wallet. Must be in the format "0.0.1234567" where the numbers represent the shard.realm.number format.
     * @property {string} walletId - Wallet identifier
     * @type {string}
     * @memberof _IEntity
     * @since 2.0.0
     * @example
     * ```typescript
     * walletId: "0.0.1234567"
     * ```
     * @throws {Error} If wallet ID format is invalid
     * @remarks This ID is used for all wallet-related operations and must be unique across the system
     */
    walletId: string

    /**
     * Public key associated with the wallet
     * @description The public key used for wallet authentication and transaction signing. This is the public portion of the wallet's keypair used to verify ownership.
     * @property {string} publicKey - Wallet public key
     * @type {string} 
     * @memberof _IEntity
     * @since 2.0.0
     * @example
     * ```typescript
     * publicKey: "0.0.7890123"
     * ```
     * @throws {Error} If public key format is invalid
     * @remarks The public key should never be used to derive the private key and must be stored securely
     */
    publicKey: string

    /**
     * Array of token balances for the entity
     * @description List of token balances associated with the wallet. Each entry contains a token ID and its corresponding amount.
     * Token IDs must be in the format "0.0.123" following the shard.realm.number convention.
     * @property {Array<_IConfiguration.IWeb3.ITokenGate.IEntity>} balance - Token balance array
     * @type {Array<_IConfiguration.IWeb3.ITokenGate.IEntity>}
     * @memberof _IEntity
     * @since 2.0.0
     * @example
     * ```typescript
     * balance: [
     *   { tokenId: "0.0.123", amount: "100" },
     *   { tokenId: "0.0.456", amount: "200" }
     * ]
     * ```
     * @throws {Error} If token ID format is invalid
     * @throws {Error} If amount is negative or invalid
     * @remarks Token amounts are stored as strings to maintain precision with large numbers
     */
    balance: Array<_IConfiguration.IWeb3.ITokenGate.IEntity>
}