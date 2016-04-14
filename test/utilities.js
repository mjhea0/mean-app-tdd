var mongoose = require('mongoose');


// drop database
function dropDatabase(done) {
  mongoose.connection.db.dropDatabase();
  if(done) {
    done();
  }
}

module.exports = {
  dropDatabase: dropDatabase
};