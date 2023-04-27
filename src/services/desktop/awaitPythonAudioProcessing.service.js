const axios = require('axios');

const awaitPythonAudioProcessing= async(audioArduino)=>{
    const response = await axios.post('http://192.168.100.7:5000/process-data', {  audioArduino });
    const processedData = response.data.processed_data;

    return processedData;
}


module.exports= awaitPythonAudioProcessing;