const request = require("axios");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2]

if(!address){
  console.log("Please provide an address")
}
else{
  geoCode(address, (error, response) => {
    if(response){
      forecast(response.latitude,response.longitude,(res)=>{
        console.log(res)
      });
    }
  });
}

