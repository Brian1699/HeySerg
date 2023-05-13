const { request, response } = require('express');
const setStatusFocoArduino = require('../../services/movil/setStatusFocoArduino.service');

/**
*
*
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const updateStatusFocoArduino= async (req = request, res = response) => {
  try {

    const setFoco = req.body.data;

    if(setFoco >= 2){
      return res.status(400).json({
        ok: true,
        response: {
          data: null,
          message: "forbidden",
          redirect: false
        }
      });
    }

    const statusFoco= setStatusFocoArduino(setFoco);
    
    return res.status(200).json({
      ok: true,
      response: {
        data: statusFoco.data,
        message: "[success]",
        redirect: false
      }
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

module.exports = updateStatusFocoArduino;