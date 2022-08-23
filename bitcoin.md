### What is bitcoind, bitcoin-qt, bitcoin-cli?

**bitcoind** is a Bitcoin service daemon, which is a program that runs in the background and with which a user can't usually interact directly during it's runtime. This is a full node server that downloads that creates a P2P network and synchronizes the blockchain and verifies transactions and blocks.

**bitcoin-cli** is a command-line interface for Bitcoin Core client that connects to a running instance of bitcoind daemon. User can interact with this program and do any necessary functions with it that will control the bitcoind service as well as the possibility of using a Bitcoin wallet to send and receive funds, among other functions that Bitcoin Core client provides.

**bitcoin-qt** is a program that, unlike bitcoind and blitcoin-cli, has a graphical environment. It acts as both bitcoind and bitcoin-cli, as it is running a full node service while providing a user with a graphical environment to control that service, as well as other wallet and non-wallet functions. 



**Communicating with bitcoind**
When bitcoind starts, it also starts a web server that listens on TCP port 8332 by default. When you use bitcoin-cli, it will connect to the web server and send your command to the web server over http and display relevant parts of the response to you.


Pay attention to the port witch ur bitcoin core uses 
list of steps :

<li> start bitcoin server : `./bitcoind -testnet -daemon `
<li> Create testnet wallet with feeds: `./bitcoin-cli -testnet  createwallet "testnet"`
<li> get adres: `./bitcoin-cli getnewaddress`
<li> fet info : `././bitcoin-cli getwalletinfo`
