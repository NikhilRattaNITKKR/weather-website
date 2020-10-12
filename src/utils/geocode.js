const request = require('request');


const geocode=(address,callback)=>{

  const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibmlraGlsLXJhdHRhIiwiYSI6ImNrZTB5aWNvNTA5eG8yem1ubjN2N3d2OHMifQ.YL0wJhrdOQHrUj-fwx6T3Q&limit=1'

  request({url,json:true},(error,{body})=>{
    if (error) {
  callback('unable to connect to the weather server');
    }
    else if (body.features.length===0 ||body.message) {
       callback('unable to find location');
    }
    else {
      callback(undefined,{
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        location:body.features[0].place_name
      });

    }
  });
}
module.exports =geocode;
