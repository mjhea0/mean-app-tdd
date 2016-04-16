var mongoose = require('mongoose');


// drop database
function dropDatabase(done) {
  mongoose.connection.db.dropDatabase()
  .then(function(){
    if(done) {
      done();
    }
  });
}

module.exports = {
  dropDatabase: dropDatabase
};