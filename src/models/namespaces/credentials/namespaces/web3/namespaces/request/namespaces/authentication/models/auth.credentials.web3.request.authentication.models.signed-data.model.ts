import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IAuth } from '../../../../../../../../../../interfaces/auth.namespace'

/**
 * Represents the signed data for Web3 authentication.
 * 
 * @class _SignedData
 * @implements {IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData}
 * @namespace Auth.Credentials.Web3.Request.Authentication
 * @description This class encapsulates the necessary components for signed Web3 authentication data,
 * including a cryptographic signature and the server account that generated it.
 * @since 2.0.0
 * @category Authentication
 * @module Auth.Credentials.Web3
 * @public
 * 
 * @property {Uint8Array} signature - The cryptographic signature used for verification
 * @property {string} serverSigningAccount - The server account that generated the signature
 * 
 * @example
 * const signedData = new _SignedData(
 *   new Uint8Array([1, 2, 3, 4, 5]), 
 *   '0x1234567890abcdef'
 * );
 * 
 * @see IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData
 * @author HSuite
 * @version 2.0.0
 */
export class _SignedData implements IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData {
    /**
     * The cryptographic signature used to verify the authenticity of the data.
     * Must be a non-empty Uint8Array containing valid signature bytes.
     * 
     * @type {Uint8Array}
     * @memberof _SignedData
     * @public
     * @since 2.0.0
     * @required
     * @description A byte array containing the cryptographic signature used for authentication verification
     * 
     * @throws {Error} Will throw an error if signature is not a Uint8Array or is empty
     * 
     * @example
     * signature = new Uint8Array([1, 2, 3, 4, 5])
     */
    @ApiProperty({
        description: 'A cryptographic signature used to verify the authenticity of the data',
        type: () => Uint8Array,
        example: new Uint8Array([1, 2, 3, 4, 5])
    })
    signature: Uint8Array;

    /**
     * The server account that generated the signature.
     * Must be a non-empty string representing a valid blockchain address or public key.
     * 
     * @type {string}
     * @memberof _SignedData
     * @public
     * @since 2.0.0
     * @required
     * @description The unique identifier (address or public key) of the server account that generated the signature
     * 
     * @throws {Error} Will throw an error if serverSigningAccount is not a non-empty string
     * 
     * @example
     * serverSigningAccount = '0x1234567890abcdef'
     */
    @ApiProperty({
        description: 'Unique identifier for the server account that generated the signature',
        type: () => String,
        example: '0x1234567890abcdef'
    })
    serverSigningAccount: string;

    /**
     * Creates an instance of _SignedData.
     * Validates and initializes the signature and server signing account.
     * 
     * @constructor
     * @param {Uint8Array} signature - The cryptographic signature to verify authenticity
     * @param {string} serverSigningAccount - The server account identifier that generated the signature
     * @throws {Error} Will throw an error if signature is not a Uint8Array or is empty
     * @throws {Error} Will throw an error if serverSigningAccount is not a non-empty string
     * @memberof _SignedData
     * @since 2.0.0
     * @public
     * 
     * @example
     * const signedData = new _SignedData(
     *   new Uint8Array([1, 2, 3, 4, 5]),
     *   '0x1234567890abcdef'
     * );
     * 
     * @see IAuth.ICredentials.IWeb3.IRequest.IAuthentication.ISignedData
     */
    constructor(signature: Uint8Array, serverSigningAccount: string) {
        // Validate signature is a non-empty Uint8Array
        if (!(signature instanceof Uint8Array)) {
            throw new Error('Signature must be a Uint8Array');
        }
        if (signature.length === 0) {
            throw new Error('Signature cannot be empty');
        }
        this.signature = signature;

        // Validate serverSigningAccount is a non-empty string
        if (typeof serverSigningAccount !== 'string' || serverSigningAccount.trim().length === 0) {
            throw new Error('Server signing account must be a non-empty string');
        }
        this.serverSigningAccount = serverSigningAccount;
    }
}