const MasterInfo = require("../models/masterinfo.model.js");

exports.AddMasterInfo = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Nothing Content can not be empty!",
		});
	}

	const masterinfo = new MasterInfo({
		flag: req.body.flag,
		job_no: req.body.job_no,
		job_date: req.body.job_date,
		sender_id: req.body.sender_id,
		receiver_id: req.body.receiver_id,
		reporting_event: req.body.reporting_event,
		message_type: req.body.message_type,
		port_of_reporting: req.body.port_of_reporting,
		submitter_type: req.body.submitter_type,
		submitter_pan: req.body.submitter_pan,
		representative_pan: req.body.representative_pan,
		mode_transport: req.body.mode_transport,
		type_transport_means: req.body.type_transport_means,
		transport_means_identity: req.body.transport_means_identity,
		conveyance_reference_number: req.body.conveyance_reference_number,
		total_no_of_containers: req.body.total_no_of_containers,
		total_no_of_hbl: req.body.total_no_of_hbl,
	});
	MasterInfo.InsertInfo(masterinfo, (err, data) => {
		if (err)
			res.status(500).send({
				message:
					err.message || "Some error occurred while inserting the Master Info.",
			});
		else res.send(data);
	});
};

exports.GetData = (req, res) => {
	console.log(req.body);
	MasterInfo.GetData(req.params.job_no, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found Job no ${req.params.job_no}.`,
				});
			} else {
				res.status(500).send({
					message: "Error retrieving Job no " + req.params.job_no,
				});
			}
		} else res.send(data);
	});
};
