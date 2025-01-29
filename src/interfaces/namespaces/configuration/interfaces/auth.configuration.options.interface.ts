import { JwtModuleOptions } from "@nestjs/jwt"
import { Config } from "cache-manager"
import { CookieOptions } from "express"
import { RedisClientOptions } from "redis"
import { IHashgraph } from "@hsuite/hashgraph-types";
import { _IConfiguration } from '../auth.configuration.namespace'

/**
 * Options Interface for Authentication Configuration
 * @export _IOptions
 * @interface _IOptions
 * @namespace IAuth._IConfiguration._IOptions
 * @description Defines the structure for authentication configuration options including Redis, JWT, cookies, Hashgraph and Passport settings
 * @since 2.0.0
 * @example
 * ```typescript
 * const authOptions: _IOptions = {
 *   redis: {
 *     host: 'localhost',
 *     port: 6379
 *   },
 *   jwt: {
 *     secret: 'secret',
 *     signOptions: { expiresIn: '60s' }
 *   },
 *   cookieOptions: {
 *     secure: true,
 *     httpOnly: true
 *   },
 *   operator: {
 *     accountId: '0.0.123',
 *     privateKey: 'privateKey'
 *   },
 *   passport: {
 *     defaultStrategy: 'jwt'
 *   },
 *   appName: 'MyApp'
 * }
 * ```
 */
export interface _IOptions {
    /**
     * Redis client options combined with cache manager configuration
     * @description Configures the Redis client and cache manager settings for session storage and caching
     * @property {RedisClientOptions & Config} redis - Redis configuration options
     * @type {RedisClientOptions & Config}
     * @since 2.0.0
     * @memberof _IOptions
     * @example
     * ```typescript
     * redis: {
     *   host: 'localhost',
     *   port: 6379,
     *   password: 'password',
     *   ttl: 3600
     * }
     * ```
     */
    redis: RedisClientOptions & Config

    /**
     * JWT module options for token configuration
     * @description Specifies the configuration for JSON Web Tokens including secret, expiration and signing options
     * @property {JwtModuleOptions} jwt - JWT configuration options
     * @type {JwtModuleOptions}
     * @since 2.0.0
     * @memberof _IOptions
     * @example
     * ```typescript
     * jwt: {
     *   secret: 'your-secret-key',
     *   signOptions: { expiresIn: '1h' }
     * }
     * ```
     */
    jwt: JwtModuleOptions

    /**
     * Cookie options for session management
     * @description Defines the settings for cookies used in session handling including security options
     * @property {CookieOptions} cookieOptions - Cookie configuration options
     * @type {CookieOptions}
     * @since 2.0.0
     * @memberof _IOptions
     * @example
     * ```typescript
     * cookieOptions: {
     *   secure: true,
     *   httpOnly: true,
     *   maxAge: 3600000
     * }
     * ```
     */
    cookieOptions: CookieOptions

    /**
     * Hashgraph operator configuration
     * @description Configures the Hashgraph network operator settings for blockchain interactions
     * @property {IHashgraph.IOperator} operator - Hashgraph operator configuration
     * @type {IHashgraph.IOperator}
     * @since 2.0.0
     * @memberof _IOptions
     * @example
     * ```typescript
     * operator: {
     *   accountId: '0.0.123456789',
     *   privateKey: 'your-private-key'
     * }
     * ```
     */
    operator: IHashgraph.IOperator

    /**
     * Passport strategy for authentication
     * @description Specifies the authentication strategy to be used with Passport for user authentication
     * @property {_IConfiguration.IPassportStrategy} passport - Passport strategy configuration
     * @type {_IConfiguration.IPassportStrategy}
     * @since 2.0.0
     * @memberof _IOptions
     * @example
     * ```typescript
     * passport: {
     *   defaultStrategy: 'jwt',
     *   session: false
     * }
     * ```
     */
    passport: _IConfiguration.IPassportStrategy

    /**
     * Name of the application
     * @description Stores the name of the application for identification purposes and logging
     * @property {string} appName - The name of the application
     * @type {string}
     * @since 2.0.0
     * @memberof _IOptions
     * @example
     * ```typescript
     * appName: 'MyAuthenticatedApp'
     * ```
     */
    appName: string
}