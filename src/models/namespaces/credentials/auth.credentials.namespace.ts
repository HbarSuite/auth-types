import { _User } from './namespaces/user/auth.credentials.user.namespace'
import { _Web2 } from './namespaces/web2/auth.credentials.web2.namespace'
import { _Web3 } from './namespaces/web3/auth.credentials.web3.namespace'

/**
 * Credential Management System
 * @export _Credentials
 * @namespace Auth.Credentials
 * @description
 * Comprehensive credential management system that handles authentication
 * across multiple protocols and methods. Provides secure handling of
 * user credentials, traditional web authentication, and blockchain-based
 * authentication mechanisms.
 * 
 * Core Components:
 * - User credential management
 * - Web2 authentication
 * - Web3 blockchain auth
 * - Credential encryption
 * - Access control
 * 
 * Security Features:
 * - Encryption at rest
 * - Secure transmission
 * - Access control
 * - Audit logging
 * - Credential rotation
 * 
 * Supported Credential Types:
 * - User credentials
 *   - Username/password
 *   - Email/phone
 *   - Social identities
 * 
 * - Web2 credentials
 *   - OAuth tokens
 *   - API keys
 *   - Session tokens
 * 
 * - Web3 credentials
 *   - Wallet addresses
 *   - Signatures
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * 
 * @example
 * ```typescript
 * // Initialize comprehensive credential system
 * const credentialSystem = {
 *   // User credential management
 *   user: new _Credentials.User.Entity({
 *     username: 'john_doe',
 *     email: 'john@example.com',
 *     profile: {
 *       displayName: 'John Doe',
 *       avatar: 'https://example.com/avatar.jpg',
 *       preferences: {
 *         language: 'en',
 *         timezone: 'UTC'
 *       }
 *     },
 *     security: {
 *       mfaEnabled: true,
 *       lastPasswordChange: new Date(),
 *       loginAttempts: 0
 *     }
 *   }),
 * 
 *   // Web2 authentication handling
 *   web2: new _Credentials.Web2.Manager({
 *     oauth: {
 *       tokens: {
 *         access: 'eyJhbGci...',
 *         refresh: 'eyJhbGci...'
 *       },
 *       provider: 'google',
 *       scope: ['email', 'profile']
 *     },
 *     session: {
 *       id: 'sess_123',
 *       expiresAt: new Date(Date.now() + 3600000)
 *     }
 *   }),
 * 
 *   // Web3 blockchain authentication
 *   web3: new _Credentials.Web3.Manager({
 *     wallet: {
 *       address: '0x1234...',
 *       chainId: 1,
 *       provider: 'metamask'
 *     },
 *     auth: {
 *       nonce: 'random_nonce',
 *       signature: '0x5678...',
 *       timestamp: Date.now()
 *     }
 *   })
 * };
 * 
 * // Use the credential system
 * await credentialSystem.user.validate();
 * await credentialSystem.web2.refreshTokens();
 * await credentialSystem.web3.verifySignature();
 * ```
 */
export namespace _Credentials {
    /**
     * User Credential Management
     * @namespace User
     * @description
     * Comprehensive system for managing user-specific credentials and
     * authentication data. Handles user profiles, security settings,
     * and authentication states.
     * 
     * Core Features:
     * - Profile management
     * - Security settings
     * - Permission control
     * - Preference storage
     * - Activity tracking
     * 
     * Data Categories:
     * - Basic information
     * - Security settings
     * - Access permissions
     * - Profile preferences
     * - Authentication history
     * 
     * @since 2.0.0
     * @category Authentication
     * 
     * @example
     * ```typescript
     * const userEntity = new User.Entity({
     *   // Basic information
     *   username: 'john_doe',
     *   email: 'john@example.com',
     *   phone: '+1234567890',
     * 
     *   // Profile data
     *   profile: {
     *     displayName: 'John Doe',
     *     avatar: 'https://example.com/avatar.jpg',
     *     bio: 'Software Engineer',
     *     location: 'San Francisco, CA'
     *   },
     * 
     *   // Security settings
     *   security: {
     *     mfaEnabled: true,
     *     passwordLastChanged: new Date(),
     *     loginAttempts: 0,
     *     lockedUntil: null
     *   },
     * 
     *   // Preferences
     *   preferences: {
     *     language: 'en',
     *     timezone: 'America/Los_Angeles',
     *     notifications: {
     *       email: true,
     *       push: false
     *     }
     *   }
     * });
     * ```
     */
    export import User = _User

    /**
     * Web2 Authentication Management
     * @namespace Web2
     * @description
     * Advanced system for managing traditional web-based authentication
     * methods. Handles various authentication flows, token management,
     * and session control.
     * 
     * Authentication Methods:
     * - Username/password
     * - OAuth/OpenID Connect
     * - API key authentication
     * - Session management
     * - Token handling
     * 
     * Security Features:
     * - Token encryption
     * - Session validation
     * - Rate limiting
     * - Audit logging
     * - Access control
     * 
     * @since 2.0.0
     * @category Authentication
     * 
     * @example
     * ```typescript
     * // Initialize authentication request
     * const loginRequest = new Web2.Request.Login({
     *   // Authentication credentials
     *   username: 'john_doe',
     *   password: 'secure_password',
     * 
     *   // Session options
     *   options: {
     *     rememberMe: true,
     *     deviceId: 'device_xyz',
     *     location: {
     *       ip: '192.168.1.1',
     *       userAgent: 'Mozilla/5.0...'
     *     }
     *   },
     * 
     *   // Security settings
     *   security: {
     *     mfaToken: 'totp_token',
     *     captchaResponse: 'response_token'
     *   }
     * });
     * 
     * // Handle OAuth flow
     * const oauthLogin = new Web2.OAuth.Login({
     *   provider: 'google',
     *   tokens: {
     *     access: 'eyJhbGci...',
     *     refresh: 'eyJhbGci...',
     *     idToken: 'eyJhbGci...'
     *   },
     *   profile: {
     *     email: 'john@example.com',
     *     name: 'John Doe'
     *   }
     * });
     * ```
     */
    export import Web2 = _Web2

    /**
     * Blockchain Authentication Management
     * @namespace Web3
     * @description
     * Sophisticated system for managing blockchain-based authentication
     * mechanisms. Handles wallet connections, signature verification,
     * and blockchain-specific authentication flows.
     * 
     * Core Features:
     * - Wallet authentication
     * - Signature verification
     * - Chain management
     * - Token validation
     * 
     * Supported Chains:
     * - Ethereum (EVM)
     * - Polygon
     * - BSC
     * - Custom chains
     * 
     * Security Measures:
     * - Signature validation
     * - Chain verification
     * - Nonce management
     * - Address validation
     * - Transaction signing
     * 
     * @since 2.0.0
     * @category Authentication
     * 
     * @example
     * ```typescript
     * // Initialize Web3 entity
     * const web3Entity = new Web3.Entity({
     *   // Wallet information
     *   wallet: {
     *     address: '0x1234...',
     *     chainId: 1,
     *     provider: 'metamask'
     *   },
     * 
     *   // Authentication data
     *   auth: {
     *     nonce: 'random_nonce',
     *     signature: '0x5678...',
     *     message: 'Sign this message to authenticate',
     *     timestamp: Date.now()
     *   },
     * 
     *   // Chain configuration
     *   chain: {
     *     id: 1,
     *     name: 'Ethereum Mainnet',
     *     rpcUrl: 'https://mainnet.infura.io/v3/...'
     *   },
     * 
     *   // Token validation
     *   tokens: {
     *     required: ['0xabcd...'],
     *     balance: '1000000000000000000',
     *     type: 'ERC20'
     *   }
     * });
     * 
     * // Verify wallet connection
     * const connection = await web3Entity.verifyConnection();
     * 
     * // Validate signature
     * const isValid = await web3Entity.validateSignature();
     * ```
     */
    export import Web3 = _Web3
}