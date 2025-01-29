/**
 * Web3 Logout Response Interface
 * @interface _ILogout
 * @export _ILogout
 * @namespace IAuth._ICredentials._IWeb3._IResponse._ILogout
 * @description Defines the structure of the logout response after a Web3 logout attempt.
 * Contains status and message information about the logout operation.
 * @property {boolean} logout - Indicates if the logout was successful
 * @property {string} message - Status message about the logout operation
 * @since 2.0.0
 * @public
 * @group Authentication
 * @category Response
 * @throws {Error} When logout operation fails
 * @remarks
 * The logout response provides feedback about the success or failure of the Web3 logout operation.
 * A successful logout will have logout=true and an appropriate success message.
 * Failed logouts will have logout=false and an error message explaining the failure.
 * @example
 * ```typescript
 * // Successful logout
 * const successResponse: _ILogout = {
 *   logout: true,
 *   message: "Successfully logged out"
 * };
 * 
 * // Failed logout
 * const failedResponse: _ILogout = {
 *   logout: false,
 *   message: "Logout failed: Invalid session"
 * };
 * ```
 */
export interface _ILogout {
    /**
     * Logout success indicator
     * @description Boolean flag indicating whether the logout operation was successful
     * @property {boolean} logout - True if logout succeeded, false otherwise
     * @type {boolean}
     * @memberof _ILogout
     * @since 2.0.0
     * @category Status
     * @throws {TypeError} When assigned non-boolean value
     * @remarks
     * This flag should be checked first to determine if the logout succeeded
     * before proceeding with any post-logout operations
     * @example
     * ```typescript
     * // Successful logout
     * logout: true
     * 
     * // Failed logout
     * logout: false
     * ```
     */
    logout: boolean

    /**
     * Logout status message
     * @description Descriptive message about the logout operation result
     * @property {string} message - Status or error message
     * @type {string}
     * @memberof _ILogout
     * @since 2.0.0
     * @category Status
     * @throws {TypeError} When assigned non-string value
     * @remarks
     * Provides human-readable feedback about the logout operation.
     * Success messages indicate successful logout.
     * Error messages provide details about what went wrong.
     * @example
     * ```typescript
     * // Success message
     * message: "Successfully logged out"
     * 
     * // Error message
     * message: "Logout failed: Session expired"
     * ```
     */
    message: string
}