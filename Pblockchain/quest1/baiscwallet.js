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
            format: 'der',
        }
    });

    const address = '01' + crypto.createHash('sha256').update(publicKey).digest('hex');
    const prv = "Private Key is: "
    const pub = "Public Key is: "
    fs.writeFile("./wallet.pem", "\n\n" +prv  + privateKey + "\n\n" + pub + publicKey, (err) => {})
    return {address}
}
console.log(generateAddress())
