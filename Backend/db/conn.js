const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });

const url = process.env.REACT_APP_BACKEND_ATLAS_URL;
const frontend = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var _db;

module.exports = {
	connectToServer: function (callback) {
		frontend.connect(function (err, db) {
			//verify the db object
			if (db) {
				_db = db.db("Bank");
				console.log("Successfully connected to MongoDB");
			}
		});
	},

	getDb: function () {
		return _db;
	},
};