import { _ITwilio } from '../auth.twilio.namespace'

/**
 * Interface representing Twilio configuration options
 * @export _IOptions
 * @interface _IOptions
 * @namespace IAuth._ITwilio._IOptions
 * @description 
 * Defines the structure for Twilio configuration options, including secrets and enablement status.
 * This interface provides the necessary configuration for initializing and controlling Twilio services.
 * 
 * Key features:
 * - Manages Twilio authentication credentials
 * - Controls service activation state
 * - Provides type safety for Twilio configuration
 * 
 * @since 2.0.0
 * @category Configuration
 * @public
 * 
 * @property {_ITwilio.ISecrets} twilioSecrets - Contains sensitive Twilio account information
 * @property {boolean} enabled - Service enablement flag
 * 
 * @see {@link _ITwilio.ISecrets} For Twilio secrets structure
 * 
 * @example
 * ```typescript
 * const twilioOptions: _IOptions = {
 *   twilioSecrets: {
 *     accountSid: 'AC123...',
 *     authToken: '12345...',
 *     serviceSid: 'VA123...'
 *   },
 *   enabled: true
 * };
 * ```
 */
export interface _IOptions {
    /**
     * Twilio secrets configuration
     * @description 
     * Contains sensitive Twilio account credentials and identifiers required for authentication.
     * This includes the account SID, authentication token, and service SID needed to interact
     * with Twilio APIs.
     * 
     * @type {_ITwilio.ISecrets}
     * @memberof _IOptions
     * @since 2.0.0
     * @public
     * @required
     * 
     * @see {@link _ITwilio.ISecrets} For detailed secrets structure
     * 
     * @example
     * ```typescript
     * twilioSecrets: {
     *   accountSid: 'AC123...',
     *   authToken: '12345...',
     *   serviceSid: 'VA123...'
     * }
     * ```
     */
    twilioSecrets: _ITwilio.ISecrets

    /**
     * Twilio service enablement flag
     * @description 
     * Boolean flag that controls whether the Twilio service is active.
     * When true, the service is enabled and can process requests.
     * When false, the service is disabled and will not process requests.
     * 
     * @type {boolean}
     * @memberof _IOptions
     * @since 2.0.0
     * @public
     * @required
     * @default false
     * 
     * @example
     * ```typescript
     * enabled: true
     * ```
     */
    enabled: boolean
}