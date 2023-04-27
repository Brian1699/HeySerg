const axios= require("axios");

const setStatusFocoArduino= async (setFoco)=>{
/*   const response = await axios.post('http://192.168.100.7:5000/process-data', {  setFoco });
  const processedData = response.data.processed_data; */

  return {
    ok: true,
    message:"[success]",
    redirect: false,
  }
}

module.exports= setStatusFocoArduino;