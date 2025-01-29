import { _Dto } from './namespaces/dto/auth.credentials.web2.dto.namespace'
import { _Response } from './namespaces/response/auth.credentials.web2.response.namespace'

/**
 * Web2 Authentication Namespace containing all Web2 authentication related functionality.
 * This namespace provides a centralized location for Web2 authentication components including
 * DTOs for data transfer and Response structures for operation results.
 * 
 * @namespace _Web2
 * @description Namespace containing interfaces, types and classes related to Web2 authentication
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials
 * @public
 * 
 * @property {_Dto} Dto - Data Transfer Object (DTO) namespace containing classes for Web2 authentication requests
 * @property {_Response} Response - Response namespace containing classes for Web2 authentication operation results
 * 
 * @remarks
 * The Web2 namespace follows RESTful principles and provides a complete authentication flow
 * including login, signup and logout operations. All components implement strict validation
 * and type safety.
 * 
 * @example
 * // Using the Web2 namespace for login
 * const loginDto = new _Web2.Dto.Login({
 *   username: "john_doe",
 *   password: "secure_password"
 * });
 * 
 * const loginResponse = new _Web2.Response.Login({
 *   user: userEntity,
 *   operator: operatorEntity,
 *   accessToken: "jwt_token_string"
 * });
 */
export namespace _Web2 {
    /**
     * Data Transfer Object Namespace for Web2 authentication.
     * Contains classes for handling and validating authentication request data.
     * 
     * @namespace Dto
     * @description Contains Data Transfer Object (DTO) classes for Web2 authentication operations
     * including login and registration requests with validation
     * 
     * @see {@link _Dto}
     * @since 2.0.0
     * @category DTOs
     * @public
     * 
     * @property {_Dto.Login} Login - Class for handling login request data
     * @property {_Dto.Signup} Signup - Class for handling signup request data
     * 
     * @example
     * // Using the Dto namespace for login
     * const loginDto = new Dto.Login({
     *   username: "john_doe",
     *   password: "secure_password"
     * });
     * 
     * // Using the Dto namespace for signup
     * const signupDto = new Dto.Signup({
     *   username: "jane_doe",
     *   email: "jane@example.com",
     *   password: "secure_password"
     * });
     */
    export import Dto = _Dto

    /**
     * Response Namespace for Web2 authentication.
     * Contains classes for handling authentication operation results.
     * 
     * @namespace Response
     * @description Contains response classes for Web2 authentication operations
     * including login success/failure and logout results
     * 
     * @see {@link _Response}
     * @since 2.0.0
     * @category Responses
     * @public
     * 
     * @property {_Response.Login} Login - Class for handling login response data
     * @property {_Response.Logout} Logout - Class for handling logout response data
     * 
     * @example
     * // Using the Response namespace for login response
     * const loginResponse = new Response.Login({
     *   user: userEntity,
     *   operator: operatorEntity,
     *   accessToken: "jwt_token_string"
     * });
     * 
     * // Using the Response namespace for logout response
     * const logoutResponse = new Response.Logout({
     *   logout: true,
     *   message: "Successfully logged out"
     * });
     */
    export import Response = _Response
}