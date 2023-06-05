const axios= require("axios");


const setStatusFocoArduino= async (setFoco)=>{
  
  await axios.get('https://a002-200-68-140-53.ngrok-free.app/getLight');
  
  return {
    ok: true,
    message:"[success]",
    redirect: false,
  }
}

module.exports= setStatusFocoArduino;