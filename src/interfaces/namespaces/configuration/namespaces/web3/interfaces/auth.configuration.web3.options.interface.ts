import { _ITokenGate } from '../namespaces/token-gate/auth.configuration.web3.token_gate.namespace'

/**
 * Options Interface for Web3 Authentication Configuration
 * @export _IOptions
 * @interface _IOptions
 * @namespace IAuth._IConfiguration._IWeb3._IOptions
 * @description Defines the structure for Web3 authentication configuration options including token gating settings
 * @since 2.0.0
 * @public
 * @category Configuration
 * @group Web3
 * @see {@link _ITokenGate} For token gating related options
 * @example
 * ```typescript
 * const web3Options: _IOptions = {
 *   tokenGateOptions: {
 *     enabled: true,
 *     requiredTokens: ['0x123...'],
 *     minBalance: 1
 *   }
 * }
 * ```
 */
export interface _IOptions {
    /**
     * Configuration options for token gating functionality
     * @description Specifies settings for token-based access control in Web3 authentication,
     * including required token addresses, minimum balances, and other token gate parameters
     * @property {_ITokenGate.IOptions} tokenGateOptions
     * @type {_ITokenGate.IOptions}
     * @see {@link _ITokenGate.IOptions}
     * @since 2.0.0
     * @public
     * @category Configuration
     * @group TokenGate
     * @required
     * @remarks This property is required to configure token gating behavior. If token gating
     * is not needed, you can disable it by setting enabled: false in the options.
     * @throws {Error} Will throw an error if tokenGateOptions is not provided
     * @example
     * ```typescript
     * tokenGateOptions: {
     *   enabled: true,
     *   requiredTokens: ['0x123...'],
     *   minBalance: 1
     * }
     * ```
     */
    tokenGateOptions: _ITokenGate.IOptions
}