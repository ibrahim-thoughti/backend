const sql = require("../utils/db.js");

const Registration = function (register) {
	this.flag = register.flag;
	this.registration_id = register.registration_id;
	this.name = register.name;
	this.mobileno = register.mobileno;
	this.companyname = register.companyname;
	this.company_typeid = register.company_typeid;
	this.seaport_id = register.seaport_id;
	this.officetype = register.officetype;
	this.address = register.address;
	this.city = register.city;
	this.state = register.state;
	this.country = register.country;
	this.pincode = register.pincode;
	this.emailid = register.emailid;
	this.phoneno = register.phoneno;
	this.contact_person = register.contact_person;
	this.contact_person_mobileno = register.contact_person_mobileno;
	this.gstno = register.gstno;
	this.arn_no = register.arn_no;
	this.attach_file = register.attach_file;
	this.Document_no = register.Document_no;
	this.issue_date = register.issue_date;
	this.Document_attach_file = register.Document_attach_file;
	this.Terms_Conditions = register.Terms_Conditions;
	this.status = register.status;
};

Registration.Register = (R, result) => {
	console.log(R);
	sql.query(
		"call usp_registration_form_details(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
		[
			R.flag,
			R.registration_id,
			R.name,
			R.mobileno,
			R.companyname,
			R.company_typeid,
			R.seaport_id,
			R.officetype,
			R.address,
			R.city,
			R.state,
			R.country,
			R.pincode,
			R.emailid,
			R.phoneno,
			R.contact_person,
			R.contact_person_mobileno,
			R.gstno,
			R.arn_no,
			R.attach_file,
			R.Document_no,
			R.issue_date,
			R.Document_attach_file,
			R.Terms_Conditions,
			R.status,
		],
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

Registration.GetData = (registration_id, res) => {
	sql.query(
		"call usp_registration_form_details(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
		[
			"select",
			registration_id,
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
		],
		(err, data) => {
			if (err) {
				console.log("err:", err);
			} else {
				if (res.length) {
					console.log("found customer: ", data);
					res.send(data);
					return;
				}
			}
		}
	);
};

module.exports = Registration;
