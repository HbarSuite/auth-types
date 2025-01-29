import { JwtModuleOptions } from "@nestjs/jwt"
import { Config } from "cache-manager"
import { CookieOptions } from "express"
import { RedisClientOptions } from "redis"
import { _Configuration } from '../auth.configuration.namespace'
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../interfaces/auth.namespace'
import { IHashgraph } from "@hsuite/hashgraph-types";
import { Hashgraph } from "@hsuite/hashgraph-types";

/**
 * Options Class for Authentication Configuration
 * @export Options
 * @class Options
 * @implements {IAuth.IConfiguration.IOptions}
 * @namespace Auth.Configuration.Options
 * @description 
 * Implements the structure for authentication configuration options with validations.
 * This class handles all configuration options needed for authentication including Redis, JWT,
 * cookies, Hashgraph operator settings, and passport strategy.
 * 
 * Core Features:
 * - Redis configuration for session management
 * - JWT token settings
 * - Cookie security options
 * - Hashgraph operator setup
 * - Passport strategy selection
 * - Application identification
 * 
 * Security Considerations:
 * - Secure cookie configuration
 * - JWT token expiration
 * - Redis persistence settings
 * - Operator key management
 * 
 * Usage Areas:
 * - Session management
 * - Token generation
 * - Cookie handling
 * - Blockchain operations
 * - Authentication strategy
 * 
 * @since 2.0.0
 */
export class _Options implements IAuth.IConfiguration.IOptions {
    /**
     * Redis client options combined with cache manager configuration
     * @type {RedisClientOptions & Config}
     * @memberof _Options
     * @description 
     * Configuration options for Redis client and cache manager.
     * Used for session storage and caching authentication data.
     * 
     * Configuration Options:
     * - Host and port settings
     * - Authentication credentials
     * - Connection timeout
     * - TLS/SSL settings
     * - Cache TTL values
     * - Cluster configuration
     * 
     * @example
     * ```typescript
     * options.redis = {
     *   host: 'localhost',
     *   port: 6379,
     *   password: 'secret',
     *   ttl: 3600,
     *   tls: {
     *     ca: fs.readFileSync('ca.pem')
     *   }
     * }
     * ```
     */
    @ApiProperty({
        description: 'Redis client options combined with cache manager configuration',
        type: () => Object,
    })
    public redis: RedisClientOptions & Config

    /**
     * JWT module options for token configuration
     * @type {JwtModuleOptions}
     * @memberof _Options
     * @description 
     * Configuration for JWT tokens including secret, expiration time, and signing options.
     * 
     * Configuration Areas:
     * - Secret key management
     * - Token expiration
     * - Signing algorithms
     * - Token audience
     * - Issuer settings
     * - Custom claims
     * 
     * @example
     * ```typescript
     * options.jwt = {
     *   secret: 'your-secret-key',
     *   signOptions: { 
     *     expiresIn: '1h',
     *     algorithm: 'RS256',
     *     audience: 'api.myapp.com',
     *     issuer: 'auth.myapp.com'
     *   }
     * }
     * ```
     */
    @ApiProperty({
        description: 'JWT module options for token configuration',
        type: () => Object,
    })
    public jwt: JwtModuleOptions

    /**
     * Cookie options for session management
     * @type {CookieOptions}
     * @memberof _Options
     * @description 
     * Configuration for cookie behavior including security options, domain, and expiration.
     * 
     * Security Options:
     * - Secure flag for HTTPS
     * - HTTP-only setting
     * - Same-site policy
     * - Domain restrictions
     * - Path limitations
     * - Expiration control
     * 
     * @example
     * ```typescript
     * options.cookieOptions = {
     *   secure: true,
     *   httpOnly: true,
     *   sameSite: 'strict',
     *   domain: '.myapp.com',
     *   path: '/',
     *   maxAge: 3600000
     * }
     * ```
     */
    @ApiProperty({
        description: 'Cookie options for session management',
        type: () => Object,
    })
    public cookieOptions: CookieOptions

    /**
     * Hashgraph operator configuration
     * @type {IHashgraph.IOperator}
     * @memberof _Options
     * @description 
     * Configuration for Hashgraph network operator including account ID and private key.
     * 
     * Configuration Components:
     * - Account identification
     * - Private key management
     * - Network selection
     * - Node endpoints
     * - Transaction settings
     * 
     * @example
     * ```typescript
     * options.operator = {
     *   accountId: '0.0.12345',
     *   privateKey: 'your-private-key',
     *   network: 'mainnet',
     *   nodes: ['node1.myapp.com', 'node2.myapp.com']
     * }
     * ```
     */
    @ApiProperty({
        description: 'Hashgraph operator configuration',
        type: () => Hashgraph.Operator,
    })
    public operator: IHashgraph.IOperator

    /**
     * Passport strategy for authentication
     * @type {_Configuration.IPassportStrategy}
     * @memberof _Options
     * @description 
     * Defines the authentication strategy to be used by Passport.
     * 
     * Available Strategies:
     * - JWT authentication
     * - Local authentication
     * - OAuth2 providers
     * - Custom strategies
     * 
     * @example
     * ```typescript
     * options.passport = IAuth.IConfiguration.IPassportStrategy.JWT
     * ```
     */
    @ApiProperty({
        description: 'Passport strategy for authentication',
        type: () => String,
        enum: IAuth.IConfiguration.IPassportStrategy
    })
    public passport: IAuth.IConfiguration.IPassportStrategy

    /**
     * Name of the application
     * @type {string}
     * @memberof _Options
     * @description 
     * The name identifier for the application, used in various authentication contexts.
     * 
     * Usage Contexts:
     * - Token issuer
     * - Cookie identification
     * - Logging purposes
     * - Error messages
     * - User notifications
     * 
     * @example
     * ```typescript
     * options.appName = 'MyApp'
     * ```
     */
    @ApiProperty({
        description: 'Name of the application',
        type: () => String,
    })
    public appName: string

    /**
     * Creates an instance of Options.
     * @param {IAuth.IConfiguration.IOptions} options - The options to initialize the class
     * @throws {Error} If any of the required properties are missing or invalid
     * @memberof _Options
     * @description 
     * Initializes a new authentication options instance with validation of all required fields.
     * Ensures all configuration options meet the required format and data types.
     * 
     * Validation Checks:
     * - Redis configuration completeness
     * - JWT settings validity
     * - Cookie options security
     * - Operator credentials format
     * - Passport strategy validity
     * - Application name format
     * 
     * @example
     * ```typescript
     * const authOptions = new _Options({
     *   redis: { 
     *     host: 'localhost', 
     *     port: 6379,
     *     password: 'secret'
     *   },
     *   jwt: { 
     *     secret: 'secret',
     *     signOptions: {
     *       expiresIn: '1h'
     *     }
     *   },
     *   cookieOptions: { 
     *     secure: true,
     *     httpOnly: true
     *   },
     *   operator: { 
     *     accountId: '0.0.12345', 
     *     privateKey: 'key'
     *   },
     *   passport: IAuth.IConfiguration.IPassportStrategy.JWT,
     *   appName: 'MyApp'
     * });
     * ```
     */
    constructor(options: IAuth.IConfiguration.IOptions) {
        // Validate Redis configuration
        if (typeof options.redis !== 'object' || options.redis === null) {
            throw new Error('redis must be a non-null object')
        }
        this.redis = options.redis

        // Validate JWT configuration
        if (typeof options.jwt !== 'object' || options.jwt === null) {
            throw new Error('jwt must be a non-null object')
        }
        this.jwt = options.jwt

        // Validate cookie options
        if (typeof options.cookieOptions !== 'object' || options.cookieOptions === null) {
            throw new Error('cookieOptions must be a non-null object')
        }
        this.cookieOptions = options.cookieOptions

        // Validate Hashgraph operator configuration
        if (typeof options.operator !== 'object' || options.operator === null) {
            throw new Error('operator must be a non-null object')
        }
        this.operator = options.operator

        // Validate passport strategy
        if (!Object.values(IAuth.IConfiguration.IPassportStrategy).includes(options.passport)) {
            throw new Error(`passport must be a valid IPassportStrategy. Received: ${options.passport}`)
        }
        this.passport = options.passport

        // Validate application name
        if (typeof options.appName !== 'string' || options.appName.trim() === '') {
            throw new Error('appName must be a non-empty string')
        }
        this.appName = options.appName
    }
}