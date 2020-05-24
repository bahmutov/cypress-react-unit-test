const preprocessor = require('../../../../plugins/babelrc')
module.exports = (on, config) => {
  preprocessor(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
