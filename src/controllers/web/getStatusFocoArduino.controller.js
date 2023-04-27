const { request, response } = require('express');
const retrieveStatusFocoArduino = require('../../services/web/retrieveStatusFocoArduino.service');

/**
*
*
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const getStatusFocoArduino = async (req = request, res = response) => {

  try {
    const statusFoco= await retrieveStatusFocoArduino()

    if(!statusFoco){
      return res.status(400).json({
        ok: true,
        response: {
          data: statusFoco,
          message: "forbidden",
          redirect: false
        }
      });
    }

    return res.status(200).json({
      ok: true,
      response: {
        data: statusFoco,
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