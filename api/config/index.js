if (process.env.NODE_ENV === 'production') {
  module.exports = require('/environments/production');
} else if (process.env.NODE_ENV === 'ci') {
  module.exports = require('/environments/continous_integration');
} else {
  module.exports = require('/environments/development');
}
