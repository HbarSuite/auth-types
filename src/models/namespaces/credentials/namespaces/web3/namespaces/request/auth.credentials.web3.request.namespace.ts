import { _Authentication } from './namespaces/authentication/auth.credentials.web3.request.authentication.namespace'
import { _Signin } from './namespaces/sign-in/auth.credentials.web3.request.sign_in.namespace'

/**
 * Namespace for Web3 authentication request-related interfaces and types.
 * @namespace _Request
 * @export _Request
 * @namespace Auth.Credentials.Web3.Request
 * @description Contains sub-namespaces for authentication and sign-in processes in Web3 requests.
 * This namespace provides a structured way to handle different aspects of Web3 authentication.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * @see {@link _Authentication} For authentication-specific functionality
 * @see {@link _Signin} For sign-in specific functionality
 * @remarks
 * The _Request namespace serves as the main entry point for all Web3 authentication request handling.
 * It consolidates authentication and sign-in related functionality into a single, organized structure.
 * 
 * @property {_Authentication} Authentication - Namespace containing authentication-related interfaces and types for handling Web3 authentication flows
 * @property {_Signin} Signin - Namespace containing sign-in related interfaces and types for managing Web3 sign-in processes
 * 
 * @example
 * // Using the Authentication namespace for handling authentication requests
 * const authPayload = new _Request.Authentication.Payload({
 *   url: "https://example.com",
 *   node: "node-1",
 *   data: { token: "abc123" }
 * });
 * 
 * // Using the Signin namespace for managing sign-in flows
 * const signInRequest = new _Request.Signin.Login({
 *   operator: { id: "op-123", name: "Test Operator" },
 *   signedData: signedDataObj
 * });
 */
export namespace _Request {
    /**
     * Authentication-related interfaces and types.
     * @namespace Authentication
     * @description Contains interfaces and types for Web3 authentication processes.
     * Provides functionality for handling authentication payloads and verification.
     * @since 2.0.0
     * @category Authentication
     * @public
     * @see {@link _Signin} For related sign-in functionality
     * @remarks
     * The Authentication namespace handles all aspects of Web3 authentication,
     * including payload creation, verification, and response handling.
     * 
     * @example
     * // Creating and using an authentication payload
     * const authPayload = new Authentication.Payload({
     *   url: "https://example.com",
     *   node: "node-1",
     *   data: { token: "abc123" }
     * });
     */
    export import Authentication = _Authentication

    /**
     * Sign-in related interfaces and types.
     * @namespace Signin
     * @description Contains interfaces and types for Web3 sign-in processes.
     * Handles the complete Web3 sign-in flow including payload signing and verification.
     * @since 2.0.0
     * @category Authentication
     * @public
     * @see {@link _Authentication} For related authentication functionality
     * @remarks
     * The Signin namespace provides comprehensive functionality for managing Web3 sign-in processes,
     * including user authentication, signature verification, and session management.
     * 
     * @example
     * // Implementing a complete sign-in flow
     * const signInRequest = new Signin.Login({
     *   operator: { id: "op-123", name: "Test Operator" },
     *   signedData: {
     *     signedPayload: signedPayloadObj,
     *     userSignature: new Uint8Array([1,2,3])
     *   }
     * });
     */
    export import Signin = _Signin
}