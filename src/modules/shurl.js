/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 2: Dynamic API
*/

const crypto = require('crypto');
const url = require('../models/url');

module.exports = (url, res) => {
  // set the shortened url prefix
  let prefix = 'shurl.io/';
  // get the url data
  let hashUrl = url.body.url;
  // create the hash
  let hash = crypto.createHmac('sha256', hashUrl).digest('hex');
  // shorten the hash length to 7
  hashUrl = hash.substr(0,7);
  // create the shortened url
  let shortened = prefix + hashUrl;
  // create data to send
  let data = {
      "url": url.body.url,
      "tynyUrl": shortened,
      "shortUrl": hashUrl,
      "key": url.body.key
  }
  // return the data
  return(data);
}
