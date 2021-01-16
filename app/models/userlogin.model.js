const sql = require("./db.js");

const UserLogin = function (userlogin) {
	this.user_name = userlogin.user_name;
	this.password = userlogin.password;
	this.confirm_password = userlogin.confirm_password;
	this.status = userlogin.status;
};

UserLogin.CreateLogin = (R, result) => {
	console.log(R);
	sql.query(
		"call UspInsertUser_Master(?,?,?,?)",
		[R.user_name, R.password, R.confirm_password, R.status],
		(err, res) => {
			if (err) {
				console.log("err:", err);
			} else {
				console.log("results:", res);
				result(null, res);
				return;
			}
		}
	);
};
module.exports = UserLogin;
