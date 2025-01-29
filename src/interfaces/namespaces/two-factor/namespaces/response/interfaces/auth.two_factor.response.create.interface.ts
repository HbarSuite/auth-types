/**
 * Interface representing the response structure for creating a two-factor authentication factor.
 * @interface _ICreate
 * @export _ICreate
 * @namespace IAuth._ITwoFactor._IResponse._ICreate
 * @description Defines the structure of the response when a new two-factor authentication factor is created.
 * @property {string} factorSid - The unique identifier for the created factor.
 * @property {string} identity - The identity associated with the two-factor authentication.
 * @property {string} uri - The URI for the two-factor authentication, typically used for QR code generation.
 * @property {string} secret - The secret key used for two-factor authentication.
 * @property {string} message - A message providing additional information about the creation process.
 * @since 2.0.0
 * @category Authentication
 * @module TwoFactor
 * @public
 * @example
 * ```typescript
 * const createResponse: _ICreate = {
 *   factorSid: "YF1234567890abcdef",
 *   identity: "user@example.com",
 *   uri: "otpauth://totp/Example:user@example.com?secret=ABCDEF...",
 *   secret: "ABCDEF123456",
 *   message: "Two-factor authentication factor created successfully"
 * };
 * ```
 */
export interface _ICreate {
    /**
     * The unique identifier for the created factor.
     * @description A string that uniquely identifies the newly created two-factor authentication factor.
     * @property {string} factorSid
     * @type {string}
     * @required
     * @since 2.0.0
     * @example "YF1234567890abcdef"
     * @memberof _ICreate
     * @public
     */
    factorSid: string;

    /**
     * The identity associated with the two-factor authentication.
     * @description A string representing the user or entity for which the two-factor authentication is being created.
     * @property {string} identity
     * @type {string}
     * @required
     * @since 2.0.0
     * @example "user@example.com"
     * @memberof _ICreate
     * @public
     */
    identity: string;

    /**
     * The URI for the two-factor authentication, typically used for QR code generation.
     * @description A string containing the URI that can be used to generate a QR code for setting up two-factor authentication.
     * @property {string} uri
     * @type {string}
     * @required
     * @since 2.0.0
     * @example "otpauth://totp/Example:user@example.com?secret=ABCDEF..."
     * @memberof _ICreate
     * @public
     */
    uri: string;

    /**
     * The secret key used for two-factor authentication.
     * @description A string containing the secret key that is used in the two-factor authentication process.
     * @property {string} secret
     * @type {string}
     * @required
     * @since 2.0.0
     * @example "ABCDEF123456"
     * @security This secret should be kept secure and never exposed publicly
     * @memberof _ICreate
     * @public
     */
    secret: string;

    /**
     * A message providing additional information about the creation process.
     * @description A string containing any additional details or feedback about the two-factor authentication creation process.
     * @property {string} message
     * @type {string}
     * @required
     * @since 2.0.0
     * @example "Two-factor authentication factor created successfully"
     * @memberof _ICreate
     * @public
     */
    message: string;
}