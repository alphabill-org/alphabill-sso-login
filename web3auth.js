import { CHAIN_NAMESPACES } from "@web3auth/base";
import { CommonPrivateKeyProvider } from "@web3auth/base-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

let web3auth = null;
let secret = null;

async function init(api_key, chainConfig = AB_WEB3AUTH_CONF.AB_testnet, network = "sapphire_devnet") {

    clientId = api_key;

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

async function recoverSecret(){
    if(!web3auth) throw new Error("Web3auth was not initialized. Initialize web3auth first.");
    await web3auth.connect();

    const provider = web3auth.provider;
    secret = await provider.request({method: 'private_key'});

    return secret;
}

function getSecret(){
    return secret;
}

function forgetSecret(){
    if(!web3auth) throw new Error("Web3auth was not initialized. Initialize web3auth first.");
    await web3auth.logout();
    secret = null;
}

export default {
    init,
    recoverSecret,
    getSecret,
    forgetSecret
}
