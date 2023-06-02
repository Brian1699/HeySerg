const axios= require("axios");


const setStatusFocoArduino= async (setFoco)=>{
  
  await axios.post('https://4ad4-200-68-164-39.ngrok-free.app/getLight', {  setFoco });
  
  return {
    ok: true,
    message:"[success]",
    redirect: false,
  }
}

module.exports= setStatusFocoArduino;