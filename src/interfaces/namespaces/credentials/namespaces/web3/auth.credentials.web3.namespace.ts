import { IAuth } from '../../../../auth.namespace'
import { _IEntity } from './interfaces/auth.credentials.web3.entity.interface'
import { _IRequest } from './namespaces/request/auth.credentials.web3.request.namespace'
import { _IResponse } from './namespaces/response/auth.credentials.web3.response.namespace'

/**
 * Web3 Authentication Credentials Namespace
 * @export _IWeb3
 * @namespace IAuth._ICredentials._IWeb3
 * @description
 * This namespace provides comprehensive interfaces and types for blockchain-based
 * Web3 authentication. It includes structures for wallet authentication, signature
 * verification, and blockchain-specific authentication flows.
 * 
 * Key components:
 * - Wallet authentication
 * - Signature verification
 * - Blockchain session management
 * - Token-based authentication
 * - Chain-specific configurations
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Credentials
 * 
 * @example
 * ```typescript
 * // Web3 authentication entity
 * const web3Entity: _IWeb3.IEntity = {
 *   id: "session_123",
 *   walletAddress: "0x1234567890abcdef",
 *   chainId: 1,
 *   nonce: "random_nonce_123",
 *   signature: "0xabcdef1234567890...",
 *   createdAt: new Date(),
 *   expiresAt: new Date(Date.now() + 3600000)
 * };
 * 
 * // Web3 login request
 * const loginRequest: _IWeb3.IRequest.ISignin = {
 *   walletAddress: "0x1234567890abcdef",
 *   chainId: 1,
 *   signature: "0xabcdef1234567890...",
 *   message: "Sign this message to authenticate: nonce_123"
 * };
 * 
 * // Web3 authentication response
 * const authResponse: _IWeb3.IResponse.ILogin = {
 *   session: web3Entity,
 *   operator: {
 *     id: "op_123",
 *     address: "0x1234567890abcdef",
 *     permissions: ["user", "token_holder"]
 *   },
 *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *   chainData: {
 *     chainId: 1,
 *     networkName: "Ethereum Mainnet",
 *     contractAddresses: {
 *       token: "0xabcdef1234567890",
 *       registry: "0x0987654321fedcba"
 *     }
 *   }
 * };
 * ```
 */
export namespace _IWeb3 {
    /**
     * Web3 Authentication Entity Interface
     * @type {_IEntity}
     * @description
     * Defines the structure for Web3 authentication session entities.
     * Manages blockchain-specific authentication data and session state.
     * 
     * Core properties:
     * - Session identification
     * - Wallet information
     * - Chain data
     * - Signature verification
     * - Timestamps
     * 
     * @example
     * ```typescript
     * const entity: IEntity = {
     *   id: "session_123",
     *   walletAddress: "0x1234567890abcdef",
     *   chainId: 1,
     *   nonce: "random_nonce_123",
     *   signature: "0xabcdef1234567890...",
     *   createdAt: new Date(),
     *   metadata: {
     *     networkName: "Ethereum Mainnet",
     *     walletProvider: "MetaMask"
     *   }
     * };
     * ```
     */
    export type IEntity = _IEntity

    /**
     * Web3 Authentication Request Interface
     * @type {_IRequest}
     * @description
     * Provides interfaces for Web3 authentication requests and signing operations.
     * Handles wallet connections, signature generation, and authentication flows.
     * 
     * Request types:
     * - Wallet connection
     * - Message signing
     * - Session creation
     * - Chain switching
     * 
     * @example
     * ```typescript
     * const signRequest: IRequest.ISignMessage = {
     *   walletAddress: "0x1234567890abcdef",
     *   message: "Sign this message to authenticate",
     *   chainId: 1,
     *   nonce: "random_nonce_123"
     * };
     * ```
     */
    export import IRequest = _IRequest

    /**
     * Web3 Authentication Response Interface
     * @type {_IResponse}
     * @description
     * Defines response structures for Web3 authentication operations.
     * Handles successful authentication, session management, and error cases.
     * 
     * Response types:
     * - Authentication success/failure
     * - Session establishment
     * - Wallet verification
     * - Chain validation
     * 
     * @example
     * ```typescript
     * const authResponse: IResponse.ILogin = {
     *   session: {
     *     id: "session_123",
     *     walletAddress: "0x1234567890abcdef"
     *   },
     *   chainData: {
     *     chainId: 1,
     *     networkName: "Ethereum Mainnet"
     *   },
     *   accessToken: "jwt_token_here"
     * };
     * ```
     */
    export import IResponse = _IResponse
}