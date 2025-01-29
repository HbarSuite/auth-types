import { ISubscription } from "@hsuite/subscriptions-types"

/**
 * Token Gate Properties Interface
 * @export _IProperties
 * @interface _IProperties
 * @namespace IAuth._IConfiguration._IWeb3._ITokenGate._IProperties
 * @description
 * Defines the property structure for tokens in the token gate system. This interface
 * specifies the subscription and access control characteristics of tokens, including
 * plan types and time-based access controls.
 * 
 * Property categories:
 * - Subscription plans
 * - Access periods
 * - Feature entitlements
 * - Usage limitations
 * 
 * @since 2.0.0
 * @category TokenGate
 * 
 * @example
 * ```typescript
 * const tokenProperties: _IProperties = {
 *   plan: ISubscription.IPlan.ENTERPRISE,
 *   periodicity: ISubscription.IPeriodicity.ANNUAL,
 *   features: {
 *     api_access: true,
 *     priority_support: true,
 *     custom_integrations: true
 *   },
 *   limits: {
 *     api_calls_per_month: 1000000,
 *     concurrent_users: 100,
 *     storage_gb: 1000
 *   },
 *   metadata: {
 *     tier: "enterprise",
 *     support_level: "premium",
 *     custom_domain: true
 *   }
 * };
 * ```
 */
export interface _IProperties {
    /**
     * Subscription Plan Type
     * @description
     * Specifies the subscription plan level associated with the token.
     * Determines the base level of access and features available.
     * 
     * Available plans:
     * - FREE: Basic access with limited features
     * - BASIC: Standard features for individual users
     * - PREMIUM: Enhanced features for power users
     * - ENTERPRISE: Full access with custom solutions
     * 
     * @type {ISubscription.IPlan}
     * 
     * @example
     * ```typescript
     * // Enterprise plan configuration
     * plan: ISubscription.IPlan.ENTERPRISE
     * 
     * // Premium plan configuration
     * plan: ISubscription.IPlan.PREMIUM
     * ```
     */
    plan: ISubscription.IPlan

    /**
     * Subscription Time Period
     * @description
     * Defines the time-based validity of the token's access rights.
     * Controls how long the token grants access to features and services.
     * 
     * Available periods:
     * - MONTHLY: 30-day access period
     * - QUARTERLY: 90-day access period
     * - ANNUAL: 365-day access period
     * - LIFETIME: Perpetual access
     * 
     * Usage:
     * - Subscription duration
     * - Access period control
     * - Renewal scheduling
     * 
     * @type {ISubscription.IPeriodicity}
     * 
     * @example
     * ```typescript
     * // Annual subscription
     * periodicity: ISubscription.IPeriodicity.ANNUAL
     * 
     * // Lifetime access
     * periodicity: ISubscription.IPeriodicity.LIFETIME
     * ```
     */
    periodicity: ISubscription.IPeriodicity
}