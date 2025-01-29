import { _IUser } from './namespaces/user/auth.credentials.user.namespace'
import { _IWeb2 } from './namespaces/web2/auth.credentials.web2.namespace'
import { _IWeb3 } from './namespaces/web3/auth.credentials.web3.namespace'

/**
 * Namespace for authentication credentials interfaces and types.
 * @export _ICredentials
 * @namespace IAuth._ICredentials
 * @description Contains interfaces and types for different authentication methods including user, Web2, and Web3 credentials.
 * Provides a centralized location for all authentication-related type definitions.
 * @property {_IUser} IUser - Interface representing user authentication credentials and related types
 * @property {_IWeb2} IWeb2 - Interface representing Web2 authentication credentials and flows
 * @property {_IWeb3} IWeb3 - Interface representing Web3 authentication credentials and blockchain-based auth
 * @since 2.0.0
 * @category Authentication
 * @module Credentials
 * @public
 * @throws {Error} When invalid credentials are provided
 * @throws {Error} When authentication flow fails
 * @see {@link _IUser} For user authentication types
 * @see {@link _IWeb2} For Web2 authentication types  
 * @see {@link _IWeb3} For Web3 authentication types
 * @remarks
 * This namespace serves as the main entry point for all authentication credential types.
 * It supports multiple authentication methods to accommodate different use cases:
 * - Traditional username/password via IUser
 * - Web2 token-based auth via IWeb2
 * - Blockchain wallet auth via IWeb3
 * @example
 * ```typescript
 * // Example usage of user credentials
 * const userCreds: _ICredentials.IUser = {
 *   username: "testuser",
 *   password: "password123"
 * };
 * 
 * // Example usage of Web2 credentials
 * const web2Creds: _ICredentials.IWeb2 = {
 *   email: "test@example.com", 
 *   token: "jwt-token"
 * };
 * 
 * // Example usage of Web3 credentials
 * const web3Creds: _ICredentials.IWeb3 = {
 *   walletAddress: "0x123...",
 *   signature: "0xabc..."
 * };
 * ```
 */
export namespace _ICredentials {
    /**
     * User authentication credentials interface
     * @type {_IUser}
     * @description Contains interfaces and types for username/password based authentication.
     * Provides structures for traditional user authentication flows.
     * @memberof _ICredentials
     * @since 2.0.0
     * @category User Authentication
     * @throws {Error} When invalid username/password provided
     * @throws {Error} When user authentication fails
     * @see {@link _IUser}
     * @remarks
     * Handles traditional username/password authentication scenarios.
     * Includes validation and security measures for user credentials.
     * @example
     * ```typescript
     * const userAuth: IUser = {
     *   username: "testuser",
     *   password: "password123",
     *   rememberMe: true
     * };
     * ```
     */
    export import IUser = _IUser

    /**
     * Web2 authentication credentials interface
     * @type {_IWeb2}
     * @description Contains interfaces and types for traditional web authentication methods.
     * Supports token-based authentication flows like JWT.
     * @memberof _ICredentials
     * @since 2.0.0
     * @category Web Authentication
     * @throws {Error} When invalid token provided
     * @throws {Error} When Web2 authentication fails
     * @see {@link _IWeb2}
     * @remarks
     * Handles modern web authentication scenarios using tokens.
     * Supports various token types and authentication flows.
     * @example
     * ```typescript
     * const web2Auth: IWeb2 = {
     *   email: "test@example.com",
     *   token: "eyJhbGciOiJIUzI1...",
     *   tokenType: "Bearer"
     * };
     * ```
     */
    export import IWeb2 = _IWeb2

    /**
     * Web3 authentication credentials interface
     * @type {_IWeb3}
     * @description Contains interfaces and types for blockchain-based authentication.
     * Supports wallet connection and signature verification flows.
     * @memberof _ICredentials
     * @since 2.0.0
     * @category Blockchain Authentication
     * @throws {Error} When invalid wallet address or signature provided
     * @throws {Error} When Web3 authentication fails
     * @see {@link _IWeb3}
     * @remarks
     * Handles blockchain wallet-based authentication scenarios.
     * Supports multiple chains and signature verification methods.
     * @example
     * ```typescript
     * const web3Auth: IWeb3 = {
     *   walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
     *   signature: "0x4d5e7c9...",
     *   chainId: 1
     * };
     * ```
     */
    export import IWeb3 = _IWeb3
}