/**
 * Interface representing the response structure for verifying a two-factor authentication code.
 * @interface _IVerify
 * @export _IVerify
 * @namespace IAuth._ITwoFactor._IResponse._IVerify
 * @description 
 * Defines the structure of the response when a two-factor authentication code is verified.
 * This interface provides properties to indicate the verification status and additional details.
 * 
 * Key features:
 * - Tracks verification success/failure
 * - Provides descriptive message about the outcome
 * - Used for 2FA code validation responses
 * 
 * @property {boolean} success - Indicates whether the verification was successful
 * @property {string} message - A message providing additional information about the verification process
 * @since 2.0.0
 * @category Authentication
 * @module TwoFactor
 * @public
 * @see {@link IAuth.ITwoFactor._ISecurity} For the security code input structure
 * @see {@link IAuth.ITwoFactor._IAuth} For complete 2FA state management
 * 
 * @example
 * ```typescript
 * const verifyResponse: _IVerify = {
 *   success: true,
 *   message: "Two-factor authentication code verified successfully"
 * };
 * ```
 */
export interface _IVerify {
    /**
     * Indicates whether the verification was successful.
     * @description 
     * A boolean value that represents the success status of the verification process.
     * True indicates successful verification, false indicates verification failure.
     * Used to determine if the provided 2FA code was valid.
     * 
     * @property {boolean} success
     * @type {boolean}
     * @required
     * @since 2.0.0
     * @memberof _IVerify
     * @example true
     * @public
     */
    success: boolean;

    /**
     * A message providing additional information about the verification process.
     * @description 
     * A string containing details or explanations about the verification outcome.
     * Provides human-readable feedback about the verification result.
     * Can include success confirmations, error details, or guidance for users.
     * 
     * @property {string} message
     * @type {string}
     * @required
     * @since 2.0.0
     * @memberof _IVerify
     * @example "Two-factor authentication code verified successfully"
     * @public
     */
    message: string;
}