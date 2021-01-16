const Registration = require("../models/registration.model.js");

exports.AddRegistration = (req, res) => {
	// Validate request

	if (!req.body) {
		res.status(400).send({
			message: "Nothing Content can not be empty!",
		});
	}

	const registration = new Registration({
		flag: req.body.flag,
		registration_id: req.body.registration_id,
		name: req.body.name,
		mobileno: req.body.mobileno,
		companyname: req.body.companyname,
		company_typeid: req.body.company_typeid,
		seaport_id: req.body.seaport_id,
		officetype: req.body.officetype,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		pincode: req.body.pincode,
		emailid: req.body.emailid,
		phoneno: req.body.phoneno,
		contact_person: req.body.contact_person,
		contact_person_mobileno: req.body.contact_person_mobileno,
		gstno: req.body.gstno,
		arn_no: req.body.arn_no,
		attach_file: req.body.attach_file,
		Document_no: req.body.Document_no,
		issue_date: req.body.issue_date,
		Document_attach_file: req.body.Document_attach_file,
		Terms_Conditions: req.body.Terms_Conditions,
		status: req.body.status,
	});

	Registration.Register(registration, (err, data) => {
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Customer.",
			});
		else res.send(data);
	});
};

exports.GetRegistered = (req, res) => {
	console.log(req.body);
	Registration.GetData(req.params.registration_id, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found Customer with id ${req.params.registration_id}.`,
				});
			} else {
				res.status(500).send({
					message:
						"Error retrieving Customer with id " + req.params.registration_id,
				});
			}
		} else res.send(data);
	});
};
