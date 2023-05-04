const { request, response } = require('express');
const retrieveStatusFocoArduino = require('../../services/movil/retrieveStatusFocoArduino.service');
const infoFocoArduinoHelpers = require('../../helpers/infoFocoArduino.helpers');

/**
*
*
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const getStatusFocoArduino = async (req = request, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      response: {
        data: infoFocoArduinoHelpers.getData(),
        message: '[success]',
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

module.exports = getStatusFocoArduino;