import { _IEntity } from './interfaces/auth.credentials.user.entity.interface'
import { _ITags } from './interfaces/auth.credentials.user.tags.interface'

/**
 * User Credentials Interface Namespace
 * @export _IUser
 * @namespace IAuth._ICredentials._IUser
 * @description
 * This namespace defines the core structures for user authentication credentials
 * and related metadata. It provides interfaces for managing user entities,
 * authentication types, and metadata tagging.
 * 
 * Core components:
 * - User entity definitions
 * - Authentication type management
 * - Metadata tagging system
 * - User profile structures
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Credentials
 * 
 * @example
 * ```typescript
 * // Create a complete user entity
 * const user: _IUser.IEntity = {
 *   id: "user_123",
 *   username: "john_doe",
 *   email: "john@example.com",
 *   type: _IUser.IType.WEB2,
 *   created_at: new Date(),
 *   updated_at: new Date(),
 *   tags: [
 *     { key: "role", value: "admin" },
 *     { key: "subscription", value: "premium" }
 *   ],
 *   profile: {
 *     firstName: "John",
 *     lastName: "Doe",
 *     avatar: "https://example.com/avatar.jpg"
 *   }
 * };
 * 
 * // Define user authentication type
 * const authType: _IUser.IType = _IUser.IType.WEB2;
 * 
 * // Add user metadata tags
 * const userTags: _IUser.ITags[] = [
 *   { key: "access_level", value: "premium" },
 *   { key: "verified", value: "true" }
 * ];
 * ```
 */
export namespace _IUser {
    /**
     * User Authentication Type Enumeration
     * @enum {string}
     * @description
     * Defines the available authentication methods for user accounts.
     * Supports both traditional Web2 and blockchain-based Web3 authentication.
     * 
     * @property {string} WEB2 - Traditional username/password authentication
     * @property {string} WEB3 - Blockchain wallet-based authentication
     * 
     * @example
     * ```typescript
     * // Set user authentication type
     * const userType: IType = IType.WEB2;
     * 
     * // Check authentication method
     * if (user.type === IType.WEB3) {
     *   // Handle Web3 authentication
     * }
     * ```
     */
    export enum IType {
        /** Traditional username/password authentication */
        WEB2 = 'web2',
        /** Blockchain wallet-based authentication */
        WEB3 = 'web3'
    }

    /**
     * User Metadata Tags Interface
     * @type {_ITags}
     * @description
     * Defines the structure for user metadata tags, allowing flexible
     * attribute storage and user categorization.
     * 
     * Common use cases:
     * - Role assignments
     * - Feature flags
     * - Subscription status
     * - User preferences
     * 
     * @property {string} key - The metadata key identifier
     * @property {string} value - The metadata value
     * 
     * @example
     * ```typescript
     * const userTags: ITags[] = [
     *   { key: "role", value: "admin" },
     *   { key: "subscription", value: "premium" },
     *   { key: "preferences", value: "dark_mode" }
     * ];
     * ```
     */
    export type ITags = _ITags

    /**
     * User Entity Interface
     * @type {_IEntity}
     * @description
     * Defines the complete structure for user entities, including core
     * properties, authentication details, and metadata.
     * 
     * Core properties:
     * - User identification
     * - Authentication type
     * - Timestamps
     * - Metadata tags
     * - Profile information
     * 
     * @example
     * ```typescript
     * const userEntity: IEntity = {
     *   id: "user_123",
     *   username: "jane_doe",
     *   email: "jane@example.com",
     *   type: IType.WEB2,
     *   created_at: new Date(),
     *   updated_at: new Date(),
     *   tags: [
     *     { key: "role", value: "user" }
     *   ]
     * };
     * ```
     */
    export type IEntity = _IEntity
}