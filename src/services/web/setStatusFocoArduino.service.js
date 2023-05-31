const axios= require("axios");

const setStatusFocoArduino= async (setFoco)=>{
   await axios.get('https://b824-45-175-233-158.ngrok-free.app/getLight');

  return {
    ok: true,
    message:"[success]",
    data: null,
  }
}

module.exports= setStatusFocoArduino;