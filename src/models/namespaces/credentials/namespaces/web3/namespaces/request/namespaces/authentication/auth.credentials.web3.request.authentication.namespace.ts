import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Authenticate } from './models/auth.credentials.web3.request.authentication.models.authenticate.model'
import { _Data } from './models/auth.credentials.web3.request.authentication.models.data.model'
import { _Payload } from './models/auth.credentials.web3.request.authentication.models.payload.model'
import { _SignedData } from './models/auth.credentials.web3.request.authentication.models.signed-data.model'

/**
 * Namespace for Web3 Authentication interfaces and types.
 * 
 * @namespace
 * @name _Authentication
 * @memberof IAuth.ICredentials.IWeb3.IRequest
 * @description This namespace encapsulates all the necessary classes for handling
 * Web3 authentication requests, including signed data, payload, and authentication data.
 * It provides a structured approach to manage the various components of the Web3
 * authentication process.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 */
export namespace _Authentication {
    /**
     * Represents the signed data for Web3 authentication.
     * 
     * @class
     * @name SignedData
     * @extends _SignedData
     * @description Encapsulates the digital signature and the server signing account
     * used in the authentication process. This class is crucial for verifying the
     * authenticity of the authentication request.
     * @since 2.0.0
     * @category Authentication
     * @module Auth.Credentials.Web3
     * @public
     * 
     * @property {Uint8Array} signature - The cryptographic signature used for verification
     * @property {string} serverSigningAccount - The server account that generated the signature
     * 
     * @example
     * const signedData = new SignedData(new Uint8Array([1, 2, 3, 4, 5]), '0x1234567890abcdef');
     * 
     * @see _SignedData
     * @see Authenticate
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Request.Authentication.SignedData'
    })
    export class SignedData extends _SignedData { }

    /**
     * Represents the authentication data structure.
     * 
     * @class
     * @name Data
     * @extends _Data
     * @description Contains a token used for authentication purposes,
     * typically a JWT or similar format. This class is responsible for
     * storing and validating the authentication token.
     * @since 2.0.0
     * @category Authentication
     * @module Auth.Credentials.Web3
     * @public
     * 
     * @property {string} token - The authentication token, typically a JWT
     * 
     * @example
     * const authData = new Data('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');
     * 
     * @see _Data
     * @see Payload
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Request.Authentication.Data'
    })
    export class Data extends _Data { }

    /**
     * Represents the payload structure for Web3 authentication requests.
     * 
     * @class
     * @name Payload
     * @extends _Payload
     * @description Includes the URL, node identifier, and authentication data
     * required for processing authentication requests. This class organizes
     * the essential information needed to authenticate a Web3 request.
     * @since 2.0.0
     * @category Authentication
     * @module Auth.Credentials.Web3
     * @public
     * 
     * @property {string} url - The URL associated with the authentication request
     * @property {string} node - The identifier of the node handling the authentication
     * @property {Data} data - The authentication data containing the token
     * 
     * @example
     * const payload = new Payload({
     *   url: "https://example.com/auth",
     *   node: "node-1",
     *   data: new Data("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
     * });
     * 
     * @see _Payload
     * @see Data
     * @see Authenticate
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Request.Authentication.Payload'
    })
    export class Payload extends _Payload { }

    /**
     * Represents the complete Web3 authentication interface.
     * 
     * @class
     * @name Authenticate
     * @extends _Authenticate
     * @description Combines signed data and payload information
     * for processing authentication requests. This class serves as the main
     * entry point for initiating and handling Web3 authentication processes.
     * @since 2.0.0
     * @category Authentication
     * @module Auth.Credentials.Web3
     * @public
     * 
     * @property {SignedData} signedData - The signed data containing signature and server account
     * @property {Payload} payload - The payload containing authentication details
     * 
     * @example
     * const authRequest = new Authenticate({
     *   signedData: new SignedData(new Uint8Array([1, 2, 3, 4, 5]), '0x1234567890abcdef'),
     *   payload: new Payload({
     *     url: "https://example.com/auth",
     *     node: "node-1",
     *     data: new Data("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
     *   })
     * });
     * 
     * @see _Authenticate
     * @see SignedData
     * @see Payload
     */
    @ApiSchema({
        name: 'Auth.Credentials.Web3.Request.Authentication.Authenticate'
    })
    export class Authenticate extends _Authenticate { }
}