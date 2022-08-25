var axios = require("axios");

async function retrieveTxValue(txHash) {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/txs/${txHash}`)
        .then(function (response) {
            // console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
        console.log(response.inputs[0].output_value / (10 ** 8));
        return response.inputs[0].output_value / (10 ** 8);
}

retrieveTxValue("d030023d96b9170af9ec2fe5d9b62a5eacbcbf144c68f3f45d68bca72d1d3649")
