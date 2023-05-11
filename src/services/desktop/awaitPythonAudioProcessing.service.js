const axios = require('axios');

const awaitPythonAudioProcessing= async(audioArduino)=>{
    const response = await axios.post('https://a34c-45-175-233-158.ngrok-free.app/process-data', {
    data: audioArduino,
    status: 0
    });
    const processedData = response.data;

    return processedData;
}


module.exports= awaitPythonAudioProcessing;