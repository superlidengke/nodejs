var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
// Connect to cloud database
var username = "nodejs"
var password = "cloud123";
var address = '@ds159371.mlab.com:59371/nodejs_learn';
connect();
// Connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	url="mongodb://10.35.16.99/test";
	mongoose.connect(url);
}
function connect2() {
	console.log("will connect");
	var connection =
		mongoose.createConnection('mongodb://10.35.16.99/test');
	connection.on("open", function( ) {
		console.log("Connection established");
		connection.close( );
		});
}
function disconnect() {
	mongoose.disconnect()
}