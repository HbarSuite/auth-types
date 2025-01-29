import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IAuth } from '../../../../../../../../interfaces/auth.namespace'
import { _Role } from './auth.configuration.web3.token_gate.models.role.model'

/**
 * Options Class for Token Gate Configuration
 * @export _Options
 * @class _Options
 * @implements {IAuth.IConfiguration.IWeb3.ITokenGate.IOptions}
 * @namespace Auth.Configuration.Web3.TokenGate.Options
 * @description Defines the structure for token gate configuration options. This class handles validation
 * and initialization of token gating settings including enabling/disabling the feature and managing
 * role-based access control through tokens.
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * @public
 * @see {@link _Role} For role configuration details
 * @see {@link IAuth.IConfiguration.IWeb3.ITokenGate.IOptions} For interface definition
 * 
 * @example
 * const tokenGateOptions = new _Options({
 *   enabled: true,
 *   roles: [
 *     new _Role({
 *       name: "VIP",
 *       tokenIds: ["0x123...", "0x456..."],
 *       minBalance: "100"
 *     })
 *   ]
 * });
 */
export class _Options implements IAuth.IConfiguration.IWeb3.ITokenGate.IOptions {
    /**
     * Indicates whether the token gate functionality is enabled
     * @type {boolean}
     * @description Determines if the token gate feature should be active or not. When disabled,
     * token-based access control will not be enforced regardless of other settings.
     * @public
     * @memberof _Options
     * @default false
     * @example
     * options.enabled = true; // Activates token gating
     */
    @ApiProperty({
        description: 'Indicates whether the token gate functionality is enabled',
        type: () => Boolean,
    })
    public enabled: boolean

    /**
     * An array of roles associated with the token gate
     * @type {Array<IAuth.IConfiguration.IWeb3.ITokenGate.IRole>}
     * @description Specifies the roles and their corresponding token IDs for access control.
     * Each role defines a set of tokens and minimum balance requirements that users must meet
     * to be granted that role's permissions.
     * @public
     * @memberof _Options
     * @see {@link _Role} For individual role configuration
     * @throws {Error} If roles array is empty or contains invalid role instances
     * @example
     * options.roles = [
     *   new _Role({
     *     name: "Premium",
     *     tokenIds: ["0x789..."],
     *     minBalance: "10"
     *   })
     * ];
     */
    @ApiProperty({
        description: 'An array of roles associated with the token gate',
        type: () => _Role,
        isArray: true,
    })
    public roles: Array<IAuth.IConfiguration.IWeb3.ITokenGate.IRole>

    /**
     * Creates an instance of _Options.
     * @param {IAuth.IConfiguration.IWeb3.ITokenGate.IOptions} options - The options to initialize the class
     * @throws {Error} If enabled property is not a boolean
     * @throws {Error} If roles array is empty or missing
     * @throws {Error} If any role in the array is not an instance of _Role
     * @memberof _Options
     * @description Initializes and validates token gate configuration options.
     * Ensures that the enabled flag is properly set and that roles are correctly configured.
     * @public
     * @see {@link _Role} For role validation details
     * @example
     * const options = new _Options({
     *   enabled: true,
     *   roles: [
     *     new _Role({
     *       name: "Founder",
     *       tokenIds: ["0xabc..."],
     *       minBalance: "1"
     *     })
     *   ]
     * });
     */
    constructor(options: IAuth.IConfiguration.IWeb3.ITokenGate.IOptions) {
        // Validate enabled flag
        if (typeof options.enabled !== 'boolean') {
            throw new Error('enabled must be a boolean')
        }
        this.enabled = options.enabled

        // Validate roles array
        if (!Array.isArray(options.roles) || options.roles.length === 0) {
            throw new Error('roles must be a non-empty array')
        }
        
        // Map and validate each role
        this.roles = options.roles.map(role => {
            if (!(role instanceof _Role)) {
                throw new Error('Each role must be an instance of _IRole')
            }
            return role
        })
    }
}