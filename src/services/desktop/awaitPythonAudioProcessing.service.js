const axios = require('axios');

const awaitPythonAudioProcessing= async(audioArduino)=>{
    const response = await axios.post('https://a34c-45-175-233-158.ngrok-free.app', {audioArduino });
    const processedData = response.data.pred;

    return processedData;
}


module.exports= awaitPythonAudioProcessing;