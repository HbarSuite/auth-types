import { _IUser } from '../auth.credentials.user.namespace';

/**
 * User Entity Interface
 * @export _IEntity
 * @interface _IEntity
 * @namespace IAuth._ICredentials._IUser._IEntity
 * @description 
 * Represents a user entity with authentication credentials and associated metadata.
 * This interface defines the core structure for user accounts in the authentication system,
 * including identifiers, timestamps, authentication type, and metadata tags.
 * 
 * Key components:
 * - Unique identifiers (username, email)
 * - Timestamps for tracking
 * - Authentication type classification
 * - Metadata tagging system
 * 
 * @since 2.0.0
 * @category User
 * @public
 * 
 * @example
 * ```typescript
 * const userEntity: _IEntity = {
 *   username: "john_doe",
 *   email: "john@example.com", 
 *   created_at: 1625097600000,
 *   updated_at: 1625184000000,
 *   type: _IUser.IType.WEB2,
 *   tags: [{ key: "role", value: "user" }]
 * };
 * ```
 */
export interface _IEntity {
    /**
     * The unique username identifier for the user
     * @description
     * A unique string that identifies the user in the system. Used as the primary
     * way to reference and look up user accounts.
     * 
     * Requirements:
     * - Must be unique across all users
     * - Case sensitive
     * - No special characters except underscore
     * - Length between 3-30 characters
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * // Valid username
     * username: "john_doe"
     * 
     * // Another valid format
     * username: "user123"
     * ```
     */
    username: string;

    /**
     * The email address associated with the user account
     * @description
     * The user's email address used for communication, account recovery, and
     * verification purposes. Must be a valid email format and unique in the system.
     * 
     * Usage:
     * - Account recovery
     * - System notifications
     * - User verification
     * - Communication channel
     * 
     * @type {string}
     * 
     * @example
     * ```typescript
     * // Standard email format
     * email: "john@example.com"
     * 
     * // Corporate email
     * email: "john.doe@company.org"
     * ```
     */
    email: string;

    /**
     * The timestamp when the user account was created
     * @description
     * Unix timestamp in milliseconds representing the exact moment when the user
     * account was created in the system. Used for account age tracking and analytics.
     * 
     * Format:
     * - Unix timestamp (milliseconds)
     * - UTC timezone
     * - Integer value
     * 
     * @type {number}
     * 
     * @example
     * ```typescript
     * // July 1, 2021 12:00:00 UTC
     * created_at: 1625097600000
     * 
     * // Current timestamp
     * created_at: Date.now()
     * ```
     */
    created_at: number;

    /**
     * The timestamp when the user account was last updated
     * @description
     * Unix timestamp in milliseconds marking the most recent modification to the
     * user account. Updates on any change to user data or settings.
     * 
     * Updates on:
     * - Profile changes
     * - Settings modifications
     * - Security updates
     * - Metadata changes
     * 
     * @type {number}
     * 
     * @example
     * ```typescript
     * // July 2, 2021 12:00:00 UTC
     * updated_at: 1625184000000
     * 
     * // Current update
     * updated_at: Date.now()
     * ```
     */
    updated_at: number;

    /**
     * The type of user authentication
     * @description
     * Specifies the authentication method used by the user account. Determines
     * the authentication flow and available features for the user.
     * 
     * Types:
     * - WEB2: Traditional username/password
     * - WEB3: Blockchain wallet-based
     * 
     * Implications:
     * - Authentication flow
     * - Available features
     * - Security measures
     * - Integration points
     * 
     * @type {_IUser.IType}
     * 
     * @example
     * ```typescript
     * // Traditional auth
     * type: _IUser.IType.WEB2
     * 
     * // Blockchain auth
     * type: _IUser.IType.WEB3
     * ```
     */
    type: _IUser.IType;

    /**
     * An array of tags associated with the user account
     * @description
     * Collection of key-value pairs storing additional user metadata and attributes.
     * Used for user categorization, feature flags, and custom attributes.
     * 
     * Common uses:
     * - Role assignments
     * - Feature flags
     * - User preferences
     * - Custom attributes
     * 
     * Structure:
     * - key: Identifier string
     * - value: Associated data
     * 
     * @type {Array<_IUser.ITags>}
     * 
     * @example
     * ```typescript
     * // Role tag
     * tags: [{ key: "role", value: "admin" }]
     * 
     * // Multiple tags
     * tags: [
     *   { key: "role", value: "user" },
     *   { key: "plan", value: "premium" },
     *   { key: "region", value: "eu-west" }
     * ]
     * ```
     */
    tags: Array<_IUser.ITags>;
}