/**
 * Authentication Types Module
 * @module @auth-types
 * @description
 * This module exports all authentication-related types, interfaces, and decorators
 * used throughout the application. It serves as the central point for all
 * authentication type definitions and ensures type consistency across the system.
 * 
 * @packageDocumentation
 */

/**
 * Export all authentication interfaces
 * @description
 * Exports the complete set of authentication interfaces including configurations
 * for Web2, Web3, Twilio, and other authentication mechanisms.
 */
export * from './interfaces/auth.namespace';

/**
 * Export all authentication models
 * @description
 * Exports all authentication-related models including data structures for
 * credentials, configurations, and authentication states.
 */
export * from './models/auth.namespace';

/**
 * Export all authentication decorators
 * @description
 * Exports decorators used for authentication control including role-based access,
 * public routes, and two-factor authentication requirements.
 */
export * from "./decorators/auth.decorators";