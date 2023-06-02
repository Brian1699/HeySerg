const axios= require("axios");


const setStatusFocoArduino= async (setFoco)=>{
  
  await axios.get('https://4ad4-200-68-164-39.ngrok-free.app/getLight');
  
  return {
    ok: true,
    message:"[success]",
    redirect: false,
  }
}

module.exports= setStatusFocoArduino;