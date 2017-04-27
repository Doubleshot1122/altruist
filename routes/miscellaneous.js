'use strict';
const rp = require('request-promise')
function getLatitudeLongitude(address) {
  var opts = {
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAXIGEuyzxaJGF1VuRU-ZOJwWUWqymrGAY`,
    json: true,
  };
  return rp(opts)
   .then(result => {
     console.log(result);
     return result;
   })
   .catch(function(err) {
    console.error(err);
   })
}
function getDistances(locations) {
  let str = '';
  str = locations.destinations.map(el =>{
    return el.lat + ',' +  el.long;
  })
  str = str.join('|');
  console.log(str);
  var opts = {
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/distancematrix/json\?units\=imperial\&origins\=${locations.origin.lat},${locations.origin.long}\&destinations\=${str}\&key\=AIzaSyB7gemB_oHc6eDwe2Xo4elMp7TCzw9OMQ4`,
    json: true,
  };
  return rp(opts)
   .then(result => {
     return result;
   })
   .catch(function(err) {
    console.error(err);
   })
}

module.exports = {getLatitudeLongitude, getDistances};
