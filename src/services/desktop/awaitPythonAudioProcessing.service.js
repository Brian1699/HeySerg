const axios = require('axios');

const awaitPythonAudioProcessing= async(audioArduino)=>{
    const response = await axios.post('https://1b10-200-68-164-39.ngrok-free.app/process-data', {
    data: audioArduino,
    status: 0
    });
    const processedData = response.data;

    return processedData;
}


module.exports= awaitPythonAudioProcessing;