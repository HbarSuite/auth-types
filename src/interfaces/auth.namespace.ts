import { _ITwilio } from './namespaces/twilio/auth.twilio.namespace'
import { _ITwoFactor } from './namespaces/two-factor/auth.two_factor.namespace'
import { _IConfiguration } from './namespaces/configuration/auth.configuration.namespace'
import { _IWeb3 } from './namespaces/configuration/namespaces/web3/auth.configuration.web3.namespace'
import { _IWeb2 } from './namespaces/configuration/namespaces/web2/auth.configuration.web2.namespace'
import { _ICredentials } from './namespaces/credentials/auth.credentials.namespace'

/**
 * Authentication Interfaces Namespace
 * @namespace IAuth
 * @description
 * This namespace contains the complete set of interfaces and types that define
 * the authentication system's structure and behavior. It provides type definitions
 * for all authentication-related components, ensuring type safety and consistency
 * across the application.
 * 
 * The namespace is organized into logical interface groups:
 * - ITwilio: Interfaces for Twilio integration
 * - ITwoFactor: Two-factor authentication interfaces
 * - IConfiguration: System configuration interfaces
 * - IWeb3: Blockchain authentication interfaces
 * - IWeb2: Traditional authentication interfaces
 * - ICredentials: Credential management interfaces
 * 
 * Each interface group is designed to be extensible and maintainable, following
 * SOLID principles and TypeScript best practices.
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * 
 * @example
 * ```typescript
 * // Twilio configuration interface usage
 * const twilioConfig: IAuth.ITwilio.IConfig = {
 *   accountSid: "AC123...",
 *   authToken: "abc123...",
 *   verifyServiceSid: "VA123..."
 * };
 * 
 * // Two-factor authentication status interface
 * const twoFactorStatus: IAuth.ITwoFactor.IStatus = {
 *   isEnabled: true,
 *   verificationMethod: "TOTP",
 *   lastVerified: new Date()
 * };
 * 
 * // Web3 wallet configuration interface
 * const web3Config: IAuth.IWeb3.IWalletConfig = {
 *   chainId: 1,
 *   rpcUrl: "https://ethereum.example.com",
 *   contractAddress: "0x123..."
 * };
 * ```
 */
export namespace IAuth {
    /**
     * Twilio Service Interfaces
     * @type {_ITwilio}
     * @description
     * Defines interfaces for Twilio integration, including configuration options,
     * verification requests, and response types. These interfaces ensure type-safe
     * interaction with Twilio's authentication services.
     * 
     * @example
     * ```typescript
     * const verifyConfig: IAuth.ITwilio.IVerifyConfig = {
     *   phoneNumber: "+1234567890",
     *   channel: "sms"
     * };
     * ```
     */
    export import ITwilio = _ITwilio

    /**
     * Two-Factor Authentication Interfaces
     * @type {_ITwoFactor}
     * @description
     * Provides interfaces for implementing two-factor authentication, including
     * TOTP configuration, backup codes, and verification status. These interfaces
     * define the structure for both setup and verification processes.
     * 
     * @example
     * ```typescript
     * const totpSetup: IAuth.ITwoFactor.ITOTPConfig = {
     *   secret: "BASE32SECRET",
     *   algorithm: "SHA1",
     *   digits: 6
     * };
     * ```
     */
    export import ITwoFactor = _ITwoFactor

    /**
     * Authentication Configuration Interfaces
     * @type {_IConfiguration}
     * @description
     * Defines interfaces for authentication system configuration, including
     * security policies, timeout settings, and method-specific configurations.
     * These interfaces ensure consistent configuration across the system.
     * 
     * @example
     * ```typescript
     * const authConfig: IAuth.IConfiguration.ISecurityPolicy = {
     *   passwordMinLength: 8,
     *   requireSpecialChars: true,
     *   sessionTimeout: 3600
     * };
     * ```
     */
    export import IConfiguration = _IConfiguration

    /**
     * Web3 Authentication Interfaces
     * @type {_IWeb3}
     * @description
     * Provides interfaces for blockchain-based authentication, including wallet
     * connections, signature verification, and chain-specific configurations.
     * These interfaces support multiple blockchain networks and wallet types.
     * 
     * @example
     * ```typescript
     * const walletAuth: IAuth.IWeb3.IWalletAuth = {
     *   address: "0x123...",
     *   chainId: 1,
     *   signature: "0x456..."
     * };
     * ```
     */
    export import IWeb3 = _IWeb3

    /**
     * Web2 Authentication Interfaces
     * @type {_IWeb2}
     * @description
     * Defines interfaces for traditional authentication methods, including
     * username/password authentication, OAuth flows, and social login
     * integrations. These interfaces ensure type safety in authentication flows.
     * 
     * @example
     * ```typescript
     * const oauthConfig: IAuth.IWeb2.IOAuthConfig = {
     *   clientId: "client123",
     *   clientSecret: "secret456",
     *   redirectUri: "https://example.com/callback"
     * };
     * ```
     */
    export import IWeb2 = _IWeb2

    /**
     * Credential Management Interfaces
     * @type {_ICredentials}
     * @description
     * Provides interfaces for credential management, including storage formats,
     * validation rules, and encryption requirements. These interfaces ensure
     * secure and consistent handling of authentication credentials.
     * 
     * @example
     * ```typescript
     * const userCreds: IAuth.ICredentials.IStoredCredentials = {
     *   hash: "bcrypt_hash_here",
     *   salt: "random_salt",
     *   iterations: 10000
     * };
     * ```
     */
    export import ICredentials = _ICredentials
}