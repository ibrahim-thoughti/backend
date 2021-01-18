const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var dbConnection = mysql.createPool({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB,
	connectionLimit: dbConfig.CONNECTION_LIMIT,
});

dbConnection.on("connection", function (connection) {
	console.error("DB Connected...");
	connection.on("error", function (err) {
		console.error(new Date(), "MySQL error", err.code);
	});
	connection.on("close", function (err) {
		console.error(new Date(), "MySQL close", err);
	});
});

module.exports = dbConnection;
