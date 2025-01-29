import { IAuth } from '../../../../interfaces/auth.namespace'
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { _TwoFactor } from '../auth.two_factor.namespace';

/**
 * Class representing the Two-Factor Authentication state and details.
 * @class _Auth
 * @export _Auth
 * @namespace Auth.TwoFactor
 * @implements {IAuth.ITwoFactor.IAuth}
 * @description Defines the structure for Two-Factor Authentication information, including status,
 * identifiers, and setup details. This class handles the state management and validation of 2FA data.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.TwoFactor
 * @see {@link IAuth.ITwoFactor.IAuth} For the interface this class implements
 * @see {@link IAuth.ITwoFactor.IStatus} For valid status values
 * 
 * @property {IAuth.ITwoFactor.IStatus} status - Current status of the 2FA process
 * @property {string} factorSid - Unique identifier for the 2FA factor
 * @property {string} identity - User identity associated with 2FA
 * @property {string} qr_code - QR code for 2FA setup
 * 
 * @example
 * const twoFactorAuth = new _Auth(
 *   IAuth.ITwoFactor.IStatus.PENDING,
 *   'YF1234567890abcdef1234567890abcdef',
 *   'user@example.com',
 *   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...'
 * );
 */
export class _Auth implements IAuth.ITwoFactor.IAuth {
    /**
     * The current status of the Two-Factor Authentication.
     * @type {IAuth.ITwoFactor.IStatus}
     * @description Represents the current state of the Two-Factor Authentication process.
     * Can be one of several predefined statuses:
     * - PENDING: Initial setup state
     * - VERIFIED: Successfully configured and verified
     * - DISABLED: 2FA is currently disabled
     * - FAILED: Setup or verification attempt failed
     * @memberof _Auth
     * @public
     * @since 2.0.0
     * @throws {Error} If an invalid status is assigned
     * 
     * @example
     * const status = IAuth.ITwoFactor.IStatus.PENDING;
     */
    @ApiProperty({ 
        type: () => String, 
        enum: IAuth.ITwoFactor.IStatus,
        description: 'The current status of the Two-Factor Authentication',
        example: 'PENDING'
    })
    status: IAuth.ITwoFactor.IStatus

    /**
     * Unique identifier for the Two-Factor Authentication factor.
     * @type {string}
     * @description A string that uniquely identifies the Two-Factor Authentication factor.
     * This is typically provided by the authentication service provider and follows their
     * specific format requirements. Used for tracking and managing the 2FA setup.
     * @memberof _Auth
     * @public
     * @since 2.0.0
     * @throws {Error} If assigned an empty string or non-string value
     * 
     * @example
     * const factorSid = 'YF1234567890abcdef1234567890abcdef';
     */
    @ApiProperty({ 
        type: () => String, 
        description: 'Unique identifier for the Two-Factor Authentication factor',
        example: 'YF1234567890abcdef1234567890abcdef'
    })
    factorSid: string

    /**
     * The identity associated with this Two-Factor Authentication.
     * @type {string}
     * @description A string representing the user or entity for which the Two-Factor Authentication is set up.
     * Typically an email address or username. This identity is used to link the 2FA setup to a specific user
     * and for communication purposes.
     * @memberof _Auth
     * @public
     * @since 2.0.0
     * @throws {Error} If assigned an empty string or non-string value
     * 
     * @example
     * const identity = 'user@example.com';
     */
    @ApiProperty({ 
        type: () => String, 
        description: 'The identity associated with this Two-Factor Authentication',
        example: 'user@example.com'
    })
    identity: string

    /**
     * The QR code for setting up Two-Factor Authentication.
     * @type {string}
     * @description A string representation of the QR code used for setting up Two-Factor Authentication.
     * Usually provided as a base64 encoded image string. This QR code can be scanned by authenticator
     * apps to establish the 2FA connection. The string typically starts with 'data:image/png;base64,'
     * followed by the encoded image data.
     * @memberof _Auth
     * @public
     * @since 2.0.0
     * @throws {Error} If assigned an empty string or non-string value
     * 
     * @example
     * const qrCode = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...';
     */
    @ApiProperty({ 
        type: () => String, 
        description: 'The QR code for setting up Two-Factor Authentication',
        example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...'
    })
    qr_code: string

    /**
     * Creates an instance of _Auth.
     * @constructor
     * @param {IAuth.ITwoFactor.IStatus} status - The current status of the Two-Factor Authentication
     * @param {string} factorSid - Unique identifier for the Two-Factor Authentication factor
     * @param {string} identity - The identity associated with this Two-Factor Authentication
     * @param {string} qr_code - The QR code for setting up Two-Factor Authentication
     * @throws {Error} Will throw an error if:
     * - status is not a valid IAuth.ITwoFactor.IStatus object
     * - factorSid is not a non-empty string
     * - identity is not a non-empty string
     * - qr_code is not a non-empty string
     * @memberof _Auth
     * @public
     * @since 2.0.0
     * 
     * @example
     * try {
     *   const twoFactorAuth = new _Auth(
     *     IAuth.ITwoFactor.IStatus.PENDING,
     *     'YF1234567890abcdef1234567890abcdef',
     *     'user@example.com',
     *     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...'
     *   );
     * } catch (error) {
     *   console.error('Failed to create 2FA instance:', error.message);
     * }
     */
    constructor(status: IAuth.ITwoFactor.IStatus, factorSid: string, identity: string, qr_code: string) {
        // Validate status is a valid IAuth.ITwoFactor.IStatus object
        if (typeof status !== 'object' || status === null) {
            throw new Error('status must be a valid IAuth.ITwoFactor.IStatus object');
        }

        // Validate factorSid is a non-empty string
        if (typeof factorSid !== 'string' || factorSid.trim() === '') {
            throw new Error('factorSid must be a non-empty string');
        }

        // Validate identity is a non-empty string
        if (typeof identity !== 'string' || identity.trim() === '') {
            throw new Error('identity must be a non-empty string');
        }

        // Validate qr_code is a non-empty string
        if (typeof qr_code !== 'string' || qr_code.trim() === '') {
            throw new Error('qr_code must be a non-empty string');
        }

        this.status = status;
        this.factorSid = factorSid;
        this.identity = identity;
        this.qr_code = qr_code;
    }
}