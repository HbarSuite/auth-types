import { ISendMailOptions, MailerOptions } from "@nestjs-modules/mailer"
import { _ITwilio } from '../../../../twilio/auth.twilio.namespace'

/**
 * Options Interface for Web2 Authentication Configuration
 * @export _IOptions
 * @interface _IOptions
 * @namespace IAuth._IConfiguration._IWeb2._IOptions
 * @description Defines the structure for Web2 authentication configuration options, including email confirmation settings, admin access control, mail sending configurations and Twilio integration options
 * @since 2.0.0
 * @public
 */
export interface _IOptions {
    /**
     * Indicates whether email confirmation is required for authentication
     * @description When set to true, users must confirm their email address before being able to fully authenticate. When false, users can authenticate immediately after registration.
     * @property {boolean} confirmation_required
     * @type {boolean}
     * @default false
     * @example
     * ```typescript
     * confirmation_required: true // Users must confirm email
     * confirmation_required: false // No email confirmation needed
     * ```
     * @public
     */
    confirmation_required: boolean

    /**
     * Restricts authentication to admin users only when set to true
     * @description Controls access level for authentication. When true, only users with admin privileges can authenticate. When false, all users can authenticate.
     * @property {boolean} admin_only
     * @type {boolean}
     * @default false
     * @example
     * ```typescript
     * admin_only: true // Only admin users can authenticate
     * admin_only: false // All users can authenticate
     * ```
     * @public
     */
    admin_only: boolean

    /**
     * Configuration for sending emails
     * @description Defines comprehensive options for sending both confirmation and password reset emails, including templates, subjects, and content
     * @property {Object} sendMailOptions
     * @type {{confirm: ISendMailOptions, reset: ISendMailOptions}}
     * @example
     * ```typescript
     * sendMailOptions: {
     *   confirm: {
     *     subject: 'Confirm your email',
     *     template: 'confirmation'
     *   },
     *   reset: {
     *     subject: 'Reset your password',
     *     template: 'reset-password'
     *   }
     * }
     * ```
     * @public
     */
    sendMailOptions: {
        /**
         * Options for sending confirmation emails
         * @description Specifies the configuration for email confirmation messages, including template selection, subject line, and any custom variables
         * @property {ISendMailOptions} confirm
         * @type {ISendMailOptions}
         * @see {@link ISendMailOptions}
         * @example
         * ```typescript
         * confirm: {
         *   subject: 'Please confirm your email',
         *   template: 'email-confirmation',
         *   context: { confirmationUrl: 'https://example.com/confirm' }
         * }
         * ```
         * @public
         */
        confirm: ISendMailOptions

        /**
         * Options for sending password reset emails
         * @description Specifies the configuration for password reset messages, including template selection, subject line, and any custom variables
         * @property {ISendMailOptions} reset
         * @type {ISendMailOptions}
         * @see {@link ISendMailOptions}
         * @example
         * ```typescript
         * reset: {
         *   subject: 'Password Reset Request',
         *   template: 'password-reset',
         *   context: { resetUrl: 'https://example.com/reset' }
         * }
         * ```
         * @public
         */
        reset: ISendMailOptions
    }

    /**
     * Configuration options for the mailer service
     * @description Defines the complete settings for the email sending service, including transport configuration, default sender, and template options
     * @property {MailerOptions} mailerOptions
     * @type {MailerOptions}
     * @see {@link MailerOptions}
     * @example
     * ```typescript
     * mailerOptions: {
     *   transport: {
     *     host: 'smtp.example.com',
     *     port: 587,
     *     secure: false,
     *     auth: {
     *       user: 'user@example.com',
     *       pass: 'password'
     *     }
     *   },
     *   defaults: {
     *     from: '"No Reply" <noreply@example.com>'
     *   }
     * }
     * ```
     * @public
     */
    mailerOptions: MailerOptions

    /**
     * Configuration options for Twilio integration
     * @description Specifies the complete settings for Twilio services integration, including authentication credentials and messaging configurations
     * @property {_ITwilio.IOptions} twilioOptions
     * @type {_ITwilio.IOptions}
     * @see {@link _ITwilio.IOptions}
     * @example
     * ```typescript
     * twilioOptions: {
     *   accountSid: 'your_account_sid',
     *   authToken: 'your_auth_token',
     *   messagingServiceSid: 'your_messaging_service_sid'
     * }
     * ```
     * @public
     */
    twilioOptions: _ITwilio.IOptions
}