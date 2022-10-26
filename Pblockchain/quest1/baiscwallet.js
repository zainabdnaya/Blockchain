var crypto = require('crypto');
const fs = require("fs");

function generateAddress() {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'secp256k1',
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});
const address = crypto.createHash('sha256').update(publicKey).digest('hex')
fs.writeFileSync("./wallet.pem",privateKey)
return {address: '01' + address}
}

function createTransaction(amount, recipient) {
  var pem = fs.readFileSync('./wallet.pem');
  var key = pem.toString('ascii');
    const sender = generateAddress().address;
    const hexAmount = amount.toString(16);
    const signature = crypto.createSign('SHA256').update(sender + recipient + hexAmount).sign(key,'hex');
    return sender + recipient + hexAmount + signature;
}

let address = generateAddress()
console.log(address)

let transaction = createTransaction(200,"01ffa17f4e0bbb2f049f5d1f9d4ab9fad967e6b0ed9a8fc94563d0b4e47b62e169")
console.log(transaction)
