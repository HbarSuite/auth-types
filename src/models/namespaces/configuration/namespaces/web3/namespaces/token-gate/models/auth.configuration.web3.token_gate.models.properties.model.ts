import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'
import { ISubscription } from "@hsuite/subscriptions-types"

/**
 * Properties Class for Token Gate Configuration
 * @export _Properties
 * @class _Properties
 * @implements {IAuth.IConfiguration.IWeb3.ITokenGate.IProperties}
 * @namespace Auth.Configuration.Web3.TokenGate.Properties
 * @description Defines the structure for properties associated with a token in the token gate system.
 * This class handles validation and storage of token properties including subscription plan and periodicity.
 * The properties define the subscription characteristics and access levels granted by the token.
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * @see {@link IAuth.IConfiguration.IWeb3.ITokenGate.IProperties}
 * 
 * @example
 * ```typescript
 * const tokenProperties = new _Properties({
 *   plan: ISubscription.IPlan.PREMIUM,
 *   periodicity: ISubscription.IPeriodicity.MONTHLY
 * });
 * ```
 */
export class _Properties implements IAuth.IConfiguration.IWeb3.ITokenGate.IProperties {
    /**
     * The subscription plan associated with the token
     * @type {ISubscription.IPlan}
     * @description Specifies the plan details for the token, such as features and limitations.
     * This determines the level of access and capabilities granted by the token.
     * The plan can be one of the predefined subscription tiers (e.g., BASIC, PREMIUM, ENTERPRISE).
     * @public
     * @memberof _Properties
     * @see {@link ISubscription.IPlan}
     * 
     * @example
     * ```typescript
     * properties.plan = ISubscription.IPlan.ENTERPRISE;
     * ```
     */
    @ApiProperty({
        description: 'The subscription plan associated with the token',
        type: () => String,
        enum: ISubscription.IPlan
    })
    public plan: ISubscription.IPlan

    /**
     * The periodicity of the subscription associated with the token
     * @type {ISubscription.IPeriodicity}
     * @description Defines the frequency or duration of the subscription (e.g., monthly, annually).
     * This determines how often the subscription needs to be renewed and the billing cycle.
     * The periodicity affects pricing and commitment duration for the subscription.
     * @public
     * @memberof _Properties
     * @see {@link ISubscription.IPeriodicity}
     * 
     * @example
     * ```typescript
     * properties.periodicity = ISubscription.IPeriodicity.ANNUAL;
     * ```
     */
    @ApiProperty({
        description: 'The periodicity of the subscription associated with the token',
        type: () => String,
        enum: ISubscription.IPeriodicity
    })
    public periodicity: ISubscription.IPeriodicity

    /**
     * Creates an instance of _Properties.
     * @param {IAuth.IConfiguration.IWeb3.ITokenGate.IProperties} properties - The properties to initialize the class
     * @throws {Error} If any of the required properties are missing or invalid
     * @memberof _Properties
     * @description Initializes and validates token properties including subscription plan and periodicity.
     * Ensures that all required fields are present and properly formatted. The constructor performs
     * type checking and validation to maintain data integrity.
     * @public
     * @see {@link IAuth.IConfiguration.IWeb3.ITokenGate.IProperties}
     * 
     * @example
     * ```typescript
     * const properties = new _Properties({
     *   plan: ISubscription.IPlan.BASIC,
     *   periodicity: ISubscription.IPeriodicity.MONTHLY
     * });
     * ```
     * 
     * @throws {Error} When plan is missing or invalid
     * @throws {Error} When periodicity is missing or invalid
     */
    constructor(properties: IAuth.IConfiguration.IWeb3.ITokenGate.IProperties) {
        // Validate plan property
        if (!properties.plan || typeof properties.plan !== 'object') {
            throw new Error('plan must be a valid object')
        }
        this.plan = properties.plan

        // Validate periodicity property
        if (!properties.periodicity || typeof properties.periodicity !== 'object') {
            throw new Error('periodicity must be a valid object')
        }
        this.periodicity = properties.periodicity
    }
}