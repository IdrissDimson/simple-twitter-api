require('dotenv').config()

const express = require('express')
var axios = require('axios');

const app = express()
const port = 3000
const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/1.1/statuses/show.json?id=";

app.get('/', (req, res) => {
  let config = {
    method: 'get',
    url: `https://api.twitter.com/1.1/statuses/show.json?id=${req.query.id}&include_entities=true`,
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };

  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})