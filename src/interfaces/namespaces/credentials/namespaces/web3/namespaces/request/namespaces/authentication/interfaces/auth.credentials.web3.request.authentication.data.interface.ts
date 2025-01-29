/**
 * Web3 Authentication Data Interface
 * @interface _IData
 * @export _IData
 * @namespace IAuth._ICredentials._IWeb3._IRequest._IAuthentication._IData
 * @description Represents the data structure for Web3 authentication requests containing authentication tokens
 * @property {string} token - A unique token used for authentication purposes, typically a JWT or similar token format
 * @since 2.0.0
 * @public
 * @category Authentication
 * @see {@link IAuth._ICredentials._IWeb3._IRequest._IAuthentication} Parent namespace
 * @example
 * ```typescript
 * const authData: _IData = {
 *   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * };
 * ```
 */
export interface _IData {
    /**
     * Authentication token
     * @description A unique token used for authentication purposes, typically a JWT or similar token format
     * @property {string} token - Authentication token
     * @type {string}
     * @memberof _IData
     * @since 2.0.0
     * @category Properties
     * @remarks This token is typically a JWT (JSON Web Token) that contains encoded authentication information
     * @throws {TypeError} When attempting to assign a non-string value
     * @example
     * ```typescript
     * token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * ```
     */
    token: string;
}