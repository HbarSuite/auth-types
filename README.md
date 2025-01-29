# @auth-types

A comprehensive TypeScript library providing type definitions, interfaces, models, and decorators for authentication and authorization systems. This library serves as the foundation for implementing secure, type-safe authentication across applications.

## Features

- **Type-Safe Authentication**: Complete set of TypeScript interfaces and types for authentication systems
- **Multiple Authentication Methods**: Support for Web2, Web3, and Two-Factor Authentication
- **Twilio Integration**: Type definitions for SMS and voice verification services
- **Role-Based Access Control**: Decorators and types for implementing RBAC
- **Secure Credential Management**: Interfaces for handling authentication credentials
- **Flexible Configuration**: Comprehensive configuration interfaces for all authentication methods

## Installation

```bash
npm install @auth-types
```

## Core Components

### Authentication Models

The library provides comprehensive models through the `Auth` namespace:

- **Twilio Models**: SMS and voice verification service models
- **Two-Factor Authentication**: TOTP, backup codes, and verification models
- **Web3 Authentication**: Blockchain and wallet-based authentication models
- **Web2 Authentication**: Traditional username/password and OAuth models
- **Configuration Models**: System-wide authentication settings
- **Credential Models**: Secure credential management models

### Interfaces

The `IAuth` namespace provides type definitions for:

- **ITwilio**: Twilio service integration interfaces
- **ITwoFactor**: Two-factor authentication interfaces
- **IWeb3**: Blockchain authentication interfaces
- **IWeb2**: Traditional authentication interfaces
- **IConfiguration**: System configuration interfaces
- **ICredentials**: Credential management interfaces

### Decorators

The library includes several authentication-related decorators:

- **@Roles()**: Role-based access control decorator
- **@Public()**: Mark routes as publicly accessible
- **@isTwoFactorAuth()**: Enforce two-factor authentication
- **@bypassTokenGate()**: Skip token gate verification

## Usage Examples

### Role-Based Access Control

```typescript
import { Roles } from '@auth-types';

@Roles(['admin', 'moderator'])
@Get('protected-route')
protectedEndpoint() {
  return 'This route is protected by RBAC';
}
```

### Two-Factor Authentication

```typescript
import { isTwoFactorAuth } from '@auth-types';

@isTwoFactorAuth()
@Post('sensitive-data')
sensitiveOperation() {
  return 'Access granted after 2FA';
}
```

### Web3 Wallet Authentication

```typescript
import { Auth } from '@auth-types';

const web3Auth = new Auth.Web3.WalletConnect({
  chainId: 1,
  rpcUrl: 'https://mainnet.infura.io/v3/...',
  supportedChains: [1, 137, 56],
  walletConnect: {
    projectId: '...',
    name: 'MyApp'
  }
});
```

### Twilio Verification

```typescript
import { Auth } from '@auth-types';

const verifyService = new Auth.Twilio.Verify({
  accountSid: 'AC...',
  authToken: '...'
});

await verifyService.sendCode('+1234567890', {
  channel: 'sms',
  locale: 'en'
});
```

## Type Structure

```typescript
Auth
├── Twilio
│   ├── Verify
│   ├── Voice
│   └── SMS
├── TwoFactor
│   ├── TOTP
│   ├── BackupCodes
│   └── Verification
├── Web3
│   ├── WalletConnect
│   ├── Signature
│   └── TokenGate
├── Web2
│   ├── OAuth
│   ├── Basic
│   └── Social
├── Configuration
│   ├── Security
│   ├── Session
│   └── Methods
└── Credentials
    ├── Storage
    ├── Validation
    └── Encryption
```

## Security Features

- Type-safe credential handling
- Secure configuration interfaces
- Role-based access control
- Two-factor authentication support
- Token gate verification
- Signature verification for Web3

## Best Practices

1. Always use type-safe interfaces for authentication configurations
2. Implement proper role-based access control using provided decorators
3. Enable two-factor authentication for sensitive operations
4. Follow secure credential storage patterns
5. Use appropriate Web3 signature verification for blockchain authentication

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the terms of the MIT license.

---

<p align="center">
  Built with ❤️ by the HbarSuite Team<br>
  Copyright © 2024 HbarSuite. All rights reserved.
</p>