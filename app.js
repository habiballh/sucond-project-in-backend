const request = require("request");

const geocode = require("./data2/geocode")
const forecast = require("./data1/forecast")



geocode(process.argv[2], (error, data) => {
  console.log("ERROR: " , error);
  console.log("DATA: " , data);

  forecast( data.latitude , data.longtitude, (error , data)=>{
    console.log("ERROR: " , error)
    console.log("DATA: " , data)
  })
});

