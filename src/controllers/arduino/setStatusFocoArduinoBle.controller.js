const { request, response } = require('express');
const infoFocoArduinoHelpers = require('../../helpers/infoFocoArduino.helpers');

/**
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const setStatusFocoArduinoBle= async (req = request, res = response) => {
  try {

    const setFoco = req.body.data;

    infoFocoArduinoHelpers.setData(setFoco);

    return res.status(200).json({
      ok: true,
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

module.exports = setStatusFocoArduinoBle;