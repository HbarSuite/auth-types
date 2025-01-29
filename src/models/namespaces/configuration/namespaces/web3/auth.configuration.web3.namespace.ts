import { _Options } from './models/auth.configuration.web3.models.options.model'
import { _TokenGate } from './namespaces/token-gate/auth.configuration.web3.token_gate.namespace'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * Web3 Interface Namespace
 * @export _Web3
 * @namespace IAuth._IConfiguration._Web3
 * @description Defines the structure and types for Web3-related functionality within the authentication system.
 * This namespace contains classes and interfaces for managing Web3 authentication, token gating, and configuration.
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * 
 * @property {_TokenGate} TokenGate - The token gate interface for Web3 authentication and access control
 * @property {Options} Options - The options class for Web3 configuration settings
 * 
 * @example
 * // Using the Web3 namespace
 * const web3Config = new _Web3.Options({
 *   network: 'mainnet',
 *   provider: 'https://eth-mainnet.provider.com',
 *   contract: '0x123...',
 *   token: '0xabc...'
 * });
 * 
 * @see {@link _TokenGate} For token gating functionality
 * @see {@link Options} For Web3 configuration options
 */
export namespace _Web3 {
    /**
     * Token Gate Interface
     * @type {_TokenGate}
     * @description Provides types and interfaces for token-gating functionality.
     * Handles token-based access control, metadata management, and role assignments.
     * @public
     * 
     * @property {_TokenGate.Role} Role - The role class for token-gate access control
     * @property {_TokenGate.Options} Options - The options class for token-gate configuration
     * @property {_TokenGate.Entity} Entity - The entity class for token-gate objects
     * @property {_TokenGate.Properties} Properties - The properties class for token-gate metadata
     * @property {_TokenGate.Metadata} Metadata - The metadata class for token information
     * 
     * @example
     * // Using TokenGate functionality
     * const tokenGateConfig = new _Web3.TokenGate.Options({
     *   enabled: true,
     *   roles: [...]
     * });
     * 
     * @see {@link _TokenGate.Role} For role-based access control
     * @see {@link _TokenGate.Options} For token gate configuration
     * @see {@link _TokenGate.Entity} For token gate entity management
     * @see {@link _TokenGate.Properties} For token gate properties
     * @see {@link _TokenGate.Metadata} For token metadata
     */
    export import TokenGate = _TokenGate

    /**
     * Web3 Configuration Options Class
     * @class Options
     * @extends {_Options}
     * @description Defines the configuration options for Web3 integration.
     * Handles network settings, provider configuration, and contract/token addresses.
     * @public
     * 
     * @property {string} network - The blockchain network to connect to (e.g., 'mainnet', 'testnet')
     * @property {string} provider - The Web3 provider URL or connection endpoint
     * @property {string} contract - The smart app address for authentication
     * @property {string} token - The token contract address for access control
     * 
     * @example
     * const options = new Options({
     *   network: 'rinkeby',
     *   provider: 'https://rinkeby.infura.io/v3/YOUR-PROJECT-ID',
     *   contract: '0x123abc...',
     *   token: '0xdef456...'
     * });
     * 
     * @see {@link _Options} For base options implementation
     * @throws {Error} When required configuration parameters are missing or invalid
     */
    @ApiSchema({ name: 'Auth.Configuration.Web3.Options' })
    export class Options extends _Options {}
}
