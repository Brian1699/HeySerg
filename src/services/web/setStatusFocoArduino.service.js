const axios= require("axios");

const setStatusFocoArduino= async (setFoco)=>{
   await axios.get('https://a6d6-200-68-140-153.ngrok-free.app/getLight');

  return {
    ok: true,
    message:"[success]",
    data: null,
  }
}

module.exports= setStatusFocoArduino;