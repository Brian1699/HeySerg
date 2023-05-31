const axios= require("axios");


const setStatusFocoArduino= async (setFoco)=>{
  
  await axios.post('https://a6d6-200-68-140-153.ngrok-free.app/getLight', {  setFoco });
  
  return {
    ok: true,
    message:"[success]",
    redirect: false,
  }
}

module.exports= setStatusFocoArduino;