/**
 * @interface _ITags
 * @export _ITags
 * @namespace IAuth._ICredentials._IUser._ITags
 * @description Interface representing a key-value pair tag for user credentials
 * @property {string} key - The identifier or category of the tag
 * @property {string} value - The corresponding value or content of the tag
 * @example
 * const userTag: _ITags = {
 *   key: "role",
 *   value: "admin"
 * };
 * @since 2.0.0
 * @author Your Name
 * @see {@link IAuth._ICredentials._IUser} Parent namespace
 * @public
 */
export interface _ITags {
    /**
     * @description The identifier or category of the tag
     * @property {string} key - The key of the tag
     * @example
     * key: "role"
     * @since 2.0.0
     * @memberof _ITags
     * @public
     * @type {string}
     */
    key: string;

    /**
     * @description The corresponding value or content of the tag
     * @property {string} value - The value of the tag
     * @example
     * value: "admin"
     * @since 2.0.0
     * @memberof _ITags
     * @public
     * @type {string}
     */
    value: string;
}