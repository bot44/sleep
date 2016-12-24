const lt = require('long-timeout');

function sleep(ms) {
  return new Promise(resolve => lt.setTimeout(resolve, ms || 0));
}

module.exports = sleep;
