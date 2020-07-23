import log from 'loglevel';

/**
 * This function executes a standard GET call with the given axios
 * adapter, endpoint, and errorPrefix to use when logging an error
 *
 * @param {*} axios the axios adapter to use (see utils/axios.js)
 * @param {*} endpoint the endpoint to call with a GET http call
 * @param {*} options the options object supplied to the GET request
 * @param {*} errorPrefix the prefix to use when logging an error
 */
export const get = async (axios, endpoint, options, errorPrefix) => {
  return new Promise((resolve, reject) => {
    axios
      .get(endpoint, options)
      .then(response => {
        log.debug(response.data);
        if (response.status === 200 || response.status === 206) {
          resolve(response.data);
        } else {
          log.error(`${errorPrefix}: ${JSON.stringify(response.data)}`);
          reject();
        }
      })
      .catch(e => {
        log.error(`${errorPrefix}: ${JSON.stringify(e)}`);
        reject(e);
      });
  });
};
