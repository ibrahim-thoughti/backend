const UserLogin = require("../models/userlogin.model.js");

exports.AddUserLogin = (req, res) => {
	// Validate request

	if (!req.body) {
		res.status(400).send({
			message: "Nothing Content can not be empty!",
		});
	}

	const userlogin = new UserLogin({
		user_name: req.body.user_name,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
		status: req.body.status,
	});

	UserLogin.CreateLogin(userlogin, (err, data) => {
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Customer.",
			});
		else res.send(data);
	});
};
