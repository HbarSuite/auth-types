import { SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core';

/**
 * Role-based access control decorator
 * 
 * @description
 * Creates a decorator that can be used to specify which roles are allowed
 * to access specific routes or resources. This decorator is used in conjunction
 * with the authentication guard to enforce role-based access control (RBAC).
 * 
 * @example
 * ```typescript
 * @Roles(['admin', 'moderator'])
 * @Get('protected-route')
 * protectedEndpoint() {
 *   return 'This route is protected by RBAC';
 * }
 * ```
 * 
 * @publicApi
 */
export const Roles = Reflector.createDecorator<string[]>();

/**
 * Metadata key for public route access
 * @constant
 * @type {string}
 */
export const IS_PUBLIC = 'isPublic'

/**
 * Public route decorator
 * 
 * @description
 * When applied to a route handler, this decorator allows the endpoint to be
 * accessed without authentication. It's useful for endpoints that need to be
 * publicly accessible, such as health checks or public API documentation.
 * 
 * @example
 * ```typescript
 * @Public()
 * @Get('health')
 * healthCheck() {
 *   return 'OK';
 * }
 * ```
 * 
 * @returns {MethodDecorator} A decorator that marks the route as public
 * @publicApi
 */
export const Public = () => SetMetadata(IS_PUBLIC, true);

/**
 * Metadata key for two-factor authentication requirement
 * @constant
 * @type {string}
 */
export const IS_TWO_FACTOR_AUTH = 'isTwoFactorAuth'

/**
 * Two-factor authentication requirement decorator
 * 
 * @description
 * When applied to a route handler, this decorator enforces two-factor
 * authentication before allowing access to the endpoint. It's typically
 * used for high-security operations that require additional verification.
 * 
 * @example
 * ```typescript
 * @isTwoFactorAuth()
 * @Post('sensitive-data')
 * sensitiveOperation() {
 *   // Protected operation requiring 2FA
 *   return 'Access granted after 2FA';
 * }
 * ```
 * 
 * @returns {MethodDecorator} A decorator that enforces 2FA for the route
 * @publicApi
 */
export const isTwoFactorAuth = () => SetMetadata(IS_TWO_FACTOR_AUTH, true);

/**
 * Metadata key for bypassing token gate checks
 * @constant
 * @type {string}
 */
export const BYPASS_TOKEN_GATE = 'bypassTokenGate'

/**
 * Token gate bypass decorator
 * 
 * @description
 * When applied to a route handler, this decorator skips the token gate
 * verification process that would normally be required. This should be
 * used carefully and only in specific scenarios where token verification
 * needs to be bypassed.
 * 
 * @example
 * ```typescript
 * @bypassTokenGate()
 * @Get('unrestricted')
 * unrestrictedAccess() {
 *   // Operation without token gate check
 *   return 'Token gate check bypassed';
 * }
 * ```
 * 
 * @returns {MethodDecorator} A decorator that bypasses token gate verification
 * @publicApi
 */
export const bypassTokenGate = () => SetMetadata(BYPASS_TOKEN_GATE, true);
