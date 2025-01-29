import { _Options } from './auth.configuration.models.options.model'
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../interfaces/auth.namespace'
import { _Web2 } from '../namespaces/web2/auth.configuration.web2.namespace'
import { _Web3 } from '../namespaces/web3/auth.configuration.web3.namespace'

/**
 * Authentication configuration class that implements the structure for managing authentication settings
 * @export
 * @class _Authentication
 * @implements {IAuth.IConfiguration.IAuthentication}
 * @namespace Auth.Configuration.Authentication
 * @description
 * Provides a comprehensive configuration system for authentication settings with built-in validations.
 * Manages both Web2 (traditional) and Web3 (blockchain) authentication methods through a unified interface.
 * 
 * Key Features:
 * - Global authentication toggle
 * - Common configuration options
 * - Web2 authentication settings
 * - Web3 authentication settings
 * - Built-in validation
 * 
 * Configuration Areas:
 * - Authentication activation
 * - Security policies
 * - Provider settings
 * - Method-specific options
 * 
 * @since 2.0.0
 */
export class _Authentication implements IAuth.IConfiguration.IAuthentication {
    /**
     * Global authentication system activation flag
     * @type {boolean}
     * @memberof _Authentication
     * @description
     * Master switch that controls whether the entire authentication system is active.
     * When disabled, all authentication checks will be bypassed.
     * 
     * Usage:
     * - true: Authentication system is active and enforced
     * - false: Authentication is completely disabled
     * 
     * @example
     * ```typescript
     * authentication.enabled = true; // Activates authentication system
     * authentication.enabled = false; // Disables all authentication checks
     * ```
     */
    @ApiProperty({
        description: 'Indicates whether authentication is enabled',
        type: () => Boolean,
    })
    public enabled: boolean

    /**
     * Shared authentication configuration options
     * @type {IAuth.IConfiguration.IOptions}
     * @memberof _Authentication
     * @description
     * Contains common configuration settings that apply across all authentication methods.
     * These settings provide baseline configurations that affect both Web2 and Web3 authentication.
     * 
     * Common Settings Include:
     * - Session management
     * - Token configurations
     * - Security policies
     * - Rate limiting
     * - Logging preferences
     * 
     * @see _Options For detailed configuration options
     */
    @ApiProperty({
        description: 'Common options for authentication configuration',
        type: () => _Options
    })
    public commonOptions: IAuth.IConfiguration.IOptions

    /**
     * Traditional Web2 authentication settings
     * @type {{ enabled: boolean; options: _Web2.IOptions }}
     * @memberof _Authentication
     * @description
     * Configuration settings specific to traditional Web2 authentication methods.
     * Manages settings for username/password, OAuth, social login, and SSO authentication.
     * 
     * Supported Methods:
     * - Local username/password
     * - OAuth 2.0 providers
     * - Social media login
     * - Single Sign-On (SSO)
     * - Multi-factor authentication
     * 
     * @see _Web2.Options For detailed Web2 configuration options
     */
    @ApiProperty({
        description: 'Web2 authentication configuration',
        type: () => _Web2.Options,
    })
    public web2Options: IAuth.IConfiguration.IWeb2.IOptions

    /**
     * Blockchain-based Web3 authentication settings
     * @type {{ enabled: boolean; options: _Web3.IOptions }}
     * @memberof _Authentication
     * @description
     * Configuration settings specific to Web3/blockchain-based authentication methods.
     * Manages wallet connections, token gating, and smart app authentication settings.
     * 
     * Supported Features:
     * - Wallet authentication
     * - Token-gated access
     * - Multi-chain support
     * - Signature verification
     * 
     * @see _Web3.Options For detailed Web3 configuration options
     */
    @ApiProperty({
        description: 'Web3 authentication configuration',
        type: () => _Web3.Options,
    })
    public web3Options: IAuth.IConfiguration.IWeb3.IOptions

    /**
     * Initializes a new authentication configuration instance
     * @param {IAuth.IConfiguration.IAuthentication} config - Complete authentication configuration object
     * @throws {Error} When required properties are missing or invalid
     * @memberof _Authentication
     * @description
     * Creates and validates a new authentication configuration instance.
     * Performs comprehensive validation of all configuration properties.
     * 
     * Validation Checks:
     * - Type validation for enabled flag
     * - Common options structure
     * - Web2 configuration completeness
     * - Web3 configuration completeness
     * 
     * @example
     * ```typescript
     * const authConfig = new _Authentication({
     *   enabled: true,
     *   commonOptions: new _Options({
     *     sessionTimeout: 3600,
     *     maxAttempts: 3
     *   }),
     *   web2Options: {
     *     enabled: true,
     *     options: {
     *       oauth: {
     *         google: { clientId: 'xxx', clientSecret: 'xxx' }
     *       }
     *     }
     *   },
     *   web3Options: {
     *     enabled: false,
     *     options: {
     *       supportedChains: ['ethereum', 'polygon']
     *     }
     *   }
     * });
     * ```
     */
    constructor(config: IAuth.IConfiguration.IAuthentication) {
        // Validate enabled flag is boolean
        if (typeof config.enabled !== 'boolean') {
            throw new Error('enabled must be a boolean')
        }
        this.enabled = config.enabled

        // Initialize and validate common options
        try {
            this.commonOptions = new _Options(config.commonOptions);
        } catch (error) {
            throw new Error(error.message)
        }

        // Validate web2 options structure
        if (typeof config.web2Options !== 'object' || config.web2Options === null) {
            throw new Error('web2Options must be a non-null object')
        }
        this.web2Options = config.web2Options

        // Validate web3 options structure
        if (typeof config.web3Options !== 'object' || config.web3Options === null) {
            throw new Error('web3Options must be a non-null object')
        }
        this.web3Options = config.web3Options
    }
}