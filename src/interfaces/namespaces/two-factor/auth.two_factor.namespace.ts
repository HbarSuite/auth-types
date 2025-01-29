import { _IAuth } from './interfaces/auth.two_factor.interface'
import { _ISecurity } from './interfaces/auth.two_factor.security.interface'
import { _IResponse } from './namespaces/response/auth.two_factor.response.namespace'

/**
 * Two Factor Interface Namespace
 * @export _ITwoFactor
 * @namespace IAuth._ITwoFactor
 * @description This namespace contains interfaces, types, and enums related to two-factor authentication.
 * @property {_IStatus} IStatus - Enum representing the status of two-factor authentication.
 * @property {_IResponse} IResponse - Interface representing the response from two-factor authentication.
 * @property {_ISecurity} ISecurity - Interface representing the security settings for two-factor authentication.
 * @property {_IAuth} IAuth - Interface representing the authentication settings for two-factor authentication.
 * @since 2.0.0
 * @category Authentication
 * @module TwoFactor
 * @public
 * @example
 * ```typescript
 * // Using the two-factor status enum
 * const status: IAuth.ITwoFactor.IStatus = IAuth.ITwoFactor.IStatus.verified;
 * 
 * // Using the security interface
 * const security: IAuth.ITwoFactor.ISecurity = {
 *   code_2fa: 123456
 * };
 * ```
 */
export namespace _ITwoFactor {
    /**
     * Two Factor Status Enum
     * @enum {string}
     * @readonly
     * @description Enum representing the status of two-factor authentication.
     * @since 2.0.0
     * @category Authentication
     * @public
     * @example
     * ```typescript
     * // Check if 2FA is verified
     * if (status === IStatus.VERIFIED) {
     *   // Handle verified state
     * }
     * ```
     */
    export enum IStatus {
        /**
         * User has completed and verified two-factor authentication
         * @type {string}
         * @description Indicates that 2FA is fully set up and verified
         * @since 2.0.0
         * @example
         * ```typescript
         * if (user.twoFactorStatus === IStatus.VERIFIED) {
         *   // Allow access to protected resources
         * }
         * ```
         */
        VERIFIED = 'verified',

        /**
         * User has set up two-factor authentication but not yet verified
         * @type {string}
         * @description Indicates that 2FA is set up but pending verification
         * @since 2.0.0
         * @example
         * ```typescript
         * if (user.twoFactorStatus === IStatus.UNVERIFIED) {
         *   // Prompt user to complete verification
         * }
         * ```
         */
        UNVERIFIED = 'unverified',

        /**
         * Two-factor authentication is not set up or has been disabled
         * @type {string}
         * @description Indicates that 2FA is not active
         * @since 2.0.0
         * @example
         * ```typescript
         * if (user.twoFactorStatus === IStatus.DISABLED) {
         *   // Prompt user to enable 2FA
         * }
         * ```
         */
        DISABLED = 'disabled'
    }

    /**
     * Re-export of _IResponse namespace
     * @type {_IResponse}
     * @description Contains interfaces for various Two-Factor Authentication responses
     * @since 2.0.0
     * @see _IResponse
     * @example
     * ```typescript
     * // Handle 2FA verification response
     * const response: IResponse.IVerify = {
     *   success: true,
     *   message: 'Two-factor authentication verified successfully'
     * };
     * ```
     */
    export import IResponse = _IResponse

    /**
     * Type alias for _ISecurity interface
     * @type {_ISecurity}
     * @description Interface for two-factor authentication security settings
     * @since 2.0.0
     * @see _ISecurity
     * @example
     * ```typescript
     * // Configure 2FA security settings
     * const security: ISecurity = {
     *   code_2fa: 123456,
     *   backup_codes: ['code1', 'code2'],
     *   recovery_email: 'user@example.com'
     * };
     * ```
     */
    export type ISecurity = _ISecurity

    /**
     * Type alias for _IAuth interface
     * @type {_IAuth}
     * @description Interface for two-factor authentication settings
     * @since 2.0.0
     * @see _IAuth
     * @example
     * ```typescript
     * // Configure 2FA authentication settings
     * const auth: IAuth = {
     *   enabled: true,
     *   method: '2fa_app',
     *   secret: 'ABCDEF123456',
     *   verified: true
     * };
     * ```
     */
    export type IAuth = _IAuth
}