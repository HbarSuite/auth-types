import { _IDto } from './namespaces/dto/auth.credentials.web2.dto.namespace'
import { _IResponse } from './namespaces/response/auth.credentials.web2.response.namespace'

/**
 * Web2 Authentication Credentials Namespace
 * @export _IWeb2
 * @namespace IAuth._ICredentials._IWeb2
 * @description
 * This namespace provides interfaces and types for traditional Web2 authentication
 * operations. It includes comprehensive type definitions for data transfer objects
 * (DTOs) and response structures used in authentication flows.
 * 
 * Key features:
 * - Login/Signup DTOs
 * - Authentication responses
 * - Password reset flows
 * - Session management
 * - Email verification
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Credentials
 * 
 * @example
 * ```typescript
 * // Login request with credentials
 * const loginDto: _IWeb2.IDto.ILogin = {
 *   username: "john_doe",
 *   email: "john@example.com",
 *   password: "securePass123",
 *   rememberMe: true
 * };
 * 
 * // Handle successful login response
 * const loginResponse: _IWeb2.IResponse.ILogin = {
 *   user: {
 *     id: "user_123",
 *     username: "john_doe",
 *     email: "john@example.com",
 *     roles: ["user"]
 *   },
 *   operator: {
 *     id: "op_456",
 *     name: "System Operator",
 *     permissions: ["user_management"]
 *   },
 *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *   refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * };
 * ```
 */
export namespace _IWeb2 {
    /**
     * Web2 Authentication DTOs
     * @namespace IDto
     * @description
     * Contains Data Transfer Object interfaces for Web2 authentication operations.
     * Provides type definitions for request payloads in authentication flows.
     * 
     * Supported operations:
     * - User registration
     * - Login authentication
     * - Password management
     * - Profile updates
     * - Email verification
     * 
     * @example
     * ```typescript
     * // User registration DTO
     * const signupDto: IDto.ISignup = {
     *   username: "jane_doe",
     *   email: "jane@example.com",
     *   password: "securePass456",
     *   confirmPassword: "securePass456",
     *   profile: {
     *     firstName: "Jane",
     *     lastName: "Doe"
     *   },
     *   tags: [
     *     { key: "role", value: "user" },
     *     { key: "source", value: "web_signup" }
     *   ]
     * };
     * ```
     */
    export import IDto = _IDto

    /**
     * Web2 Authentication Responses
     * @namespace IResponse
     * @description
     * Contains response interfaces for Web2 authentication operations.
     * Defines the structure of server responses for various auth flows.
     * 
     * Response types:
     * - Login success/failure
     * - Registration confirmation
     * - Password reset results
     * - Session management
     * - Token refresh
     * 
     * @example
     * ```typescript
     * // Successful logout response
     * const logoutResponse: IResponse.ILogout = {
     *   success: true,
     *   message: "Successfully logged out",
     *   sessionId: "session_123",
     *   timestamp: new Date()
     * };
     * 
     * // Password reset response
     * const resetResponse: IResponse.IPasswordReset = {
     *   success: true,
     *   message: "Password successfully reset",
     *   requiresRelogin: true
     * };
     * ```
     */
    export import IResponse = _IResponse
}