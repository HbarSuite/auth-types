import { IAuth } from '../../../../interfaces/auth.namespace'
import { ApiProperty } from '@hsuite/nestjs-swagger'
import { _Twilio } from '../auth.twilio.namespace'

/**
 * Class representing Twilio configuration options.
 * @class _Options
 * @export _Options
 * @namespace Auth.Twilio
 * @implements {IAuth.ITwilio.IOptions}
 * @description Defines the structure for Twilio configuration options, including secrets and enablement status.
 * This class handles the configuration settings needed to integrate with Twilio services.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Twilio
 * @public
 * @see IAuth.ITwilio.IOptions
 * @see Auth.Twilio.Secrets
 * @see Auth.Twilio
 * @see Auth
 * 
 * @property {IAuth.ITwilio.ISecrets} twilioSecrets - Twilio secrets configuration containing account credentials
 * @property {boolean} enabled - Flag indicating if Twilio service is enabled
 * 
 * @example
 * const twilioOptions = new _Options({
 *   accountSid: 'AC1234567890abcdef1234567890abcdef',
 *   authToken: '1234567890abcdef1234567890abcdef',
 *   serviceSid: 'IS1234567890abcdef1234567890abcdef'
 * }, true);
 * 
 * @remarks
 * The _Options class is responsible for managing Twilio configuration settings.
 * It ensures proper validation of credentials and enablement status.
 * This class is essential for initializing Twilio services in the application.
 */
export class _Options implements IAuth.ITwilio.IOptions {
    /**
     * Twilio secrets configuration.
     * @type {IAuth.ITwilio.ISecrets}
     * @description Contains sensitive Twilio account information such as account SID, auth token, and service SID.
     * These credentials are required for authenticating with the Twilio API.
     * @memberof _Options
     * @public
     * @since 2.0.0
     * @see IAuth.ITwilio.ISecrets
     * @see Auth.Twilio.Secrets
     * 
     * @example
     * const secrets = {
     *   accountSid: 'AC1234567890abcdef1234567890abcdef',
     *   authToken: '1234567890abcdef1234567890abcdef',
     *   serviceSid: 'IS1234567890abcdef1234567890abcdef'
     * };
     * 
     * @remarks
     * The twilioSecrets property must contain valid Twilio credentials.
     * These credentials are validated when creating a new instance.
     */
    @ApiProperty({
        type: () => _Twilio.Secrets,
        description: 'Twilio secrets configuration containing account SID, auth token, and service SID',
        required: true,
        example: {
            accountSid: 'AC1234567890abcdef1234567890abcdef',
            authToken: '1234567890abcdef1234567890abcdef',
            serviceSid: 'IS1234567890abcdef1234567890abcdef'
        }
    })
    twilioSecrets: IAuth.ITwilio.ISecrets

    /**
     * Twilio service enablement flag.
     * @type {boolean}
     * @description Indicates whether the Twilio service is enabled (true) or disabled (false).
     * Used to control whether Twilio services should be active in the application.
     * @memberof _Options
     * @public
     * @since 2.0.0
     * @default false
     * @see IAuth.ITwilio.IOptions#enabled
     * 
     * @example
     * const isEnabled = true; // Twilio services will be active
     * 
     * @remarks
     * The enabled flag determines if Twilio services are available.
     * When false, Twilio functionality will be disabled regardless of valid credentials.
     */
    @ApiProperty({
        type: () => Boolean,
        description: 'Twilio service enablement flag. True if enabled, false if disabled.',
        required: true,
        example: true
    })
    enabled: boolean

    /**
     * Creates an instance of _Options.
     * @constructor
     * @param {IAuth.ITwilio.ISecrets} twilioSecrets - Twilio secrets configuration containing account credentials
     * @param {boolean} enabled - Twilio service enablement flag
     * @throws {Error} Will throw an error if enabled is not a boolean value
     * @throws {Error} Will throw an error if twilioSecrets is invalid or missing required fields
     * @memberof _Options
     * @public
     * @since 2.0.0
     * @see IAuth.ITwilio.ISecrets
     * @see Auth.Twilio.Secrets
     * 
     * @example
     * const twilioOptions = new _Options({
     *   accountSid: 'AC1234567890abcdef1234567890abcdef',
     *   authToken: '1234567890abcdef1234567890abcdef',
     *   serviceSid: 'IS1234567890abcdef1234567890abcdef'
     * }, true);
     * 
     * @remarks
     * The constructor validates both the twilioSecrets and enabled parameters.
     * It ensures that the secrets are properly formatted and the enabled flag is boolean.
     */
    constructor(twilioSecrets: IAuth.ITwilio.ISecrets, enabled: boolean) {
        // Initialize secrets with validation through Secrets class
        this.twilioSecrets = new _Twilio.Secrets(twilioSecrets.accountSid, twilioSecrets.authToken, twilioSecrets.serviceSid);
        
        // Validate enabled parameter is boolean
        if (typeof enabled !== 'boolean') {
            throw new Error('enabled must be a boolean');
        }
        
        this.twilioSecrets = twilioSecrets;
        this.enabled = enabled;
    }
}