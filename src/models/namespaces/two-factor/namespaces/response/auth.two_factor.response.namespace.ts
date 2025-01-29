import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Create } from './models/auth.two_factor.response.models.create.model'
import { _Delete } from './models/auth.two_factor.response.models.delete.model'
import { _Verify } from './models/auth.two_factor.response.models.verify.model'

/**
 * Namespace containing response classes for two-factor authentication operations.
 * @description This namespace encapsulates various response classes related to two-factor authentication operations,
 * including creation, deletion, and verification of authentication factors.
 * @memberof _Auth._TwoFactor
 * @namespace _Auth._TwoFactor._Response
 * @since 2.0.0
 * @category Authentication
 * @module Auth.TwoFactor.Response
 * @public
 * 
 * @property {typeof _Create} Create - Class representing the response of creating a new two-factor authentication factor.
 * @property {typeof _Delete} Delete - Class representing the response of deleting a two-factor authentication factor.
 * @property {typeof _Verify} Verify - Class representing the response of verifying a two-factor authentication code.
 * 
 * @example
 * // Creating a new 2FA factor response
 * const createResponse = new _Response.Create(factorSid, identity, uri, secret, message);
 * 
 * // Deleting a 2FA factor response
 * const deleteResponse = new _Response.Delete(success, message);
 * 
 * // Verifying a 2FA code response
 * const verifyResponse = new _Response.Verify(success, message);
 */
export namespace _Response {
    /**
     * Class representing the response of creating a new two-factor authentication factor.
     * @class Create
     * @extends {_Create}
     * @description This class encapsulates the response structure when a new two-factor authentication factor is created.
     * Contains details like factor ID, identity, URI for QR code, and secret key.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @see {@link _Create}
     * @see {@link _Response}
     * 
     * @example
     * const createResponse = new Create(
     *   'YF1234567890abcdef1234567890abcdef',
     *   'user@example.com',
     *   'otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP',
     *   'JBSWY3DPEHPK3PXP',
     *   'Two-factor authentication created successfully'
     * );
     */
    @ApiSchema({
        name: 'Auth.TwoFactor.Response.Create'
    })
    export class Create extends _Create {}

    /**
     * Class representing the response of deleting a two-factor authentication factor.
     * @class Delete
     * @extends {_Delete}
     * @description This class defines the response structure when a two-factor authentication factor is deleted.
     * Includes success status and descriptive message.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @see {@link _Delete}
     * @see {@link _Response}
     * 
     * @example
     * const deleteResponse = new Delete(
     *   true,
     *   'Two-factor authentication factor deleted successfully'
     * );
     */
    @ApiSchema({
        name: 'Auth.TwoFactor.Response.Delete'
    })
    export class Delete extends _Delete {}

    /**
     * Class representing the response of verifying a two-factor authentication code.
     * @class Verify
     * @extends {_Verify}
     * @description This class outlines the response structure when a two-factor authentication code is verified.
     * Contains verification success status and result message.
     * @since 2.0.0
     * @category Authentication
     * @public
     * 
     * @see {@link _Verify}
     * @see {@link _Response}
     * 
     * @example
     * const verifyResponse = new Verify(
     *   true,
     *   'Two-factor authentication code verified successfully'
     * );
     */
    @ApiSchema({
        name: 'Auth.TwoFactor.Response.Verify'
    })
    export class Verify extends _Verify {}
}