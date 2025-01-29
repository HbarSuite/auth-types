import { _IUser } from '../../../../user/auth.credentials.user.namespace'
import { _IDto } from '../auth.credentials.web2.dto.namespace'

/**
 * Signup Interface for Web2 Authentication
 * @export _ISignup
 * @interface _ISignup
 * @namespace IAuth._ICredentials._IWeb2._IDto._ISignup
 * @description 
 * Represents the signup data for Web2 authentication, extending the login interface with additional user metadata.
 * This interface adds user tags to the base login credentials to support richer user profiles during account creation.
 * 
 * Key features:
 * - Inherits username, email and password from login interface
 * - Adds extensible metadata through tags
 * - Supports role-based access control via tags
 * - Enables user status tracking
 * 
 * @extends {IAuth.ICredentials.IWeb2._IDto.ILogin}
 * @since 2.0.0
 * @category Authentication
 * @public
 * 
 * @property {string} username - The unique identifier for the user's account
 * @property {string} email - The email address associated with the user's account
 * @property {string} password - The secret password for authentication (should be securely hashed)
 * @property {Array<_IUser.ITags>} tags - An array of tags associated with the user for metadata
 * 
 * @see {@link IAuth.ICredentials.IWeb2._IDto.ILogin} Base login interface
 * @see {@link IAuth.ICredentials.IUser.ITags} User tags interface
 * 
 * @example
 * ```typescript
 * const signupData: _ISignup = {
 *   username: "john_doe",
 *   email: "john@example.com",
 *   password: "securePassword123",
 *   tags: [
 *     { key: "role", value: "user" }, 
 *     { key: "status", value: "active" }
 *   ]
 * };
 * ```
 */
export interface _ISignup extends _IDto.ILogin {
    /**
     * An array of tags associated with the user account
     * @description 
     * Collection of key-value pairs storing additional user metadata during signup.
     * Tags provide a flexible way to attach arbitrary metadata to user accounts.
     * 
     * Common use cases:
     * - Role assignments (admin, user, etc)
     * - Account status tracking
     * - Feature flags
     * - User preferences
     * 
     * @property {Array<_IUser.ITags>} tags
     * @type {Array<_IUser.ITags>}
     * @since 2.0.0
     * @category Metadata
     * @public
     * 
     * @see {@link IAuth.ICredentials.IUser.ITags} Tag structure definition
     * 
     * @example
     * ```typescript
     * tags: [
     *   { key: "role", value: "user" },
     *   { key: "status", value: "active" },
     *   { key: "preferences", value: "dark-mode" }
     * ]
     * ```
     */
    tags: Array<_IUser.ITags>
}