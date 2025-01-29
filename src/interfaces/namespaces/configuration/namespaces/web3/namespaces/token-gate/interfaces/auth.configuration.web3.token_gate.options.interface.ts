import { _IRole } from './auth.configuration.web3.token_gate.role.interface'

/**
 * Token Gate Configuration Options Interface
 * @export _IOptions
 * @interface _IOptions
 * @namespace IAuth._IConfiguration._IWeb3._ITokenGate._IOptions
 * @description
 * Defines the configuration options for the token gate system. This interface
 * provides comprehensive settings for controlling token-based access and roles
 * within the application.
 * 
 * Configuration areas:
 * - System enablement
 * - Role definitions
 * - Access control rules
 * - Token requirements
 * 
 * @since 2.0.0
 * @category TokenGate
 * 
 * @example
 * ```typescript
 * const tokenGateConfig: _IOptions = {
 *   enabled: true,
 *   roles: [
 *     {
 *       name: "premium_access",
 *       tokenId: "0x1234567890abcdef",
 *       minBalance: 1,
 *       contractAddress: "0xabcdef1234567890",
 *       chainId: 1,
 *       metadata: {
 *         displayName: "Premium Access",
 *         description: "Full platform access with premium features",
 *         icon: "https://assets.platform.com/icons/premium.svg"
 *       }
 *     },
 *     {
 *       name: "governance",
 *       tokenId: "0x9876543210fedcba",
 *       minBalance: 100,
 *       contractAddress: "0x0123456789abcdef",
 *       chainId: 1,
 *       metadata: {
 *         displayName: "Governance Rights",
 *         description: "Platform governance and voting rights",
 *         icon: "https://assets.platform.com/icons/governance.svg"
 *       }
 *     }
 *   ],
 *   networkConfig: {
 *     defaultChainId: 1,
 *     supportedChains: [1, 137, 56],
 *     rpcUrls: {
 *       1: "https://eth-mainnet.provider.com",
 *       137: "https://polygon-mainnet.provider.com"
 *     }
 *   }
 * };
 * ```
 */
export interface _IOptions {
    /**
     * Token Gate System Status
     * @description
     * Controls whether the token gate functionality is active in the system.
     * When disabled, token-based access control is bypassed.
     * 
     * Usage:
     * - Enable/disable all token gating
     * - Maintenance mode control
     * - Feature flag for token checks
     * 
     * @type {boolean}
     * 
     * @example
     * ```typescript
     * // Enable token gating
     * enabled: true
     * 
     * // Disable for maintenance
     * enabled: false
     * ```
     */
    enabled: boolean

    /**
     * Token Gate Roles Configuration
     * @description
     * Defines the roles and their associated token requirements for the token
     * gate system. Each role specifies the tokens and conditions required for
     * access.
     * 
     * Role configuration includes:
     * - Role identifiers
     * - Required tokens
     * - Minimum balances
     * - Chain-specific settings
     * - Display metadata
     * 
     * @type {Array<_IRole>}
     * @see {@link _IRole}
     * 
     * @example
     * ```typescript
     * roles: [
     *   {
     *     name: "premium_access",
     *     tokenId: "0x1234567890abcdef",
     *     minBalance: 1,
     *     contractAddress: "0xabcdef1234567890",
     *     chainId: 1,
     *     metadata: {
     *       displayName: "Premium Access",
     *       description: "Full platform access"
     *     }
     *   }
     * ]
     * ```
     */
    roles: Array<_IRole>
}