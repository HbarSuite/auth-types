import { _Auth } from './models/auth.two_factor.models.model'
import { _Security } from './models/auth.two_factor.models.security.model'
import { _Response } from './namespaces/response/auth.two_factor.response.namespace'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * Two-Factor Authentication (2FA) System
 * @export _TwoFactor
 * @namespace _Auth._TwoFactor
 * @description
 * Comprehensive namespace for managing two-factor authentication functionality.
 * Provides a complete suite of tools for implementing secure 2FA, including
 * multiple authentication methods, security configurations, and response handling.
 * 
 * Core Components:
 * - Authentication methods (TOTP, SMS, Email)
 * - Security configurations
 * - Response handling
 * - Recovery options
 * - Audit logging
 * 
 * Supported 2FA Methods:
 * - Time-based One-Time Passwords (TOTP)
 * - SMS verification codes
 * - Email verification codes
 * - Hardware security keys
 * - Backup codes
 * 
 * Security Features:
 * - Encryption
 * - Rate limiting
 * - Brute force protection
 * - Session management
 * - Device tracking
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Auth.TwoFactor
 * 
 * @example
 * ```typescript
 * // Initialize 2FA system
 * const twoFactorSystem = {
 *   // Set up response handling
 *   response: new _TwoFactor.Response.Create({
 *     factorSid: 'FAxxx...',
 *     identity: 'user@example.com',
 *     uri: 'otpauth://totp/MyApp:user@example.com?secret=JBSWY3DPEHPK3PXP...',
 *     secret: 'JBSWY3DPEHPK3PXP...',
 *     message: 'TOTP factor created successfully'
 *   }),
 * 
 *   // Configure security settings
 *   security: new _TwoFactor.Security({
 *     encryption: {
 *       algorithm: 'aes-256-gcm',
 *       keyLength: 32
 *     },
 *     rateLimit: {
 *       maxAttempts: 5,
 *       windowMs: 300000 // 5 minutes
 *     },
 *     session: {
 *       duration: 3600000, // 1 hour
 *       extendOnActivity: true
 *     }
 *   }),
 * 
 *   // Set up authentication handler
 *   auth: new _TwoFactor.Auth({
 *     issuer: 'MyApp',
 *     defaultMethod: 'totp',
 *     backupCodesCount: 10,
 *     validityWindow: 30 // seconds
 *   })
 * };
 * 
 * // Use the configured system
 * await twoFactorSystem.auth.setupTOTP(userId);
 * await twoFactorSystem.auth.verifyCode(userId, '123456');
 * ```
 */
export namespace _TwoFactor {
    /**
     * Two-Factor Authentication Response Handler
     * @type {typeof _Response}
     * @description
     * Manages responses for all 2FA operations, providing standardized
     * formats for success and error cases. Handles responses for factor
     * creation, verification, deletion, and status checks.
     * 
     * Response Types:
     * - Factor creation
     * - Verification results
     * - Factor deletion
     * - Status updates
     * - Error handling
     * 
     * Features:
     * - Standardized formats
     * - Error classification
     * - Status tracking
     * - Response metadata
     * - Audit information
     * 
     * @memberof _TwoFactor
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create factor response
     * const createResponse = new _TwoFactor.Response.Create({
     *   factorSid: 'FAxxx...',
     *   identity: 'user@example.com',
     *   uri: 'otpauth://totp/MyApp:user@example.com?secret=xxx...',
     *   secret: 'base32-encoded-secret',
     *   metadata: {
     *     createdAt: new Date(),
     *     method: 'totp',
     *     status: 'pending'
     *   }
     * });
     * 
     * // Verify factor response
     * const verifyResponse = new _TwoFactor.Response.Verify({
     *   success: true,
     *   factorSid: 'FAxxx...',
     *   timestamp: new Date(),
     *   metadata: {
     *     method: 'totp',
     *     attemptCount: 1
     *   }
     * });
     * ```
     */
    export import Response = _Response

    /**
     * Two-Factor Authentication Security Manager
     * @class Security
     * @extends {_Security}
     * @description
     * Manages security aspects of the 2FA system, including encryption,
     * rate limiting, session management, and security policies.
     * 
     * Security Areas:
     * - Encryption management
     * - Rate limiting
     * - Brute force protection
     * - Session tracking
     * - Policy enforcement
     * 
     * Features:
     * - Configurable policies
     * - Adaptive security
     * - Audit logging
     * - Threat detection
     * - Compliance tracking
     * 
     * @memberof _TwoFactor
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Initialize security settings
     * const security = new Security({
     *   encryption: {
     *     algorithm: 'aes-256-gcm',
     *     keyLength: 32,
     *     saltRounds: 10
     *   },
     *   rateLimit: {
     *     maxAttempts: 5,
     *     windowMs: 300000,
     *     blockDuration: 3600000
     *   },
     *   session: {
     *     duration: 3600000,
     *     extendOnActivity: true,
     *     maxConcurrent: 3
     *   },
     *   policy: {
     *     requireBackupCodes: true,
     *     allowMultipleFactors: true,
     *     enforceDeviceVerification: true
     *   }
     * });
     * 
     * // Apply security policies
     * await security.enforceRateLimit(userId);
     * await security.validateSession(sessionId);
     * ```
     */
    @ApiSchema({
        name: 'Auth.TwoFactor.Security'
    })
    export class Security extends _Security {}

    /**
     * Two-Factor Authentication Core Handler
     * @class Auth
     * @extends {_Auth}
     * @description
     * Core class managing all 2FA operations, including factor setup,
     * verification, recovery, and management. Provides comprehensive
     * functionality for implementing secure 2FA workflows.
     * 
     * Core Functions:
     * - Factor setup and enrollment
     * - Code verification
     * - Recovery management
     * - Factor management
     * - Status tracking
     * 
     * Supported Methods:
     * - TOTP (Google Authenticator)
     * - SMS verification
     * - Email verification
     * - Hardware security keys
     * - Recovery codes
     * 
     * @memberof _TwoFactor
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Initialize authentication handler
     * const auth = new Auth({
     *   issuer: 'MyApp',
     *   defaultMethod: 'totp',
     *   settings: {
     *     totp: {
     *       algorithm: 'SHA1',
     *       digits: 6,
     *       period: 30,
     *       window: 1
     *     },
     *     sms: {
     *       provider: 'twilio',
     *       timeout: 300,
     *       template: 'Your verification code is: {{code}}'
     *     },
     *     recovery: {
     *       codesCount: 10,
     *       codeLength: 16
     *     }
     *   }
     * });
     * 
     * // Set up TOTP
     * const setup = await auth.setupTOTP(userId);
     * console.log(setup.qrCodeUrl);
     * 
     * // Verify code
     * const isValid = await auth.verifyCode(userId, '123456');
     * 
     * // Generate recovery codes
     * const recoveryCodes = await auth.generateRecoveryCodes(userId);
     * ```
     */
    @ApiSchema({
        name: 'Auth.TwoFactor.Auth'
    })
    export class Auth extends _Auth {}
}