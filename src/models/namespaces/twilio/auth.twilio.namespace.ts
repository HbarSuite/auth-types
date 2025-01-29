import { _Options } from './models/auth.twilio.models.options.model'
import { _Secrets } from './models/auth.twilio.models.secrets.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * Twilio Integration Namespace
 * @namespace _Twilio
 * @description
 * Encapsulates all Twilio-related functionality for the authentication system.
 * This namespace provides a comprehensive set of types and classes for integrating
 * Twilio services into the authentication workflow.
 * 
 * Core Features:
 * - SMS verification
 * - Voice verification
 * - Service configuration
 * - Credential management
 * - API integration
 * 
 * Security Considerations:
 * - Secure credential storage
 * - Rate limiting
 * - Error handling
 * - Audit logging
 * - Compliance tracking
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * 
 * @example
 * ```typescript
 * 
 * // Configure Twilio service
 * const options = new _Twilio.Options({
 *   secrets,
 *   enabled: true,
 *   settings: {
 *     defaultRegion: 'US',
 *     verificationTimeout: 300,
 *     maxAttempts: 3,
 *     rateLimits: {
 *       sms: 10,
 *       voice: 5
 *     }
 *   }
 * });
 * 
 * // Use the configured service
 * const verificationService = new TwilioVerificationService(options);
 * await verificationService.sendCode('+1234567890', 'sms');
 * ```
 */
export namespace _Twilio {
    /**
     * Twilio Secrets Management
     * @class Secrets
     * @extends {_Secrets}
     * @description
     * Manages secure storage and handling of Twilio authentication credentials.
     * This class provides a type-safe way to handle sensitive Twilio account
     * information while ensuring proper validation and security measures.
     * 
     * Security Features:
     * - Credential validation
     * - Secure storage
     * - Access control
     * - Audit logging
     * 
     * Managed Credentials:
     * - Account SID (unique identifier)
     * - Auth Token (API authentication)
     * - Service SID (specific service)
     * - API Keys (optional)
     * 
     * @property {string} accountSid - The unique identifier for a Twilio account
     * @property {string} authToken - The authentication token for API access
     * @property {string} serviceSid - The identifier for a specific Twilio service
     * 
     * @since 2.0.0
     * @category Authentication
     * 
     * @example
     * ```typescript
     * 
     * // Initialize with environment variables
     * const secrets = new Secrets({
     *   accountSid: process.env.TWILIO_ACCOUNT_SID,
     *   authToken: process.env.TWILIO_AUTH_TOKEN,
     *   serviceSid: process.env.TWILIO_SERVICE_SID
     * });
     * 
     * // Access credentials
     * console.log(secrets.accountSid); // AC1234...
     * ```
     */
    @ApiSchema({
        name: 'Auth.Twilio.Secrets'
    })
    export class Secrets extends _Secrets {}

    /**
     * Twilio Service Configuration
     * @class Options
     * @extends {_Options}
     * @description
     * Defines the comprehensive configuration options for Twilio services integration.
     * This class manages both the authentication credentials and operational settings
     * for the Twilio service, providing a centralized configuration point.
     * 
     * Configuration Areas:
     * - Authentication credentials
     * - Service enablement
     * - Regional settings
     * - Rate limiting
     * - Verification settings
     * 
     * Features:
     * - Dynamic configuration
     * - Environment-based setup
     * - Service validation
     * - Default settings
     * - Feature toggles
     * 
     * @property {Secrets} twilioSecrets - The Twilio authentication credentials
     * @property {boolean} enabled - Service activation status
     * @property {Object} settings - Additional configuration options
     * 
     * @since 2.0.0
     * @category Authentication
     * 
     * @example
     * ```typescript
     * // Basic configuration
     * const options = new Options({
     *   secrets: twilioSecrets,
     *   enabled: true
     * });
     * 
     * // Advanced configuration
     * const options = new Options({
     *   secrets: twilioSecrets,
     *   enabled: true,
     *   settings: {
     *     defaultRegion: 'US',
     *     verificationTimeout: 300,
     *     maxAttempts: 3,
     *     channels: {
     *       sms: {
     *         enabled: true,
     *         rateLimit: 10
     *       },
     *       voice: {
     *         enabled: true,
     *         rateLimit: 5
     *       }
     *     },
     *     templates: {
     *       sms: 'Your verification code is: {{code}}',
     *       voice: 'Your verification code is: {{code}}'
     *     }
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Auth.Twilio.Options'
    })
    export class Options extends _Options {}
}