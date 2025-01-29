import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/auth.credentials.web3.models.entity.model'
import { _Request } from './namespaces/request/auth.credentials.web3.request.namespace'
import { _Response } from './namespaces/response/auth.credentials.web3.response.namespace'

/**
 * Namespace for Web3-related authentication interfaces and types.
 * @export _Web3
 * @namespace Auth.Credentials.Web3
 * @description Contains types and sub-namespaces for Web3 authentication, including entity, request, and response interfaces.
 * This namespace provides a structured way to handle Web3 authentication flows.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials
 * @public
 * 
 * @property {Entity} Entity - Class representing the Web3 authentication entity with wallet and chain details
 * @property {Request} Request - Namespace containing authentication and sign-in request interfaces
 * @property {Response} Response - Namespace containing login and logout response interfaces
 * 
 * @see Auth.Credentials.Web3.Entity For Web3 entity details
 * @see Auth.Credentials.Web3.Request For request handling
 * @see Auth.Credentials.Web3.Response For response handling
 * 
 * @remarks
 * The _Web3 namespace serves as the main entry point for all Web3 authentication functionality.
 * It consolidates entity management, request handling, and response processing into a single, organized structure.
 * 
 * @example
 * // Using the Entity class
 * const web3Entity = new _Web3.Entity({
 *   address: '0x123...',
 *   chainId: 1,
 *   timestamp: Date.now()
 * });
 * 
 * // Using the Request namespace
 * const authRequest = new _Web3.Request.Authentication.Payload({
 *   url: 'https://example.com',
 *   node: 'node-1'
 * });
 * 
 * // Using the Response namespace
 * const loginResponse = new _Web3.Response.Login({
 *   session: web3Entity,
 *   operator: operatorDetails,
 *   accessToken: 'jwt-token'
 * });
 */
export namespace _Web3 {
    /**
     * Represents the Web3 entity interface.
     * @class Entity
     * @extends {_Entity}
     * @description Defines the structure of a Web3 authentication entity.
     * Contains information about the wallet address, chain ID, and timestamp.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @property {string} address - The Web3 wallet address used for authentication
     * @property {number} chainId - The blockchain network ID identifying the connected chain
     * @property {number} timestamp - Unix timestamp of entity creation/authentication
     * 
     * @see _Entity For base entity implementation
     * @see Auth.Credentials.Web3.Request For using entities in requests
     * @see Auth.Credentials.Web3.Response For entity usage in responses
     * 
     * @remarks
     * The Entity class is used throughout the authentication flow to maintain consistent
     * wallet and chain information between requests and responses.
     * 
     * @example
     * const entity = new Entity({
     *   address: '0x123...',
     *   chainId: 1,
     *   timestamp: Date.now()
     * });
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Entity'
    })
    export class Entity extends _Entity { }

    /**
     * Namespace for Web3 authentication request-related interfaces and types.
     * @namespace Request
     * @description Contains sub-namespaces for authentication and sign-in processes in Web3 requests.
     * Provides structured interfaces for handling different types of Web3 authentication requests.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @see Auth.Credentials.Web3.Request.Authentication For authentication request handling
     * @see Auth.Credentials.Web3.Request.Signin For sign-in request processing
     * 
     * @remarks
     * The Request namespace organizes all request-related functionality into logical sub-namespaces,
     * making it easier to handle different aspects of the authentication process.
     * 
     * @example
     * // Authentication request
     * const authRequest = new Request.Authentication.Payload({
     *   url: 'https://example.com',
     *   node: 'node-1',
     *   data: { nonce: '123' }
     * });
     * 
     * // Sign-in request
     * const signInRequest = new Request.Signin.Login({
     *   operator: operatorDetails,
     *   signedData: signedDataObj
     * });
     */
    export import Request = _Request

    /**
     * Namespace for Web3 authentication response-related interfaces and types.
     * @namespace Response
     * @description Contains types for login and logout responses in Web3 authentication processes.
     * Provides structured interfaces for handling different types of Web3 authentication responses.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @see Auth.Credentials.Web3.Response.Login For login response handling
     * @see Auth.Credentials.Web3.Response.Logout For logout response processing
     * 
     * @remarks
     * The Response namespace provides standardized structures for handling authentication outcomes,
     * ensuring consistent response formats across the application.
     * 
     * @example
     * // Login response
     * const loginResponse = new Response.Login({
     *   session: web3Session,
     *   operator: operatorDetails,
     *   accessToken: 'jwt-token'
     * });
     * 
     * // Logout response
     * const logoutResponse = new Response.Logout(true, 'Successfully logged out');
     */
    export import Response = _Response
}