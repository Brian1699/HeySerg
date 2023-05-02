const cors = require("cors");
const serverEnvironment = require("./types/serverEnvironment");

/**
 * Returns a cors object to use on a express server.
 * 
 * The function checks if the environment is production to select the allow domains from
 * our allow list.
 * 
 * @param {string} environment - A string containing the type of environment the server is in
 * @returns cors object
 */
const corsConfig = (environment) => {
  let allowList = [];

  try {
    if (environment === undefined || environment === null) {
      throw new Error("environment is needed");
    }

    if (environment === serverEnvironment.production) {
      const corsAllowList = require("./types/corsAllowList");
      allowList = corsAllowList;
    } else {
      allowList = ["https://heyserg.vercel.app/", "http://localhost:3000"];
    }

    // Check origin of the request
    const corsOptions = {
      origin: function (origin, callback) {
        if (allowList.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      }
    };

    return cors(corsOptions);
  } catch (error) {
    return null;
  }
};

module.exports = corsConfig;