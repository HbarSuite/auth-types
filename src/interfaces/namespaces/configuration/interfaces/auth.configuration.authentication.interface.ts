import { _IWeb2 } from '../namespaces/web2/auth.configuration.web2.namespace'
import { _IWeb3 } from '../namespaces/web3/auth.configuration.web3.namespace'
import { _IOptions } from './auth.configuration.options.interface'

/**
 * Authentication Interface defining the structure for authentication configuration
 * @export
 * @interface _IAuthentication
 * @namespace IAuth._IConfiguration._IAuthentication
 * @description Authentication Interface defining the structure and options for both Web2 and Web3 authentication.
 * This interface serves as the main configuration point for all authentication methods in the system.
 * It allows granular control over authentication features through its various properties.
 * 
 * @property {boolean} enabled - Master switch to enable/disable all authentication. When false, all auth attempts will be rejected.
 * @property {_IOptions} commonOptions - Shared configuration options used across all auth methods like session duration and token settings.
 * @property {_IWeb2.IOptions} web2Options - Configuration specific to Web2 authentication methods like username/password, OAuth, SSO.
 * @property {_IWeb3.IOptions} web3Options - Configuration specific to Web3 authentication methods like wallet connect.
 * 
 * @example
 * ```typescript
 * const authConfig: _IAuthentication = {
 *   enabled: true,
 *   commonOptions: {
 *     sessionDuration: 3600,
 *     tokenSecret: 'secret123'
 *   },
 *   web2Options: {
 *     passwordAuth: true,
 *     twoFactorEnabled: true
 *   },
 *   web3Options: {
 *     walletConnect: true,
 *     networks: ['ethereum']
 *   }
 * };
 * ```
 * @since 2.0.0
 */
export interface _IAuthentication {
    /**
     * Master switch to enable/disable all authentication functionality.
     * When set to false, all authentication attempts will be rejected regardless of other settings.
     * This provides a global kill-switch for authentication when needed.
     * 
     * @type {boolean}
     * @memberof _IAuthentication
     * @example
     * ```typescript
     * // Disable all authentication
     * config.authentication.enabled = false;
     * ```
     * @since 2.0.0
     */
    enabled: boolean

    /**
     * Shared configuration options used across all authentication methods.
     * Contains common settings like session duration, token configuration, and other
     * authentication-wide parameters that apply to both Web2 and Web3 auth methods.
     * 
     * @type {_IOptions}
     * @memberof _IAuthentication
     * @example
     * ```typescript
     * const commonConfig: _IOptions = {
     *   sessionTimeout: 3600,
     *   maxAttempts: 3,
     *   lockoutDuration: 300
     * };
     * ```
     * @since 2.0.0
     */
    commonOptions: _IOptions

    /**
     * Configuration specific to Web2 authentication methods.
     * Includes settings for traditional authentication mechanisms like:
     * - Username/password authentication
     * - OAuth providers
     * - Single Sign-On (SSO)
     * - Two-Factor Authentication (2FA)
     * - Password policies and requirements
     * 
     * @type {_IWeb2.IOptions}
     * @memberof _IAuthentication
     * @example
     * ```typescript
     * const web2Config: _IWeb2.IOptions = {
     *   passwordAuth: {
     *     enabled: true,
     *     minLength: 8
     *   },
     *   twoFactor: {
     *     enabled: true,
     *     providers: ['sms', 'authenticator']
     *   }
     * };
     * ```
     * @since 2.0.0
     */
    web2Options: _IWeb2.IOptions

    /**
     * Configuration specific to Web3 authentication methods.
     * Includes settings for blockchain-based authentication including:
     * - Wallet connect integration
     * - Supported blockchain networks
     * - Signature verification parameters
     * 
     * @type {_IWeb3.IOptions}
     * @memberof _IAuthentication
     * @example
     * ```typescript
     * const web3Config: _IWeb3.IOptions = {
     *   walletConnect: {
     *     enabled: true,
     *     networks: ['ethereum', 'polygon']
     *   },
     *   signatureVerification: {
     *     timeout: 300,
     *     message: 'Sign to authenticate'
     *   }
     * };
     * ```
     * @since 2.0.0
     */
    web3Options: _IWeb3.IOptions
}