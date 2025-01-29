/**
 * Interface representing the response structure for a Web2 logout operation
 * @interface _ILogout
 * @export _ILogout
 * @namespace IAuth._ICredentials._IWeb2._IResponse._ILogout
 * @description Represents the response structure for a Web2 logout operation, including success status and message
 * @property {boolean} logout - Indicates whether the logout operation was successful
 * @property {string} message - A descriptive message about the logout operation result
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const logoutResponse: _ILogout = {
 *   logout: true,
 *   message: "User successfully logged out"
 * };
 * ```
 */
export interface _ILogout {
    /**
     * Indicates whether the logout operation was successful
     * @description Boolean flag indicating if the user was successfully logged out
     * @property {boolean} logout - Logout success indicator
     * @type {boolean}
     * @memberof _ILogout
     * @since 2.0.0
     * @public
     * @default false
     * @example
     * ```typescript
     * logout: true
     * ```
     */
    logout: boolean

    /**
     * A descriptive message about the logout operation result
     * @description Human-readable message describing the outcome of the logout operation
     * @property {string} message - Result message
     * @type {string}
     * @memberof _ILogout
     * @since 2.0.0
     * @public
     * @default ""
     * @example
     * ```typescript
     * message: "User successfully logged out"
     * ```
     */
    message: string
}