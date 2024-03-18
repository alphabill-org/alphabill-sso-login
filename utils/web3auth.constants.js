import { CHAIN_NAMESPACES } from "@web3auth/base";

export const AB_WEB3AUTH_CONF = {
    AB_testnet: {
	chainNamespace: CHAIN_NAMESPACES.OTHER,
        chainId: "0x1",
        rpcTarget: "https://money-backend.testnet.alphabill.org",
        displayName: "Alphabill Money partition testnet",
        ticker: "AB",
        tickerName: "Alphabill",
    },
    AB_mainnet: {
	// NOT IMPLEMENTED YET
    },
}

export function setRpcsUrl(conf, url){
    const newConf = {
	...conf,
	rpcTarget: url
    }
    return newConf;
}

export function setDisplayName(conf, name){
    const newConf = {
	...conf,
	displayName: name
    }
    return newConf;
}

export function setTicker(conf, ticker){
    const newConf = {
	...conf,
	ticker
    }
    return newConf;
}

export function setTickerName(conf, tickerName){
    const newConf = {
	...conf,
	tickerName
    }
    return newConf;
}
