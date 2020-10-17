// import the api
const { ApiPromise, WsProvider } = require('@polkadot/api');

// awaitable method to connect and read last block
async function start() {
    // define polkadot connection
    const provider = new WsProvider('wss://rpc.polkadot.io');
    // create connection using provider
    const api = await ApiPromise.create({ provider: provider });
    // get most recent block  
    const block = await api.rpc.chain.getBlock();
    // pretty print and output the JSON
    console.log(`Last block: ${JSON.stringify(block, null, 2)}`);

    return;
};

// connect (print any errors)
start().then(() => process.exit(0)).catch(console.error);
