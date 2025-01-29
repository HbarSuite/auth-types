import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../interfaces/auth.namespace'

/**
 * Class representing Twilio account secrets.
 * @class _Secrets
 * @export _Secrets
 * @namespace Auth.Twilio
 * @implements {IAuth.ITwilio.ISecrets}
 * @description Defines the structure for storing sensitive Twilio account information.
 * This class handles validation and storage of Twilio credentials needed for authentication.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Twilio
 * @public
 * @see IAuth.ITwilio.ISecrets
 * @see Auth.Twilio
 * @see Auth
 * 
 * @property {string} accountSid - The unique identifier for your Twilio account
 * @property {string} authToken - The authentication token for your Twilio account
 * @property {string} serviceSid - The unique identifier for a specific Twilio service
 * 
 * @remarks
 * The _Secrets class provides a structured way to store and validate Twilio credentials.
 * It ensures that all required credentials are provided and valid before allowing instantiation.
 * 
 */
export class _Secrets implements IAuth.ITwilio.ISecrets {
    /**
     * Twilio Account SID.
     * @type {string}
     * @description The unique identifier for your Twilio account.
     * This is required for authenticating with the Twilio API.
     * @memberof _Secrets
     * @public
     * @since 2.0.0
     * @see IAuth.ITwilio.ISecrets#accountSid
     * 
     * @remarks
     * The Account SID is a unique identifier that starts with 'AC'.
     * It can be found in your Twilio Console dashboard.
     * 
     */
    @ApiProperty({
        description: 'The unique identifier for your Twilio account',
        type: () => String,
        required: true
    })
    accountSid: string;

    /**
     * Twilio Auth Token.
     * @type {string}
     * @description The authentication token for your Twilio account.
     * This secret token is used to sign API requests.
     * @memberof _Secrets
     * @public
     * @since 2.0.0
     * @see IAuth.ITwilio.ISecrets#authToken
     * 
     * @remarks
     * The Auth Token should be kept secure and never exposed publicly.
     * It can be regenerated from the Twilio Console if compromised.
     * 
     */
    @ApiProperty({
        description: 'The authentication token for your Twilio account',
        type: () => String,
        example: 'your_auth_token_here',
        required: true
    })
    authToken: string;

    /**
     * Twilio Service SID.
     * @type {string}
     * @description The unique identifier for a specific Twilio service (e.g., Verify, Programmable SMS).
     * Used to identify which Twilio service to interact with.
     * @memberof _Secrets
     * @public
     * @since 2.0.0
     * @see IAuth.ITwilio.ISecrets#serviceSid
     * 
     * @remarks
     * The Service SID is specific to each Twilio service you use.
     * For Verify services, it starts with 'VA'.
     * For Messaging services, it starts with 'MG'.
     * 
     */
    @ApiProperty({
        description: 'The unique identifier for a specific Twilio service',
        type: () => String,
        required: true
    })
    serviceSid: string;

    /**
     * Creates an instance of _Secrets.
     * @constructor
     * @param {string} accountSid - Twilio Account SID
     * @param {string} authToken - Twilio Auth Token
     * @param {string} serviceSid - Twilio Service SID
     * @throws {Error} Will throw an error if any parameter is not a non-empty string
     * @memberof _Secrets
     * @public
     * @since 2.0.0
     * 
     * @remarks
     * The constructor performs validation on all parameters to ensure they are non-empty strings.
     * This helps prevent invalid credential configurations early in the instantiation process.
     * 
     */
    constructor(accountSid: string, authToken: string, serviceSid: string) {
        // Validate accountSid is a non-empty string
        if (typeof accountSid !== 'string' || accountSid.trim() === '') {
            throw new Error('accountSid must be a non-empty string');
        }
        // Validate authToken is a non-empty string
        if (typeof authToken !== 'string' || authToken.trim() === '') {
            throw new Error('authToken must be a non-empty string');
        }
        // Validate serviceSid is a non-empty string
        if (typeof serviceSid !== 'string' || serviceSid.trim() === '') {
            throw new Error('serviceSid must be a non-empty string');
        }

        this.accountSid = accountSid;
        this.authToken = authToken;
        this.serviceSid = serviceSid;
    }
}