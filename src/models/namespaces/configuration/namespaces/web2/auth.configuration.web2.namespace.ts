import { _Options } from './models/auth.configuration.web2.models.options.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * Web2 Interface Namespace
 * @namespace _Web2
 * @description Contains types and interfaces related to Web2 authentication configuration
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 */
export namespace _Web2 {
    /**
     * Options class for Web2 authentication configuration
     * @class Options
     * @extends {_Options}
     * @description Defines the structure and validation rules for Web2 authentication configuration options.
     * This includes comprehensive settings for:
     * - Email confirmation requirements and workflows
     * - Administrative access controls and permissions
     * - Email sending configuration including subjects and templates
     * - SMTP mailer service connection and delivery options
     * - Twilio integration settings for SMS/phone verification
     * 
     * @remarks
     * This class extends the base _Options class to provide specialized Web2-specific authentication settings.
     * It inherits validation logic and initialization handling from its parent class while adding
     * Web2-focused configuration properties.
     * 
     * @example
     * ```typescript
     * const web2Options = new _Web2.Options({
     *   confirmation_required: true,
     *   admin_only: false,
     *   sendMailOptions: {
     *     confirm: {
     *       subject: 'Confirm your email',
     *       template: 'confirmation'
     *     },
     *     reset: {
     *       subject: 'Reset password',
     *       template: 'reset'
     *     }
     *   },
     *   mailerOptions: {
     *     transport: {
     *       host: 'smtp.example.com',
     *       port: 587,
     *       secure: false
     *     }
     *   },
     *   twilioOptions: {
     *     enabled: true,
     *     twilioSecrets: {
     *       accountSid: 'your_sid',
     *       authToken: 'your_token'
     *     }
     *   }
     * });
     * ```
     * 
     * @see {@link _Options} - Base configuration class that this extends
     * @see {@link IAuth.IConfiguration.IWeb2.IOptions} - Interface definition for the options
     * @public
     * @since 2.0.0
     * @version 2.0.0
     * @author HSuite Team
     */
    @ApiSchema({ name: 'Auth.Configuration.Web2.Options' })
    export class Options extends _Options {}
}