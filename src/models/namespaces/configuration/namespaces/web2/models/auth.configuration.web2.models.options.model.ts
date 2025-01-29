import { ISendMailOptions, MailerOptions } from "@nestjs-modules/mailer";
import { _Twilio } from '../../../../twilio/auth.twilio.namespace';
import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IsBoolean, IsObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IAuth } from '../../../../../../interfaces/auth.namespace'

/**
 * Options Class for Web2 Authentication Configuration
 * @export _Options
 * @class _Options
 * @implements {IAuth.IConfiguration.IWeb2.IOptions}
 * @namespace Auth.Configuration.Web2.Options
 * @description Defines the structure for Web2 authentication configuration options including email,
 * admin access control, and Twilio integration settings. This class handles validation and 
 * initialization of all Web2 authentication related options.
 * @since 2.0.0
 * @see IAuth.IConfiguration.IWeb2.IOptions
 * @public
 */
export class _Options implements IAuth.IConfiguration.IWeb2.IOptions {
    /**
     * Flag indicating if email confirmation is required
     * @type {boolean}
     * @memberof _Options
     * @description Controls whether users need to confirm their email address during authentication
     * @example
     * options.confirmation_required = true; // Users must confirm email
     * @default false
     * @public
     */
    @ApiProperty({
        description: "Indicates whether email confirmation is required for authentication",
        type: () => Boolean,
    })
    @IsBoolean()
    confirmation_required: boolean;

    /**
     * Flag restricting access to admin users
     * @type {boolean}
     * @memberof _Options
     * @description When true, only users with admin privileges can authenticate
     * @example
     * options.admin_only = false; // Allow all users to authenticate
     * @default false
     * @public
     */
    @ApiProperty({
        description: "Restricts authentication to admin users only when set to true",
        type: () => Boolean,
    })
    @IsBoolean()
    admin_only: boolean;

    /**
     * Email sending configuration options
     * @type {{ confirm: ISendMailOptions, reset: ISendMailOptions }}
     * @memberof _Options
     * @description Configuration for confirmation and password reset emails
     * @example
     * options.sendMailOptions = {
     *   confirm: { subject: 'Confirm Email', template: 'confirm' },
     *   reset: { subject: 'Reset Password', template: 'reset' }
     * }
     * @throws {Error} If confirm or reset options are missing
     * @public
     */
    @ApiProperty({
        description: "Configuration for sending emails",
        type: () => Object,
    })
    @IsObject()
    @ValidateNested()
    sendMailOptions: {
        confirm: ISendMailOptions,
        reset: ISendMailOptions
    }

    /**
     * Mailer service configuration
     * @type {MailerOptions}
     * @memberof _Options
     * @description Configuration for the email service provider
     * @example
     * options.mailerOptions = {
     *   transport: { host: 'smtp.example.com', port: 587 },
     *   defaults: { from: 'noreply@example.com' }
     * }
     * @throws {Error} If mailerOptions is not a valid object
     * @public
     */
    @ApiProperty({
        description: "Configuration options for the mailer service",
        type: () => Object,
    })
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    mailerOptions: MailerOptions;

    /**
     * Twilio integration configuration
     * @type {_Twilio.Options}
     * @memberof _Options
     * @description Settings for Twilio SMS service integration
     * @example
     * options.twilioOptions = new _Twilio.Options({
     *   accountSid: 'your_sid',
     *   authToken: 'your_token'
     * }, true);
     * @throws {Error} If twilioOptions is missing required properties
     * @see _Twilio.Options
     * @public
     */
    @ApiProperty({
        description: "Configuration options for Twilio integration",
        type: () => _Twilio.Options,
    })
    @IsObject()
    @ValidateNested()
    @Type(() => _Twilio.Options)
    twilioOptions: _Twilio.Options;

    /**
     * Creates an instance of _Options
     * @param {IAuth.IConfiguration.IWeb2.IOptions} options - The Web2 authentication options
     * @throws {Error} If confirmation_required is not a boolean
     * @throws {Error} If admin_only is not a boolean
     * @throws {Error} If sendMailOptions is not a valid object with confirm and reset properties
     * @throws {Error} If mailerOptions is not a valid object
     * @throws {Error} If twilioOptions is not a valid object with required properties
     * @memberof _Options
     * @description Initializes and validates all Web2 authentication configuration options
     * @example
     * const web2Options = new _Options({
     *   confirmation_required: true,
     *   admin_only: false,
     *   sendMailOptions: {
     *     confirm: { subject: 'Confirm Email' },
     *     reset: { subject: 'Reset Password' }
     *   },
     *   mailerOptions: {
     *     transport: { host: 'smtp.example.com' }
     *   },
     *   twilioOptions: {
     *     twilioSecrets: { accountSid: 'sid', authToken: 'token' },
     *     enabled: true
     *   }
     * });
     * @public
     */
    constructor(options: IAuth.IConfiguration.IWeb2.IOptions) {
        // Validate confirmation requirement flag
        if (typeof options.confirmation_required !== 'boolean') {
            throw new Error('confirmation_required must be a boolean');
        }
        this.confirmation_required = options.confirmation_required;

        // Validate admin only access flag
        if (typeof options.admin_only !== 'boolean') {
            throw new Error('admin_only must be a boolean');
        }
        this.admin_only = options.admin_only;

        // Validate email sending options
        if (typeof options.sendMailOptions !== 'object' || options.sendMailOptions === null) {
            throw new Error('sendMailOptions must be an object');
        }
        if (!options.sendMailOptions.confirm || !options.sendMailOptions.reset) {
            throw new Error('sendMailOptions must contain confirm and reset properties');
        }
        this.sendMailOptions = options.sendMailOptions;

        // Validate mailer service options
        if (typeof options.mailerOptions !== 'object' || options.mailerOptions === null) {
            throw new Error('mailerOptions must be an object');
        }
        this.mailerOptions = options.mailerOptions;

        // Validate Twilio integration options
        if (typeof options.twilioOptions !== 'object' || options.twilioOptions === null) {
            throw new Error('twilioOptions must be an object');
        }
        if (!options.twilioOptions.twilioSecrets || typeof options.twilioOptions.enabled !== 'boolean') {
            throw new Error('twilioOptions must contain twilioSecrets and enabled properties');
        }
        this.twilioOptions = new _Twilio.Options(options.twilioOptions.twilioSecrets, options.twilioOptions.enabled);
    }
}