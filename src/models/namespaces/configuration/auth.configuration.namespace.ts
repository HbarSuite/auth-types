import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Authentication } from './models/auth.configuration.models.authentication.model'
import { _Options } from './models/auth.configuration.models.options.model'
import { _Web2 } from './namespaces/web2/auth.configuration.web2.namespace'
import { _Web3 } from './namespaces/web3/auth.configuration.web3.namespace'

/**
 * Authentication System Configuration
 * @export _Configuration
 * @namespace IAuth._Configuration
 * @description
 * Comprehensive configuration management system for authentication mechanisms.
 * Provides a centralized way to configure and manage authentication settings
 * for both traditional (Web2) and blockchain-based (Web3) authentication methods.
 * 
 * Configuration Areas:
 * - Authentication methods
 * - Security policies
 * - Provider settings
 * - Integration options
 * - System defaults
 * 
 * Key Features:
 * - Unified configuration
 * - Environment-based settings
 * - Dynamic reconfiguration
 * - Validation rules
 * - Security policies
 * 
 * Supported Authentication Types:
 * - Web2 (Traditional)
 *   - Username/password
 *   - OAuth/OpenID Connect
 *   - Social login
 *   - SSO
 * 
 * - Web3 (Blockchain)
 *   - Wallet connection
 *   - Token gating
 *   - Multi-chain support
 * 
 * @since 2.0.0
 * @category Authentication
 * @module Auth
 * 
 * @example
 * ```typescript
 * // Initialize comprehensive auth configuration
 * const authConfig = new _Configuration.Authentication({
 *   // Web2 authentication settings
 *   web2: new _Configuration.Web2.Options({
 *     enabled: true,
 *     providers: {
 *       oauth: {
 *         google: {
 *           clientId: 'xxx',
 *           clientSecret: 'xxx',
 *           scopes: ['email', 'profile']
 *         },
 *         github: {
 *           clientId: 'xxx',
 *           clientSecret: 'xxx'
 *         }
 *       },
 *       local: {
 *         enabled: true,
 *         passwordPolicy: {
 *           minLength: 12,
 *           requireSpecialChars: true
 *         }
 *       }
 *     },
 *     session: {
 *       duration: 3600,
 *       refreshToken: true
 *     }
 *   }),
 * 
 *   // Web3 authentication settings
 *   web3: new _Configuration.Web3.Options({
 *     enabled: true,
 *     networks: {
 *       ethereum: {
 *         chainId: 1,
 *         rpcUrl: 'https://mainnet.infura.io/v3/xxx'
 *       },
 *       polygon: {
 *         chainId: 137,
 *         rpcUrl: 'https://polygon-rpc.com'
 *       }
 *     },
 *     tokenGate: {
 *       enabled: true,
 *       contracts: {
 *         access: '0x1234...',
 *         membership: '0x5678...'
 *       }
 *     }
 *   })
 * });
 * ```
 */
export namespace _Configuration {
    /**
     * Authentication Configuration Manager
     * @class Authentication
     * @extends {_Authentication}
     * @description
     * Core class for managing authentication configuration across the system.
     * Provides comprehensive control over authentication mechanisms, security
     * policies, and integration settings.
     * 
     * Configuration Areas:
     * - Authentication methods
     * - Provider settings
     * - Security policies
     * - Integration options
     * - System defaults
     * 
     * Features:
     * - Method enablement
     * - Provider configuration
     * - Security settings
     * - Integration management
     * - Policy enforcement
     * 
     * @property {Web2.Options} web2 - Traditional authentication configuration
     * @property {Web3.Options} web3 - Blockchain authentication configuration
     * 
     * @example
     * ```typescript
     * const auth = new Authentication({
     *   web2: {
     *     enabled: true,
     *     providers: {
     *       oauth: {
     *         google: { enabled: true, clientId: 'xxx' },
     *         github: { enabled: true, clientId: 'xxx' }
     *       },
     *       local: {
     *         enabled: true,
     *         mfa: { required: true, methods: ['totp'] }
     *       }
     *     },
     *     security: {
     *       rateLimit: { maxAttempts: 5, window: 300 },
     *       session: { duration: 3600, refresh: true }
     *     }
     *   },
     *   web3: {
     *     enabled: true,
     *     networks: ['ethereum', 'polygon'],
     *     features: {
     *       tokenGate: true,
     *       smartContractAuth: true
     *     }
     *   }
     * });
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Authentication' })
    export class Authentication extends _Authentication { }

    /**
     * Global Configuration Options
     * @class Options
     * @extends {_Options}
     * @description
     * Manages global configuration options and system-wide defaults for
     * the authentication system. Provides centralized control over
     * authentication behavior and policies.
     * 
     * Configuration Categories:
     * - System settings
     * - Default values
     * - Global policies
     * - Feature flags
     * - Integration defaults
     * 
     * Features:
     * - Environment configuration
     * - Feature toggling
     * - Policy management
     * - Default overrides
     * - Validation rules
     * 
     * @property {boolean} enabled - Global authentication status
     * @property {object} defaults - System-wide default settings
     * @property {object} policies - Global security policies
     * 
     * @example
     * ```typescript
     * const options = new Options({
     *   enabled: true,
     *   defaults: {
     *     session: {
     *       duration: 3600,
     *       refreshThreshold: 300,
     *       maxConcurrent: 5
     *     },
     *     security: {
     *       passwordPolicy: {
     *         minLength: 12,
     *         complexity: 'high'
     *       },
     *       rateLimit: {
     *         window: 300,
     *         maxAttempts: 5
     *       }
     *     },
     *     notifications: {
     *       enabled: true,
     *       channels: ['email', 'sms']
     *     }
     *   },
     *   policies: {
     *     mfa: {
     *       required: true,
     *       allowedMethods: ['totp', 'sms']
     *     },
     *     session: {
     *       singleDevice: false,
     *       persistentLogin: true
     *     }
     *   }
     * });
     * ```
     */
    @ApiSchema({ name: 'Auth.Configuration.Options' })
    export class Options extends _Options { }

    /**
     * Traditional Authentication Configuration
     * @namespace Web2
     * @description
     * Comprehensive configuration system for traditional web-based
     * authentication methods. Manages settings for various authentication
     * providers and security mechanisms.
     * 
     * Authentication Methods:
     * - Username/password
     * - OAuth 2.0/OpenID Connect
     * - Social login providers
     * - Single Sign-On (SSO)
     * - Magic links
     * 
     * Features:
     * - Provider management
     * - Session handling
     * - Password policies
     * - MFA configuration
     * - Rate limiting
     * 
     * @example
     * ```typescript
     * const web2Config = new Web2.Options({
     *   providers: {
     *     oauth: {
     *       google: {
     *         enabled: true,
     *         clientId: 'xxx',
     *         clientSecret: 'xxx',
     *         scopes: ['email', 'profile']
     *       },
     *       github: {
     *         enabled: true,
     *         clientId: 'xxx',
     *         clientSecret: 'xxx'
     *       }
     *     },
     *     local: {
     *       enabled: true,
     *       mfa: {
     *         required: true,
     *         methods: ['totp', 'sms']
     *       },
     *       password: {
     *         minLength: 12,
     *         requireSpecialChars: true
     *       }
     *     }
     *   },
     *   session: {
     *     duration: 3600,
     *     refreshToken: true,
     *     singleSession: false
     *   }
     * });
     * ```
     */
    export import Web2 = _Web2

    /**
     * Blockchain Authentication Configuration
     * @namespace Web3
     * @description
     * Advanced configuration system for blockchain-based authentication
     * methods. Manages settings for wallet connections, token gating,
     * and multi-chain support.
     * 
     * Supported Features:
     * - Wallet authentication
     * - Token gating
     * - Multi-chain support
     * - ENS resolution
     * 
     * Security Features:
     * - Signature verification
     * - Chain validation
     * - Token verification
     * - Address validation
     * - Transaction signing
     * 
     * @example
     * ```typescript
     * const web3Config = new Web3.Options({
     *   networks: {
     *     ethereum: {
     *       chainId: 1,
     *       rpcUrl: 'https://mainnet.infura.io/v3/xxx',
     *       explorer: 'https://etherscan.io'
     *     },
     *     polygon: {
     *       chainId: 137,
     *       rpcUrl: 'https://polygon-rpc.com',
     *       explorer: 'https://polygonscan.com'
     *     }
     *   },
     *   walletConnect: {
     *     enabled: true,
     *     projectId: 'xxx',
     *     metadata: {
     *       name: 'MyApp',
     *       description: 'Web3 Authentication'
     *     }
     *   },
     *   tokenGate: {
     *     enabled: true,
     *     contracts: {
     *       access: '0x1234...',
     *       membership: '0x5678...'
     *     },
     *     requirements: {
     *       minBalance: 1,
     *       tokenTypes: ['ERC721', 'ERC1155']
     *     }
     *   }
     * });
     * ```
     */
    export import Web3 = _Web3
}