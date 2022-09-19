# Blockchain

## What is Blockchain?

    Blockchain is a distribu=ted ledger that powers bitcoin. Satoshi invented bitcoin, and blockchain was the key component. Blockchain is highly secured and works around a decentralized consensus algorithm where no one can own the control completely.

The Name Blockchain contains two parts: Block and Chain 

    Block: Is a set of transactions that happen over the network .

    Chain: Is where blocks are linked to each other in a way that the next block contains hash of the previous one.

    Even a small change in the previous block can change its hash and break the whole chain, making it difficult to tamper data.


## What the prerequisites needed to Understand Blockchain in depth?

**Public-key Crybtography** : Used to claim the authenticity of the user. It involves a pair of public and private keys. The user creates a signature with the private key, and the network uses the public key of the user to validate that the content is untouched.The RSA algorithm can be used for a kind of unforgeable digital signature .

**Digital Signature** :  Is a mathematical technique used to validate the authenticity and integrity of a message, software or digital document. It's the digital equivalent of a handwritten signature or stamped seal, but it offers far more inherent security. A digital signature is intended to solve the problem of tampering and impersonation in digital communications.

**Cryptograohic Hash functions** :  This is a mathematical function that takes an input and transforms it into an output. There is no way to recover the message from the hash valu No two or more messages can have the same hash(message digest), Irrespective of the data size, this function returns the same hash length.


## Hyperledger Fabric — The Transaction Flow

Here is the simplified transaction flow in Hyperledger Fabric (how a transaction is submitted and written into the Blockchain ledger, I assume that there is no error):
    The client sends a transaction request to Backend with Hyperledger Fabric SDK. (Client → SDK)

    Backend forms a transaction proposal and sends it to the Peer Node. (SDK → Peer)

    Peer node executes smart contract (chaincode) and sends the result to Backend. (Peer → SDK)

    Backend sends the transaction to Orderer node. (SDK → Orderer)

    Orderer node will collect some number of transactions (or trigger timeout) and orders for those transactions. Then, it packs those transactions into a Block and broadcasts to Peer nodes. (Orderer → Peer)

    Peer nodes validate the transaction, commit the transaction into the Blockchain ledger, and send transaction committed notification to Backend. (Peer → SDK)

    Backend sends success notification to the Client. (SDK → Client)
Overall, the flow: Client → SDK → Peer → SDK → Orderer → Peer → SDK → Client. The path is kind of long…


for more informations: <link>https://kctheservant.medium.com/understanding-first-network-example-in-hyperledger-fabric-part-1-c03391af798</link>