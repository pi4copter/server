"use realm backend-raw";

(function() {
   var mongo = require('mongodb');

   var MONGO_DB_NAME = (process.env.MONGO_DATABASE || 'pi-server');
   var MONGO_PORT = process.env.MONGO_PORT || 27017;
   var MONGO_URI = 'mongodb://localhost:' + MONGO_PORT + '/' + MONGO_DB_NAME;
   if (process.env.MONGO_PORT_27017_TCP_ADDR) {
      MONGO_URI = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':' + process.env.MONGO_PORT_27017_TCP_PORT + '/' +
         MONGO_DB_NAME;
   }
   var MONGODB_CONNECTION;

   realm.service("$realmMongoConnection", function() {

      return new Promise(function(resolve, reject) {
         if (!MONGODB_CONNECTION) {
            console.log("Connecting", MONGO_URI)
            mongo.MongoClient.connect(MONGO_URI, {
               server: {
                  auto_reconnect: true
               }
            }, function(err, _db) {
               MONGODB_CONNECTION = _db;
               return resolve(MONGODB_CONNECTION);
            });
         } else {
            return resolve(MONGODB_CONNECTION);
         }

      })
   });
})();
