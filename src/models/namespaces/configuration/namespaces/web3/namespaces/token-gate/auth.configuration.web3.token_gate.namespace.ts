import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/auth.configuration.web3.token_gate.models.entity.model'
import { _Metadata } from './models/auth.configuration.web3.token_gate.models.metadata.model'
import { _Options } from './models/auth.configuration.web3.token_gate.models.options.model'
import { _Properties } from './models/auth.configuration.web3.token_gate.models.properties.model'
import { _Role } from './models/auth.configuration.web3.token_gate.models.role.model'

/**
 * Token Gate Namespace
 * @description Defines the structure and types for the token-gate functionality within the authentication system.
 * This namespace contains classes for managing token-based access control and related metadata.
 * @export _TokenGate
 * @namespace Auth.Configuration.Web3.TokenGate
 * @group Authentication - Token Gate related entities
 */
export namespace _TokenGate {
    /**
     * Role class for token-gate
     * @description Represents a role in the token-gate system. Roles define access permissions and capabilities
     * that can be granted based on token ownership or characteristics.
     * @class Role
     * @extends {_Role}
     * @group Authentication - Token Gate Roles
     * @example
     * ```typescript
     * const role = new Role();
     * role.name = "admin";
     * role.permissions = ["read", "write"];
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Web3.TokenGate.Role' })
    export class Role extends _Role {}

    /**
     * Options class for token-gate configuration
     * @description Defines configuration options for the token-gate system. This includes settings for
     * token validation, access control rules, and system behavior parameters.
     * @class Options
     * @extends {_Options}
     * @group Authentication - Token Gate Configuration
     * @example
     * ```typescript
     * const options = new Options();
     * options.validationRules = {...};
     * options.accessControl = {...};
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Web3.TokenGate.Options' })
    export class Options extends _Options {}

    /**
     * Entity class for token-gate
     * @description Represents an entity in the token-gate system. Entities are the core objects that
     * can be associated with tokens and have specific access rights or properties.
     * @class Entity
     * @extends {_Entity}
     * @group Authentication - Token Gate Entities
     * @example
     * ```typescript
     * const entity = new Entity();
     * entity.id = "123";
     * entity.tokenId = "xyz";
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Web3.TokenGate.Entity' })
    export class Entity extends _Entity {}

    /**
     * Properties class for token-gate metadata
     * @description Defines properties associated with token-gate metadata. These properties can include
     * token characteristics, validation rules, and other metadata attributes.
     * @class Properties
     * @extends {_Properties}
     * @group Authentication - Token Gate Properties
     * @example
     * ```typescript
     * const properties = new Properties();
     * properties.tokenType = "ERC721";
     * properties.contractAddress = "0x...";
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Web3.TokenGate.Properties' })
    export class Properties extends _Properties {}

    /**
     * Metadata class for token-gate
     * @description Represents metadata for tokens in the token-gate system. This includes additional
     * information about tokens such as their properties, validation status, and associated data.
     * @class Metadata
     * @extends {_Metadata}
     * @group Authentication - Token Gate Metadata
     * @example
     * ```typescript
     * const metadata = new Metadata();
     * metadata.properties = {...};
     * metadata.validationStatus = "valid";
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Web3.TokenGate.Metadata' })
    export class Metadata extends _Metadata {}
}
