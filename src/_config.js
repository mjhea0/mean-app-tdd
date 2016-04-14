var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/first-mean-app-testing',
  development: 'mongodb://localhost/first-mean-app',
  production: process.env.mongoURI
};

module.exports = config;