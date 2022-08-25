var axios = require("axios");

async function retrieveBlockDate(height) {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/blocks/${height}`
    )
        .then(function (data) {
            // data
            return data;
        }).catch(function (error) {
            // error
            console.log(error);
        });
    console.log(response.data.time)
   return new Date(response.data.time);
}
retrieveBlockDate(1881467) 