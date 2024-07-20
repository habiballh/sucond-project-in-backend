
const request = require("request")


const forecast=(latitude , longtitude , callback)=>{

    url =  "http://api.weatherapi.com/v1/current.json?key=dbab34a33bf347b682330148241707&q="+ latitude + " , "+ longtitude
    
    request({url , json: true}, (error , response)=>{
      if (error){
        callback("unable to load weather website", undefined)
      }else if (response.body.error){
        callback(response.body.error.message , undefined)
      }else{
        callback(undefined , response.body.location.name + " and "+response.body.current.condition.text +" and tem: `" +response.body.current.temp_c)
      }
    })
    }
      
  module.exports = forecast; 
