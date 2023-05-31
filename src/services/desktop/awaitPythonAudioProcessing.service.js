const axios = require('axios');

const awaitPythonAudioProcessing= async(audioArduino)=>{
    const response = await axios.post('https://7309-200-68-140-153.ngrok-free.app/process-data', {
    data: audioArduino,
    status: 0
    });
    const processedData = response.data;

    return processedData;
}


module.exports= awaitPythonAudioProcessing;