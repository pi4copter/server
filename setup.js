var realm = require('realm-js');
var server = require('realm-server');
var realmMongo = require("realm-mongo");

require("./build/backend.js");
require("./build/universal.js");

realm.start('app.misc.Setup');
