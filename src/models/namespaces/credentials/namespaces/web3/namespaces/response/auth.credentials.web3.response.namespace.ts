import { _Login } from './models/auth.credentials.web3.response.models.login.model'
import { _Logout } from './models/auth.credentials.web3.response.models.logout.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * Namespace for Web3 authentication response-related interfaces and types.
 * @export _Response
 * @namespace Auth.Credentials.Web3.Response
 * @description Contains types for login and logout responses in Web3 authentication processes.
 * This namespace provides a structured way to handle different types of responses in the Web3 authentication flow.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * 
 * @property {Login} Login - Class for handling successful Web3 login responses, containing session, operator and token information
 * @property {Logout} Logout - Class for handling Web3 logout responses with status and message details
 * 
 * @example
 * // Using the Login class
 * const loginResponse = new _Response.Login({
 *   session: { address: '0x123...', chainId: 1 },
 *   operator: { id: 'op-1', permissions: ['read', 'write'] },
 *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * });
 * 
 * // Using the Logout class
 * const logoutResponse = new _Response.Logout(true, "Successfully logged out");
 * 
 * @remarks
 * The namespace provides two main classes:
 * - Login: For handling successful authentication responses
 * - Logout: For managing logout operation responses
 * 
 * @see {@link Login} For handling login responses
 * @see {@link Logout} For handling logout responses
 */
export namespace _Response {
    /**
     * Class representing the login response for Web3 authentication.
     * @class Login
     * @extends {_Login}
     * @description Defines the structure of the login response after successful Web3 authentication.
     * Contains session information, operator details, and access token.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @property {Auth.Credentials.Web3.Entity} session - The authenticated Web3 session information containing wallet address, chain details and timestamps
     * @property {ISmartNode.IOperator.IEntity} operator - The operator information including ID, permissions and role assignments
     * @property {string} accessToken - JWT token for authenticated requests, used for subsequent API calls
     * 
     * @example
     * const loginResponse = new _Response.Login({
     *   session: {
     *     address: '0x123...',
     *     chainId: 1,
     *     timestamp: Date.now()
     *   },
     *   operator: {
     *     id: 'op-1',
     *     permissions: ['read', 'write'],
     *     role: 'admin'
     *   },
     *   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * });
     * 
     * @remarks
     * The Login class extends _Login to provide a complete Web3 authentication response structure.
     * It includes critical information needed for the authenticated session.
     * 
     * @see {@link _Login} For the base login response implementation
     * @see {@link Auth.Credentials.Web3.Entity} For session structure details
     * @see {@link ISmartNode.IOperator.IEntity} For operator details structure
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Response.Login'
    })
    export class Login extends _Login { }

    /**
     * Class representing the logout response for Web3 authentication.
     * @class Logout
     * @extends {_Logout}
     * @description Defines the structure of the logout response after a Web3 logout attempt.
     * Provides status and message information about the logout operation.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @property {boolean} logout - Indicates if logout was successful, true for successful logout, false otherwise
     * @property {string} message - Descriptive message about the logout result, providing context about the operation outcome
     * 
     * @example
     * const logoutResponse = new _Response.Logout(true, "Logout successful");
     * console.log(logoutResponse.logout); // true
     * console.log(logoutResponse.message); // "Logout successful"
     * 
     * // Example with error
     * const failedLogout = new _Response.Logout(false, "Session not found");
     * 
     * @remarks
     * The Logout class extends _Logout to provide a standardized way of handling Web3 logout responses.
     * It includes both a boolean status and a descriptive message for better error handling and user feedback.
     * 
     * @throws {Error} When instantiated with invalid parameters
     * @see {@link _Logout} For the base logout response implementation
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Response.Logout'
    })
    export class Logout extends _Logout { }
}