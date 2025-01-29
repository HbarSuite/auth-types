import { _TokenGate } from '../namespaces/token-gate/auth.configuration.web3.token_gate.namespace'
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../../../interfaces/auth.namespace'

/**
 * Options Class for Web3 Authentication Configuration
 * @export _Options
 * @class _Options
 * @implements {IAuth.IConfiguration.IWeb3.IOptions}
 * @namespace Auth.Configuration.Web3.Options
 * @description Defines the structure for Web3 authentication configuration options including token gating
 * functionality for blockchain-based access control. This class handles validation and initialization
 * of all Web3 authentication related settings.
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * @see {@link IAuth.IConfiguration.IWeb3.IOptions}
 * @example
 * const options = new _Options({
 *   tokenGateOptions: new _TokenGate.Options({
 *     enabled: true,
 *     requiredTokens: ['0x123...'],
 *     minBalance: '1000'
 *   })
 * });
 */
export class _Options implements IAuth.IConfiguration.IWeb3.IOptions {
    /**
     * Configuration options for token gating functionality
     * @type {_TokenGate.IOptions}
     * @memberof _Options
     * @description Specifies settings for token-based access control in Web3 authentication.
     * These options determine how token ownership and characteristics affect authentication.
     * @public
     * @see {@link _TokenGate.IOptions}
     * @throws {Error} If tokenGateOptions is not properly initialized
     * @example
     * options.tokenGateOptions = new _TokenGate.Options({
     *   enabled: true,
     *   requiredTokens: ['0x123...'],
     *   minBalance: '1000' // 1000 tokens
     * });
     */
    @ApiProperty({
        description: 'Options for configuring token gate functionality',
        type: () =>_Options,
    })
    public tokenGateOptions: IAuth.IConfiguration.IWeb3.ITokenGate.IOptions

    /**
     * Creates an instance of _Options.
     * @param {IAuth.IConfiguration.IWeb3.IOptions} options - The options to initialize the class
     * @throws {Error} If tokenGateOptions is missing or invalid
     * @memberof _Options
     * @description Initializes and validates Web3 authentication configuration options.
     * Ensures that token gating options are properly configured.
     * @public
     * @see {@link IAuth.IConfiguration.IWeb3.IOptions}
     * @throws {Error} When tokenGateOptions is not an instance of _TokenGate.Options
     * @example
     * const web3Options = new _Options({
     *   tokenGateOptions: new _TokenGate.Options({
     *     enabled: true,
     *     requiredTokens: ['0x123...'],
     *     minBalance: '1000' // 1000 tokens
     *   })
     * });
     */
    constructor(options: IAuth.IConfiguration.IWeb3.IOptions) {
        // Validate token gate options
        if (!options.tokenGateOptions || !(options.tokenGateOptions instanceof _TokenGate.Options)) {
            throw new Error('tokenGateOptions must be an instance of _TokenGate.Options')
        }
        this.tokenGateOptions = options.tokenGateOptions
    }
}