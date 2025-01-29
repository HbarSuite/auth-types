import { _IAuthentication } from './interfaces/auth.configuration.authentication.interface'
import { _IOptions } from './interfaces/auth.configuration.options.interface'
import { _IWeb2 } from './namespaces/web2/auth.configuration.web2.namespace'
import { _IWeb3 } from './namespaces/web3/auth.configuration.web3.namespace'

/**
 * Configuration Interface Namespace
 * @export _IConfiguration
 * @namespace IAuth._IConfiguration
 * @description 
 * Defines the structure and types for authentication configuration within the system.
 * This namespace consolidates all configuration-related interfaces and types needed
 * for setting up and managing authentication, including both Web2 and Web3 methods.
 * 
 * Key components:
 * - Authentication strategies (JWT, Redis)
 * - Web2 authentication configuration
 * - Web3/blockchain authentication configuration
 * - General configuration options
 * 
 * @since 2.0.0
 * @category Configuration
 * @public
 * 
 * @example
 * ```typescript
 * // Using the Configuration namespace
 * const strategy: _IConfiguration.IPassportStrategy = _IConfiguration.IPassportStrategy.JWT;
 * 
 * const options: _IConfiguration.IOptions = {
 *   web2Options: {
 *     enabled: true,
 *     strategies: ['local', 'oauth']
 *   },
 *   web3Options: {
 *     enabled: true,
 *     networks: ['ethereum', 'polygon']
 *   }
 * }
 * ```
 */
export namespace _IConfiguration {
    /**
     * Passport Authentication Strategy Enum
     * @export IPassportStrategy
     * @enum IPassportStrategy
     * @namespace IAuth._IConfiguration.IPassportStrategy
     * @description 
     * Defines the available authentication strategies for Passport integration.
     * Specifies the session management approach to be used by the authentication system.
     * 
     * Available strategies:
     * - REDIS: Uses Redis for session storage and management
     * - JWT: Implements JSON Web Token based authentication
     * 
     * Strategy selection impacts:
     * - Session persistence
     * - Scalability considerations
     * - Security implementation
     * - Performance characteristics
     * 
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @example
     * ```typescript
     * // Using JWT strategy
     * const strategy = IPassportStrategy.JWT;
     * 
     * // Using Redis strategy
     * const redisStrategy = IPassportStrategy.REDIS;
     * ```
     */
    export enum IPassportStrategy {
        /**
         * Redis Session Strategy
         * @description
         * Uses Redis as the session store for maintaining user authentication state.
         * Provides distributed session management suitable for scalable applications.
         */
        REDIS = 'redis',

        /**
         * JWT Authentication Strategy
         * @description
         * Implements stateless authentication using JSON Web Tokens.
         * Suitable for distributed systems and microservices architectures.
         */
        JWT = 'jwt'
    }

    /**
     * Authentication Configuration Type
     * @type {_IAuthentication}
     * @description 
     * Defines the structure for authentication configuration settings.
     * Specifies how authentication mechanisms should be configured and behave.
     * 
     * Configuration aspects:
     * - Security parameters
     * - Session management
     * - Token handling
     * - Authentication flows
     * 
     * @see {@link _IAuthentication}
     * @since 2.0.0
     * @category Configuration
     * @public
     */
    export type IAuthentication = _IAuthentication

    /**
     * Configuration Options Type
     * @type {_IOptions}
     * @description 
     * Defines the structure for general configuration options.
     * Encompasses all configurable aspects of the authentication system.
     * 
     * Option categories:
     * - Global settings
     * - Feature flags
     * - Integration options
     * - Security parameters
     * 
     * @see {@link _IOptions}
     * @since 2.0.0
     * @category Configuration
     * @public
     */
    export type IOptions = _IOptions

    /**
     * Web2 Authentication Namespace
     * @namespace IWeb2
     * @description 
     * Provides types and interfaces for traditional Web2 authentication methods.
     * Includes support for standard authentication protocols and strategies.
     * 
     * Supported features:
     * - Username/password authentication
     * - OAuth integration
     * - Social login providers
     * - Multi-factor authentication
     * 
     * @see {@link _IWeb2}
     * @since 2.0.0
     * @category Authentication
     * @public
     */
    export import IWeb2 = _IWeb2

    /**
     * Web3 Authentication Namespace
     * @namespace IWeb3
     * @description 
     * Provides types and interfaces for blockchain-based Web3 authentication methods.
     * Enables integration with various blockchain networks and wallet providers.
     * 
     * Capabilities:
     * - Wallet authentication
     * - Chain integration
     * - Token gating
     * 
     * @see {@link _IWeb3}
     * @since 2.0.0
     * @category Authentication
     * @public
     */
    export import IWeb3 = _IWeb3
}