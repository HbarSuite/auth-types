import { _IOptions } from './interfaces/auth.configuration.web3.options.interface'
import { _ITokenGate } from './namespaces/token-gate/auth.configuration.web3.token_gate.namespace'

/**
 * Web3 Configuration Interface Namespace
 * @export _IWeb3
 * @namespace IAuth._IConfiguration._IWeb3
 * @description
 * This namespace defines the structure and types for Web3-related authentication
 * configuration. It provides comprehensive interfaces for blockchain-based
 * authentication, including token gating and Web3 provider configuration.
 * 
 * Key features:
 * - Token gating configuration
 * - Blockchain network settings
 * - Web3 provider configuration
 * - Role-based access control
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Configuration
 * 
 * @example
 * ```typescript
 * // Complete Web3 configuration example
 * const tokenGateConfig: _IWeb3.ITokenGate.IOptions = {
 *   enabled: true,
 *   chainId: 1,
 *   contractAddress: "0x1234...",
 *   roles: [
 *     {
 *       name: "premium",
 *       minTokens: 100,
 *       contractAddress: "0xabcd..."
 *     }
 *   ],
 *   provider: {
 *     url: "https://mainnet.infura.io/v3/YOUR-PROJECT-ID",
 *     timeout: 30000
 *   }
 * };
 * 
 * // Web3 authentication configuration
 * const web3Config: _IWeb3.IOptions = {
 *   tokenGateOptions: tokenGateConfig,
 *   networkOptions: {
 *     defaultChainId: 1,
 *     supportedChainIds: [1, 137, 56]
 *   }
 * };
 * ```
 */
export namespace _IWeb3 {
    /**
     * Token Gate Configuration Interface
     * @type {_ITokenGate}
     * @description
     * Provides interfaces for implementing token-gating functionality in Web3
     * authentication. This includes role definitions, token requirements, and
     * contract configurations.
     * 
     * Features:
     * - Token-based access control
     * - Role management
     * - Token balance verification
     * 
     * @example
     * ```typescript
     * const tokenGate: ITokenGate.IOptions = {
     *   enabled: true,
     *   chainId: 1,
     *   roles: [
     *     {
     *       name: "holder",
     *       minTokens: 1
     *     }
     *   ]
     * };
     * ```
     */
    export import ITokenGate = _ITokenGate

    /**
     * Web3 Authentication Configuration Options
     * @type {_IOptions}
     * @description
     * Defines the configuration options for Web3 authentication integration.
     * Includes settings for token gating, network configuration, and provider
     * settings.
     * 
     * Configuration areas:
     * - Token gate settings
     * - Network configuration
     * - Chain ID management
     * - Provider settings
     * 
     * @example
     * ```typescript
     * const options: IOptions = {
     *   tokenGateOptions: {
     *     enabled: true,
     *     chainId: 1
     *   },
     *   networkOptions: {
     *     defaultChainId: 1,
     *     rpcUrl: "https://ethereum.example.com"
     *   }
     * };
     * ```
     */
    export type IOptions = _IOptions
}