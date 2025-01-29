import { _IOptions } from './interfaces/auth.twilio.options.interface'
import { _ISecrets } from './interfaces/auth.twilio.secrets.interface'

/**
 * Twilio Authentication Interface Namespace
 * @export _ITwilio
 * @namespace IAuth._ITwilio
 * @description
 * This namespace encapsulates all Twilio-related interfaces and types for the authentication system.
 * It provides a centralized location for Twilio-related type definitions, improving modularity
 * and organization of the codebase.
 * 
 * The namespace includes:
 * - Configuration interfaces for Twilio services
 * - Secure storage of Twilio credentials
 * - Type definitions for Twilio API integration
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Twilio
 * 
 * @example
 * ```typescript
 * // Configure Twilio secrets
 * const secrets: _ITwilio.ISecrets = {
 *   accountSid: "AC1234567890",
 *   authToken: "auth_token_123",
 *   serviceSid: "VA1234567890"
 * };
 * 
 * // Set up Twilio options
 * const options: _ITwilio.IOptions = {
 *   twilioSecrets: secrets,
 *   enabled: true
 * };
 * ```
 */
export namespace _ITwilio {
    /**
     * Twilio Secrets Interface
     * @type {_ISecrets}
     * @description
     * Defines the structure for storing sensitive Twilio account information.
     * This interface ensures type safety for Twilio credentials and API keys.
     * 
     * @property {string} accountSid - The Twilio account identifier
     * @property {string} authToken - The authentication token for API access
     * @property {string} serviceSid - The specific service identifier
     * 
     * @example
     * ```typescript
     * const secrets: ISecrets = {
     *   accountSid: "AC1234567890",
     *   authToken: "your_auth_token",
     *   serviceSid: "VA1234567890"
     * };
     * ```
     */
    export type ISecrets = _ISecrets

    /**
     * Twilio Configuration Options Interface
     * @type {_IOptions}
     * @description
     * Defines the configuration options for Twilio services integration.
     * This interface manages both the credentials and operational settings.
     * 
     * @property {ISecrets} twilioSecrets - The Twilio account credentials
     * @property {boolean} enabled - Whether Twilio services are active
     * 
     * @example
     * ```typescript
     * const options: IOptions = {
     *   twilioSecrets: {
     *     accountSid: "AC1234567890",
     *     authToken: "your_auth_token",
     *     serviceSid: "VA1234567890"
     *   },
     *   enabled: true
     * };
     * ```
     */
    export type IOptions = _IOptions
}