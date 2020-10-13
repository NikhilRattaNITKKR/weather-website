const request = require('request');

const forecast=(latitude,longitude,callback)=>{

  const url='http://api.weatherstack.com/current?access_key=95f98fbcd08e1837e6ecdce8d7067caa&query=' + latitude +',' + longitude;


  request({url,json:true},(error,{body})=>{
    if (error) {
    callback('unable to connect to the weather server');
  }
  else if(body.error){
     callback('unable to find location');
  }
  else{
    const data='the current temperature is '+ body.current.temperature +'C it feels like '+ body.current.feelslike+'C Weather Description: '+ body.current.weather_descriptions;
      callback(undefined,data);
  }
  });
}
module.exports=forecast;
