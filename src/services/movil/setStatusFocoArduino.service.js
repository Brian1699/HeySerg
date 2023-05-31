const axios= require("axios");


const setStatusFocoArduino= async (setFoco)=>{
  
  await axios.post('http://192.168.100.7:5000/process-data', {  setFoco });
  
  return {
    ok: true,
    message:"[success]",
    redirect: false,
  }
}

module.exports= setStatusFocoArduino;