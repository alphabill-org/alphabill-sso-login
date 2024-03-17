export const AB_WEB3AUTH_CONF = {
    AB_testnet = {
	chainNamespace: CHAIN_NAMESPACES.OTHER,
        chainId: "0x1",
        rpcTarget: "https://money-backend.testnet.alphabill.org",
        displayName: "Alphabill Money partition testnet",
        ticker: "AB",
        tickerName: "Alphabill",
    },
    AB_mainnet = {
	// NOT IMPLEMENTED YET
    },
}

export setRpcsUrl = (conf, url) => {
    conf.rpcTarget = url;
    return conf;
}

export setDisplayName = (conf, name) => {
    conf.displayName = name;
    return conf;
}

export setTicker = (conf, ticker) => {
    conf.ticker = ticker;
    return conf;
}

export setTicker = (conf, tickerName) => {
    conf.tickerName = tickerName;
    return conf;
}
