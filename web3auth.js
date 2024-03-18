//import { CHAIN_NAMESPACES } from "@web3auth/base";
import { CommonPrivateKeyProvider } from "@web3auth/base-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

import { AB_WEB3AUTH_CONF } from "./utils/web3auth.constants.js";

let web3auth = null;
let secret = null;

/**
 * Initialize the web3auth module.
 *
 * @param {string} api_key - The API key for the client.
 * @param {object} [chainConfig=AB_WEB3AUTH_CONF.AB_testnet] - Configurations for the chain.
 * @param {string} [network="sapphire_devnet"] - The network to connect to.
 */
export async function init (api_key, chainConfig = AB_WEB3AUTH_CONF.AB_testnet, network = "sapphire_devnet"){

    const clientId = api_key;

    const privateKeyProvider = new CommonPrivateKeyProvider({
	config: { chainConfig },
    });
    const openloginAdapter = new OpenloginAdapter({
	privateKeyProvider: privateKeyProvider,
    });

    web3auth = new window.Modal.Web3Auth({
	clientId,
	chainConfig,
	web3AuthNetwork: network,
	authMode: "WALLET"
    });

    web3auth.configureAdapter(openloginAdapter);

    await web3auth.initModal();
}


/**
 * Recovers and returns the secret key.
 *
 * @throws Will throw an error if web3auth is not initialized.
 * @returns {string} - The secret key.
 */
export async function recoverSecret(){
    if(!web3auth) throw new Error("Web3auth was not initialized. Initialize web3auth first.");
    await web3auth.connect();

    const provider = web3auth.provider;
    secret = await provider.request({method: 'private_key'});

    return secret;
}


/**
 * Returns the secret key.
 *
 * @returns {string|null} - The secret key or null if not set.
 */
export function getSecret(){
    return secret;
}


/**
 * Removes the secret key.
 *
 * @throws Will throw an error if web3auth is not initialized.
 */
export async function forgetSecret(){
    if(!web3auth) throw new Error("Web3auth was not initialized. Initialize web3auth first.");
    await web3auth.logout();
    secret = null;
}
