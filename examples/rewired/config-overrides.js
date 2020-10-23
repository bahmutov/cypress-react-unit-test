const debug = require('debug')('cypress-react-unit-test')

module.exports = function override(config, env) {
  debug('in config overrides, env "%s"', env)
  debug('config %o', config)

  // throw an error to stop the app
  // useful for debugging to avoid the dev server
  // from hiding the console output
  throw new Error('stop here')

  //do stuff with the webpack config...

  return config
}
