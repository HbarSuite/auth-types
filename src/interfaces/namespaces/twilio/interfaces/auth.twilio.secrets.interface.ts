/**
 * Interface representing Twilio account secrets
 * @export _ISecrets
 * @interface _ISecrets
 * @namespace IAuth._ITwilio._ISecrets
 * @description 
 * Defines the structure for storing sensitive Twilio account information.
 * Contains the required credentials and identifiers for authenticating with Twilio services.
 * 
 * Key components:
 * - Account SID for identifying the Twilio account
 * - Auth Token for API authentication
 * - Service SID for specific Twilio service access
 * 
 * @property {string} accountSid - The unique identifier for your Twilio account
 * @property {string} authToken - The authentication token for your Twilio account
 * @property {string} serviceSid - The unique identifier for a specific Twilio service
 * 
 * @since 2.0.0
 * @category Authentication
 * @public
 * 
 * @example
 * ```typescript
 * const twilioSecrets: _ISecrets = {
 *   accountSid: "AC1234567890abcdef1234567890abcdef",
 *   authToken: "1234567890abcdef1234567890abcdef",
 *   serviceSid: "VA1234567890abcdef1234567890abcdef"
 * };
 * ```
 */
export interface _ISecrets {
    /**
     * Twilio Account SID
     * @type {string}
     * @description 
     * The unique identifier for your Twilio account.
     * This is a public identifier that starts with 'AC' and can be found in your Twilio Console.
     * Required for authenticating all API requests to Twilio.
     * @property {string} accountSid - The unique identifier for your Twilio account
     * @example "AC1234567890abcdef1234567890abcdef"
     * @required
     * @public
     * @pattern ^AC[0-9a-fA-F]{32}$
     */
    accountSid: string

    /**
     * Twilio Auth Token
     * @type {string}
     * @description 
     * The authentication token for your Twilio account.
     * This secret token is used to sign API requests and verify that requests come from you.
     * Must be kept secure and never exposed in client-side code or public repositories.
     * @property {string} authToken - The authentication token for your Twilio account
     * @example "1234567890abcdef1234567890abcdef"
     * @required
     * @public
     * @security This token should be kept secure and never exposed publicly
     * @pattern ^[0-9a-fA-F]{32}$
     */
    authToken: string

    /**
     * Twilio Service SID
     * @type {string}
     * @description 
     * The unique identifier for a specific Twilio service (e.g., Verify, Programmable SMS).
     * Different services have different SID prefixes:
     * - VA: Verify Service
     * - MG: Messaging Service
     * - IS: Sync Service
     * Required when making API calls to specific Twilio services.
     * @property {string} serviceSid - The unique identifier for a specific Twilio service
     * @example "VA1234567890abcdef1234567890abcdef"
     * @required
     * @public
     * @pattern ^(VA|MG|IS)[0-9a-fA-F]{32}$
     */
    serviceSid: string
}