import { _Twilio } from './namespaces/twilio/auth.twilio.namespace'
import { _TwoFactor } from './namespaces/two-factor/auth.two_factor.namespace'
import { _Configuration } from './namespaces/configuration/auth.configuration.namespace'
import { _Web3 } from './namespaces/configuration/namespaces/web3/auth.configuration.web3.namespace'
import { _Web2 } from './namespaces/configuration/namespaces/web2/auth.configuration.web2.namespace'
import { _Credentials } from './namespaces/credentials/auth.credentials.namespace'

/**
 * Authentication Models Namespace
 * @namespace Auth
 * @description
 * This namespace encapsulates all authentication-related models and types.
 * It provides a comprehensive set of models for different authentication methods,
 * including traditional Web2 authentication, blockchain-based Web3 authentication,
 * two-factor authentication, and third-party service integrations.
 * 
 * The namespace is organized into logical sub-namespaces, each handling specific
 * aspects of the authentication system:
 * - Twilio: SMS and voice verification services
 * - TwoFactor: Multi-factor authentication methods
 * - Configuration: System-wide authentication settings
 * - Web3: Blockchain and wallet-based authentication
 * - Web2: Traditional username/password and OAuth
 * - Credentials: Secure credential management
 * 
 * Key Features:
 * - Modular architecture for flexible authentication
 * - Support for multiple authentication methods
 * - Secure credential handling
 * - Configurable security settings
 * - Integration with external services
 * 
 * Usage Areas:
 * - User authentication flows
 * - Access control systems
 * - Security configuration
 * - Identity verification
 * - Session management
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * 
 * @example
 * ```typescript
 * // Initialize Twilio verification
 * const twilioVerify = new Auth.Twilio.Verify({
 *   accountSid: 'AC...',
 *   authToken: '...',
 *   serviceSid: 'VA...'
 * });
 * 
 * // Setup two-factor authentication
 * const twoFactorSetup = new Auth.TwoFactor.Setup({
 *   issuer: 'MyApp',
 *   algorithm: 'SHA1',
 *   digits: 6,
 *   period: 30
 * });
 * 
 * // Configure Web3 wallet authentication
 * const web3Auth = new Auth.Web3.WalletAuth({
 *   chainId: 1,
 *   provider: window.ethereum,
 *   message: 'Sign to authenticate with MyApp'
 * });
 * 
 * // Set up Web2 OAuth
 * const oauthSetup = new Auth.Web2.OAuth({
 *   clientId: 'client_id',
 *   clientSecret: 'client_secret',
 *   redirectUri: 'https://myapp.com/callback'
 * });
 * ```
 */
export namespace Auth {
    /**
     * Twilio Authentication Service Models
     * @type {typeof _Twilio}
     * @description
     * Contains models and types for Twilio-based authentication services,
     * including SMS verification, voice verification, and verification check
     * operations. Provides structured types for Twilio API responses and
     * configuration options.
     * 
     * Features:
     * - SMS verification
     * - Voice verification
     * - Verification status tracking
     * - Error handling
     * - Rate limiting
     * 
     * @example
     * ```typescript
     * // Initialize verification service
     * const verifyService = new Auth.Twilio.Verify({
     *   accountSid: 'AC...',
     *   authToken: '...'
     * });
     * 
     * // Send verification code
     * await verifyService.sendCode('+1234567890', {
     *   channel: 'sms',
     *   locale: 'en'
     * });
     * 
     * // Check verification code
     * const result = await verifyService.checkCode('+1234567890', '123456');
     * ```
     */
    export import Twilio = _Twilio

    /**
     * Two-Factor Authentication Models
     * @type {typeof _TwoFactor}
     * @description
     * Provides models for implementing comprehensive two-factor authentication,
     * including TOTP (Time-based One-Time Password), backup codes, and
     * verification status tracking. Supports multiple 2FA methods and
     * recovery options.
     * 
     * Supported Methods:
     * - TOTP (Google Authenticator compatible)
     * - SMS codes
     * - Email codes
     * - Backup codes
     * - Hardware tokens
     * 
     * Security Features:
     * - Rate limiting
     * - Brute force protection
     * - Secure secret generation
     * - Recovery options
     * 
     * @example
     * ```typescript
     * // Initialize 2FA setup
     * const twoFactorAuth = new Auth.TwoFactor.Auth({
     *   issuer: 'MyApp',
     *   algorithm: 'SHA1'
     * });
     * 
     * // Generate new secret
     * const secret = await twoFactorAuth.generateSecret();
     * 
     * // Generate QR code URL
     * const qrUrl = twoFactorAuth.getQRCodeUrl(secret, 'user@example.com');
     * 
     * // Verify TOTP code
     * const isValid = await twoFactorAuth.verifyCode('123456', secret);
     * ```
     */
    export import TwoFactor = _TwoFactor

    /**
     * Authentication Configuration Models
     * @type {typeof _Configuration}
     * @description
     * Models for managing authentication system configuration, including
     * security settings, timeout values, and authentication method preferences.
     * Provides types for both global and method-specific configurations.
     * 
     * Configuration Areas:
     * - Security policies
     * - Session management
     * - Rate limiting
     * - Password policies
     * - MFA requirements
     * 
     * Features:
     * - Environment-based config
     * - Dynamic settings
     * - Validation rules
     * - Default configurations
     * 
     * @example
     * ```typescript
     * // Initialize authentication configuration
     * const config = new Auth.Configuration.Settings({
     *   sessionTimeout: 3600,
     *   maxAttempts: 3,
     *   lockoutDuration: 900,
     *   passwordPolicy: {
     *     minLength: 12,
     *     requireSpecialChars: true,
     *     requireNumbers: true
     *   },
     *   mfaPolicy: {
     *     required: true,
     *     allowedMethods: ['totp', 'sms']
     *   }
     * });
     * ```
     */
    export import Configuration = _Configuration

    /**
     * Web3 Authentication Models
     * @type {typeof _Web3}
     * @description
     * Models for blockchain-based authentication, including wallet connection,
     * signature verification, and chain-specific configurations. Supports
     * multiple blockchain networks and wallet providers.
     * 
     * Supported Features:
     * - Wallet authentication
     * - Message signing
     * - Token gating
     * - Multi-chain support
     * - ENS resolution
     * 
     * Security Measures:
     * - Signature verification
     * - Chain validation
     * - Nonce management
     * - Address validation
     * 
     * @example
     * ```typescript
     * // Initialize Web3 authentication
     * const web3Auth = new Auth.Web3.WalletConnect({
     *   chainId: 1,
     *   rpcUrl: 'https://mainnet.infura.io/v3/...',
     *   supportedChains: [1, 137, 56],
     *   walletConnect: {
     *     projectId: '...',
     *     name: 'MyApp'
     *   }
     * });
     * 
     * // Request connection
     * const address = await web3Auth.connect();
     * 
     * // Verify signature
     * const isValid = await web3Auth.verifySignature(message, signature, address);
     * ```
     */
    export import Web3 = _Web3

    /**
     * Web2 Authentication Models
     * @type {typeof _Web2}
     * @description
     * Models for traditional authentication methods, including username/password,
     * OAuth, and social login integrations. Provides types for user sessions,
     * tokens, and authentication flows.
     * 
     * Authentication Methods:
     * - Username/password
     * - OAuth 2.0
     * - Social login
     * - Magic links
     * - SSO
     * 
     * Features:
     * - Session management
     * - Token handling
     * - Password hashing
     * - Social providers
     * - Auth flows
     * 
     * @example
     * ```typescript
     * // Initialize OAuth configuration
     * const oauth = new Auth.Web2.OAuth({
     *   clientId: '...',
     *   clientSecret: '...',
     *   redirectUri: 'https://myapp.com/callback',
     *   scopes: ['profile', 'email'],
     *   providers: {
     *     google: {
     *       enabled: true,
     *       clientId: '...'
     *     },
     *     github: {
     *       enabled: true,
     *       clientId: '...'
     *     }
     *   }
     * });
     * ```
     */
    export import Web2 = _Web2

    /**
     * Credential Management System
     * @type {typeof _Credentials}
     * @description
     * Comprehensive credential management system that handles authentication
     * across multiple protocols and methods. Provides secure handling of
     * user credentials, traditional web authentication, and blockchain-based
     * authentication mechanisms.
     */
    export import Credentials = _Credentials
}