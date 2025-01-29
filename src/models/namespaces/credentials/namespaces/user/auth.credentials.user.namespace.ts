import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/auth.credentials.user.models.entity.model'
import { _Tags } from './models/auth.credentials.user.models.tags.model'

/**
 * User Namespace for Authentication Credentials
 * @namespace Auth.Credentials.User
 * @description Namespace containing user-related types and interfaces in the authentication system.
 * Provides classes for managing user entities and associated metadata tags.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials
 * @public
 * 
 * @property {Tags} Tags - Class for handling user metadata tags
 * @property {Entity} Entity - Class representing a user entity
 * 
 * @example
 * // Create a new user entity
 * const user = new _User.Entity({
 *   username: "john_doe",
 *   email: "john@example.com",
 *   created_at: Date.now(),
 *   updated_at: Date.now(),
 *   type: "web2",
 *   tags: [{ key: "role", value: "user" }]
 * });
 */
export namespace _User {
    /**
     * User Tags Class
     * @class Tags
     * @extends {_Tags}
     * @description Represents metadata tags that can be associated with a user.
     * Each tag is a key-value pair that can store additional user information
     * like roles, permissions, preferences, etc.
     * @public
     * 
     * @see _Tags
     * @see Entity
     * 
     * @remarks
     * Tags are immutable once created and should be managed through the Entity class methods
     * 
     * @example
     * const roleTag = new Tags({
     *   key: "role",
     *   value: "admin"
     * });
     */
    @ApiSchema({
        name: 'Auth.Credentials.User.Tags'
    })
    export class Tags extends _Tags {}

    /**
     * User Entity Class
     * @class Entity
     * @extends {_Entity}
     * @description Represents a user entity in the authentication system.
     * Contains core user information like username, email, timestamps,
     * authentication type, and associated metadata tags.
     * @public
     * 
     * @see _Entity
     * @see Tags
     * 
     * @remarks
     * - Entity objects are immutable after creation
     * - All timestamps are stored in milliseconds since epoch
     * - Supported authentication types are "web2" and "web3"
     * 
     * @example
     * const userEntity = new Entity({
     *   username: "jane_doe",
     *   email: "jane@example.com", 
     *   created_at: 1625097600000,
     *   updated_at: 1625184000000,
     *   type: "web3",
     *   tags: [
     *     { key: "wallet", value: "0x123..." },
     *     { key: "status", value: "active" }
     *   ]
     * });
     */
    @ApiSchema({
        name: 'Auth.Credentials.User.Entity'
    })
    export class Entity extends _Entity {}
}