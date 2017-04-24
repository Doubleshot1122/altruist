'use strict';
const rp = require('request-promise')
function getLatitudeLongitude(address) {
  var opts = {
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAXIGEuyzxaJGF1VuRU-ZOJwWUWqymrGAY`,
    dataType: 'json',
  };
  return rp(opts)
   .then(results => {
     return results;
   })
   .catch(function(err) {
    console.error(err);
   })
}
module.exports = getLatitudeLongitude;