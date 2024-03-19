# Alphabill SSO Login
This library is a provider of cryptomaterials for Alphabill blockchain applications.
It performs OAuth-based authentications with public social networks identiy providers (like, Google, Meta, X, etc.) and links 
user identities with their Alphabill accounts.

Currently, we support Web3Auth platform.
In our roadmap we plan to add zkLogin.

## Installation Instructions
`npm install -s alphabill-sso-login`

## Usage Instructions (Web3Auth only)
 * Import: import { init, recoverSecret, getEntropy, getMnemonic, getSeed, getMasterKey, getPrivateKeyBytes, getPublicKeyBytes, forgetSecret } from "alphabill-sso-login/web3auth.js"
 * Initialize: init(client_id) - register your project with https://web3auth.io and get the Client ID
 * Login and recover the entropy (note: entropy is the primary and confidential artifact) linked to the user's identity in a social network: recoverSecret()
 * Get cryptomaterials derived from the entropy and the entropy itself: getEntropy, getMnemonic, getSeed, getMasterKey, getPrivateKeyBytes, getPublicKeyBytes
 * Logout: forgetSecret


## Examples

```javascript
import { init, recoverSecret, getEntropy, getMnemonic, getSeed, getMasterKey, getPrivateKeyBytes, getPublicKeyBytes, forgetSecret } from "alphabill-sso-login/web3auth.js";

export const connect = () => {
    recoverSecret().then(() => {
        console.log("Entropy: "+getEntropy());
        console.log("Mnemonic: "+getMnemonic());
        console.log("Seed: "+getSeed());
        console.log("Master Key: "+JSON.stringify(getMasterKey(), null, 4));
        console.log("Private Key: "+JSON.stringify(getPrivateKeyBytes(), null, 4));
        console.log("Public Key: "+JSON.stringify(getPublicKeyBytes(), null, 4));
    });
}

window.onload = () => {
    init('<your-client-id-from-web3auth.io>');
}
```
