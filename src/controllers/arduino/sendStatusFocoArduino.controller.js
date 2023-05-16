const { request, response } = require("express");
const awaitPythonAudioProcessing = require("../../services/desktop/awaitPythonAudioProcessing.service");
const infoFocoArduino =require("../../helpers/infoFocoArduino.helpers");
/**
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const sendStatusFocoArduino = async (req = request, res = response) => {
  try {
    const audioArduino = req.body.data;
    if(!audioArduino){
      return res.status(400).json({
        ok: true,
        response: {
          data: null,
          message: "[forbidden]",
          redirect: false
        }
      });
    }
 
    infoFocoArduino.setData(req.body.status);
      
    const statusFoco = await awaitPythonAudioProcessing(audioArduino);

    return res.status(200).json({
      pred: statusFoco.pred,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      response: {
        data: null,
        message: "[server-error]",
        redirect: false
      }
    });
  }
}

module.exports = sendStatusFocoArduino;