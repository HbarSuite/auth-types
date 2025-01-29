import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../interfaces/auth.namespace'

/**
 * Class representing the response structure for creating a two-factor authentication factor.
 * @class _Create
 * @export _Create
 * @implements {IAuth.ITwoFactor.IResponse.ICreate}
 * @namespace Auth.TwoFactor.Response
 * @description Defines the structure of the response when a new two-factor authentication factor is created.
 * This class encapsulates all the necessary information returned after successfully creating a new 2FA factor,
 * including the unique identifier, associated identity, QR code URI, secret key, and status message.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.TwoFactor.Response
 * @see {@link IAuth.ITwoFactor.IResponse.ICreate}
 * @public
 * 
 * @property {string} factorSid - The unique identifier for the created factor
 * @property {string} identity - The identity associated with the 2FA
 * @property {string} uri - The URI for QR code generation
 * @property {string} secret - The secret key for 2FA
 * @property {string} message - Additional information message
 * 
 * @example
 * const createResponse = new _Create(
 *   'YF1234567890abcdef1234567890abcdef',
 *   'user@example.com',
 *   'otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP',
 *   'JBSWY3DPEHPK3PXP',
 *   'Two-factor authentication created successfully'
 * );
 */
export class _Create implements IAuth.ITwoFactor.IResponse.ICreate {
    /**
     * The unique identifier for the created factor.
     * @type {string}
     * @description A string that uniquely identifies the newly created two-factor authentication factor.
     * This ID is used for future reference and management of the 2FA factor. The format typically follows
     * a specific pattern starting with 'YF' followed by a combination of alphanumeric characters.
     * @memberof _Create
     * @public
     * @since 2.0.0
     * @throws {Error} When attempting to set an invalid factorSid format
     * 
     * @example
     * const factorSid = 'YF1234567890abcdef1234567890abcdef';
     */
    @ApiProperty({
        description: 'The unique identifier for the created factor',
        type: () => String,
        example: 'YF1234567890abcdef1234567890abcdef'
    })
    factorSid: string;

    /**
     * The identity associated with the two-factor authentication.
     * @type {string}
     * @description A string representing the user or entity for which the two-factor authentication is being created.
     * Typically an email address or username that uniquely identifies the user in the system. This identity
     * is used in the QR code generation and for associating the 2FA factor with a specific user account.
     * @memberof _Create
     * @public
     * @since 2.0.0
     * @throws {Error} When attempting to set an invalid identity format
     * 
     * @example
     * const identity = 'user@example.com';
     */
    @ApiProperty({
        description: 'The identity associated with the two-factor authentication',
        type: () => String,
        example: 'user@example.com'
    })
    identity: string;

    /**
     * The URI for the two-factor authentication QR code.
     * @type {string}
     * @description A string containing the URI that can be used to generate a QR code for setting up two-factor authentication.
     * This URI follows the standard TOTP format and includes the service name, user identity, and secret key.
     * The URI is compatible with common authenticator apps like Google Authenticator or Authy.
     * @memberof _Create
     * @public
     * @since 2.0.0
     * @throws {Error} When attempting to set an invalid URI format
     * 
     * @example
     * const uri = 'otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP';
     */
    @ApiProperty({
        description: 'The URI for the two-factor authentication, typically used for QR code generation',
        type: () => String,
        example: 'otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP'
    })
    uri: string;

    /**
     * The secret key used for two-factor authentication.
     * @type {string}
     * @description A string containing the secret key that is used in the two-factor authentication process.
     * This key is used to generate and validate 2FA codes. It is typically a base32 encoded string
     * that should be stored securely and shared only with the user during the initial setup.
     * @memberof _Create
     * @public
     * @since 2.0.0
     * @throws {Error} When attempting to set an invalid secret format
     * 
     * @example
     * const secret = 'JBSWY3DPEHPK3PXP';
     */
    @ApiProperty({
        description: 'The secret key used for two-factor authentication',
        type: () => String,
        example: 'JBSWY3DPEHPK3PXP'
    })
    secret: string;

    /**
     * A message providing additional information about the creation process.
     * @type {string}
     * @description A string containing any additional details or feedback about the two-factor authentication creation process.
     * Used for user feedback and logging purposes. This message can indicate success, provide instructions,
     * or contain other relevant information about the 2FA setup process.
     * @memberof _Create
     * @public
     * @since 2.0.0
     * @throws {Error} When attempting to set an invalid message format
     * 
     * @example
     * const message = 'Two-factor authentication created successfully';
     */
    @ApiProperty({
        description: 'A message providing additional information about the creation process',
        type: () => String,
        example: 'Two-factor authentication created successfully'
    })
    message: string;

    /**
     * Creates an instance of the Create response model for two-factor authentication.
     * @constructor
     * @param {string} factorSid - The unique identifier for the created factor, must be a non-empty string starting with 'YF'
     * @param {string} identity - The identity associated with the two-factor authentication, typically an email or username
     * @param {string} uri - The URI for the two-factor authentication QR code, must follow TOTP format
     * @param {string} secret - The secret key used for two-factor authentication, must be a valid base32 string
     * @param {string} message - A message providing additional information about the creation process
     * @throws {Error} Will throw an error if any required parameter is invalid or missing
     * @memberof _Create
     * @public
     * @since 2.0.0
     * 
     * @example
     * try {
     *   const createResponse = new _Create(
     *     'YF1234567890abcdef1234567890abcdef',
     *     'user@example.com',
     *     'otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP',
     *     'JBSWY3DPEHPK3PXP',
     *     'Two-factor authentication created successfully'
     *   );
     * } catch (error) {
     *   console.error('Failed to create 2FA response:', error.message);
     * }
     */
    constructor(factorSid: string, identity: string, uri: string, secret: string, message: string) {
        // Validate factorSid is a non-empty string
        if (typeof factorSid !== 'string' || factorSid.trim() === '') {
            throw new Error('factorSid must be a non-empty string');
        }
        
        // Validate identity is a non-empty string
        if (typeof identity !== 'string' || identity.trim() === '') {
            throw new Error('identity must be a non-empty string');
        }
        
        // Validate uri is a non-empty string
        if (typeof uri !== 'string' || uri.trim() === '') {
            throw new Error('uri must be a non-empty string');
        }
        
        // Validate secret is a non-empty string
        if (typeof secret !== 'string' || secret.trim() === '') {
            throw new Error('secret must be a non-empty string');
        }
        
        // Validate message is a string
        if (typeof message !== 'string') {
            throw new Error('message must be a string');
        }

        this.factorSid = factorSid;
        this.identity = identity;
        this.uri = uri;
        this.secret = secret;
        this.message = message;
    }
}