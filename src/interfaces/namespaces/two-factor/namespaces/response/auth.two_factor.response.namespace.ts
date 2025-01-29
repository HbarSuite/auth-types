import { _ICreate } from './interfaces/auth.two_factor.response.create.interface'
import { _IDelete } from './interfaces/auth.two_factor.response.delete.interface'
import { _IVerify } from './interfaces/auth.two_factor.response.verify.interface'

/**
 * Namespace for Two-Factor Authentication Response Interfaces
 * @export _IResponse
 * @namespace IAuth._ITwoFactor._IResponse
 * @description Contains interfaces for various Two-Factor Authentication responses,
 * including creation, deletion, and verification of two-factor authentication factors.
 * This namespace provides a centralized location for all response-related interfaces
 * used in the two-factor authentication flow.
 * 
 * Key features:
 * - Creation response interface for new 2FA factor setup
 * - Deletion response interface for removing 2FA factors
 * - Verification response interface for validating 2FA codes
 * 
 * @property {ICreate} ICreate - Interface for the response of creating a new two-factor authentication factor
 * @property {IDelete} IDelete - Interface for the response of deleting a two-factor authentication factor
 * @property {IVerify} IVerify - Interface for the response of verifying a two-factor authentication code
 * @since 2.0.0
 * @category Authentication
 * @module TwoFactor
 * @public
 * @see {@link _ICreate} For details about creation response structure
 * @see {@link _IDelete} For details about deletion response structure  
 * @see {@link _IVerify} For details about verification response structure
 * @example
 * ```typescript
 * // Example usage of response types
 * const createResponse: IAuth.ITwoFactor.IResponse.ICreate = {
 *   factorSid: "YF1234567890abcdef",
 *   identity: "user@example.com",
 *   uri: "otpauth://totp/Example:user@example.com?secret=ABCDEF...",
 *   secret: "ABCDEF123456",
 *   message: "Two-factor authentication factor created successfully"
 * };
 * 
 * const deleteResponse: IAuth.ITwoFactor.IResponse.IDelete = {
 *   success: true,
 *   message: "Two-factor authentication factor deleted successfully"
 * };
 * 
 * const verifyResponse: IAuth.ITwoFactor.IResponse.IVerify = {
 *   success: true,
 *   message: "Two-factor authentication code verified successfully"
 * };
 * ```
 */
export namespace _IResponse {
    /**
     * Interface for the response of creating a new two-factor authentication factor
     * @type {_ICreate}
     * @description 
     * Defines the structure of the response when creating a new 2FA factor.
     * Contains the following key information:
     * - Factor SID for unique identification
     * - Associated user identity
     * - URI for QR code generation
     * - Secret key for authentication
     * - Status message
     * @since 2.0.0
     * @see {@link _ICreate} For complete interface details
     * @memberof _IResponse
     * @public
     */
    export type ICreate = _ICreate

    /**
     * Interface for the response of deleting a two-factor authentication factor
     * @type {_IDelete}
     * @description 
     * Defines the structure of the response when deleting a 2FA factor.
     * Contains the following key information:
     * - Success status of deletion operation
     * - Descriptive message about the deletion result
     * @since 2.0.0
     * @see {@link _IDelete} For complete interface details
     * @memberof _IResponse
     * @public
     */
    export type IDelete = _IDelete

    /**
     * Interface for the response of verifying a two-factor authentication code
     * @type {_IVerify}
     * @description 
     * Defines the structure of the response when verifying a 2FA code.
     * Contains the following key information:
     * - Success status of verification attempt
     * - Descriptive message about the verification result
     * @since 2.0.0
     * @see {@link _IVerify} For complete interface details
     * @memberof _IResponse
     * @public
     */
    export type IVerify = _IVerify
}