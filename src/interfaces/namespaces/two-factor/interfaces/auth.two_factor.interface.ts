import { IAuth } from '../../../auth.namespace'

/**
 * Interface representing the Two-Factor Authentication state and details
 * @export _IAuth
 * @interface _IAuth
 * @namespace IAuth.ITwoFactor._IAuth
 * @description 
 * Defines the structure for Two-Factor Authentication information and state management.
 * This interface provides all necessary properties to track and manage 2FA setup and verification.
 * 
 * Key features:
 * - Tracks 2FA verification status
 * - Stores unique factor identifiers
 * - Associates with user identity
 * - Manages QR code for initial setup
 * 
 * @property {IAuth.ITwoFactor.IStatus} status - The current status of Two-Factor Authentication
 * @property {string} factorSid - Unique identifier for the Two-Factor Authentication factor
 * @property {string} identity - The identity associated with this Two-Factor Authentication
 * @property {string} qr_code - The QR code for setting up Two-Factor Authentication
 * 
 * @since 2.0.0
 * @category Authentication
 * @public
 * 
 * @example
 * ```typescript
 * const twoFactorAuth: _IAuth = {
 *   status: "pending",
 *   factorSid: "YF1234567890abcdef",
 *   identity: "user@example.com",
 *   qr_code: "data:image/png;base64,..."
 * };
 * ```
 */
export interface _IAuth {
    /**
     * The current status of the Two-Factor Authentication
     * @description 
     * Represents the current state of the Two-Factor Authentication process.
     * Can be one of three states:
     * - pending: Initial state when 2FA is being set up
     * - verified: 2FA has been successfully verified
     * - unverified: 2FA setup exists but hasn't been verified
     * 
     * @type {IAuth.ITwoFactor.IStatus}
     * @memberof _IAuth
     * @since 2.0.0
     * @public
     * @required
     * 
     * @example
     * ```typescript
     * status: "pending" // During setup
     * status: "verified" // After successful verification
     * status: "unverified" // When setup but not verified
     * ```
     */
    status: IAuth.ITwoFactor.IStatus

    /**
     * Unique identifier for the Two-Factor Authentication factor
     * @description 
     * A string that uniquely identifies the Two-Factor Authentication factor.
     * This ID is typically provided by the 2FA service provider and used to
     * reference this specific 2FA setup in subsequent operations.
     * 
     * @type {string}
     * @memberof _IAuth
     * @since 2.0.0
     * @public
     * @required
     * 
     * @example
     * ```typescript
     * factorSid: "YF1234567890abcdef"
     * ```
     */
    factorSid: string

    /**
     * The identity associated with this Two-Factor Authentication
     * @description 
     * A string representing the user or entity for which the Two-Factor Authentication is set up.
     * This is typically an email address or username that uniquely identifies the user
     * in the authentication system.
     * 
     * @type {string}
     * @memberof _IAuth
     * @since 2.0.0
     * @public
     * @required
     * 
     * @example
     * ```typescript
     * identity: "user@example.com"
     * ```
     */
    identity: string

    /**
     * The QR code for setting up Two-Factor Authentication
     * @description 
     * A string representation of the QR code used for setting up Two-Factor Authentication.
     * This is typically a base64 encoded image that can be displayed to the user
     * for scanning with their authenticator app.
     * 
     * @type {string}
     * @memberof _IAuth
     * @since 2.0.0
     * @public
     * @required
     * 
     * @example
     * ```typescript
     * qr_code: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA..."
     * ```
     */
    qr_code: string
}