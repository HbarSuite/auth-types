import { _IOptions } from './interfaces/auth.configuration.web2.options.interface'

/**
 * Web2 Configuration Interface Namespace
 * @export _IWeb2
 * @namespace IAuth._IConfiguration._IWeb2
 * @description
 * This namespace contains interfaces and types for configuring traditional Web2
 * authentication mechanisms. It provides comprehensive configuration options for
 * email-based authentication, admin access controls, and third-party integrations.
 * 
 * Configuration areas include:
 * - Email confirmation settings
 * - Administrative access controls
 * - Email template configuration
 * - SMTP/Mailer settings
 * - Twilio integration options
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Configuration
 * 
 * @example
 * ```typescript
 * // Complete Web2 configuration example
 * const web2Config: _IWeb2.IOptions = {
 *   confirmation_required: true,
 *   admin_only: false,
 *   sendMailOptions: {
 *     confirm: {
 *       subject: 'Confirm Your Account',
 *       template: 'confirmation-email',
 *       from: 'noreply@example.com'
 *     },
 *     reset: {
 *       subject: 'Password Reset Request',
 *       template: 'password-reset',
 *       from: 'security@example.com'
 *     }
 *   },
 *   mailerOptions: {
 *     transport: {
 *       host: 'smtp.example.com',
 *       port: 587,
 *       secure: true,
 *       auth: {
 *         user: 'smtp_user',
 *         pass: 'smtp_password'
 *       }
 *     }
 *   },
 *   twilioOptions: {
 *     enabled: true,
 *     twilioSecrets: {
 *       accountSid: 'AC1234567890',
 *       authToken: 'your_auth_token',
 *       serviceSid: 'VA1234567890'
 *     }
 *   }
 * };
 * ```
 */
export namespace _IWeb2 {
    /**
     * Web2 Authentication Configuration Options
     * @type {_IOptions}
     * @description
     * Defines the complete configuration structure for Web2 authentication,
     * including email settings, admin controls, and third-party service integration.
     * 
     * Configuration properties:
     * - Email confirmation requirements
     * - Administrative access restrictions
     * - Email templates and sending options
     * - SMTP server configuration
     * - Twilio service integration
     * 
     * @property {boolean} confirmation_required - Whether email confirmation is required
     * @property {boolean} admin_only - Restricts access to admin users only
     * @property {object} sendMailOptions - Email template and sending configuration
     * @property {object} mailerOptions - SMTP server and transport settings
     * @property {object} twilioOptions - Twilio service configuration
     * 
     * @example
     * ```typescript
     * const options: IOptions = {
     *   confirmation_required: true,
     *   admin_only: false,
     *   sendMailOptions: {
     *     confirm: {
     *       subject: 'Welcome',
     *       template: 'welcome-email'
     *     }
     *   },
     *   mailerOptions: {
     *     transport: {
     *       host: 'smtp.example.com',
     *       port: 587
     *     }
     *   },
     *   twilioOptions: {
     *     enabled: true,
     *     twilioSecrets: {
     *       accountSid: 'AC1234567890'
     *     }
     *   }
     * };
     * ```
     */
    export type IOptions = _IOptions
}