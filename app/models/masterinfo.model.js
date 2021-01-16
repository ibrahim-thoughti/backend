const sql = require("./db.js");

const MasterInfo = function (masterinfo) {
	this.flag = masterinfo.flag;
	this.job_no = masterinfo.job_no;
	this.job_date = masterinfo.job_date;
	this.sender_id = masterinfo.sender_id;
	this.receiver_id = masterinfo.receiver_id;
	this.reporting_event = masterinfo.reporting_event;
	this.message_type = masterinfo.message_type;
	this.port_of_reporting = masterinfo.port_of_reporting;
	this.submitter_type = masterinfo.submitter_type;
	this.submitter_pan = masterinfo.submitter_pan;
	this.representative_pan = masterinfo.representative_pan;
	this.mode_transport = masterinfo.mode_transport;
	this.type_transport_means = masterinfo.type_transport_means;
	this.transport_means_identity = masterinfo.transport_means_identity;
	this.conveyance_reference_number = masterinfo.conveyance_reference_number;
	this.total_no_of_containers = masterinfo.total_no_of_containers;
	this.total_no_of_hbl = masterinfo.total_no_of_hbl;
};
MasterInfo.InsertInfo = (R, result) => {
	console.log(R);
	sql.query(
		"call UspMaster_Info(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
		[
			"insert",
			R.job_no,
			R.job_date,
			R.sender_id,
			R.receiver_id,
			R.reporting_event,
			R.message_type,
			R.port_of_reporting,
			R.submitter_type,
			R.submitter_pan,
			R.representative_pan,
			R.mode_transport,
			R.type_transport_means,
			R.transport_means_identity,
			R.conveyance_reference_number,
			R.total_no_of_containers,
			R.total_no_of_hbl,
		],
		(err, res) => {
			if (err) {
				console.log("err:", err);
			} else {
				// console.log("results:", res);
				console.log("Data Inserted");
				result(null, res);
				return;
			}
		}
	);
};
/*MasterInfo.GetData = (job_no,res)=>{
    sql.query("call UspMaster_Info(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
['select',job_no,'','','','','','','','','','','','','','','',],(err,res)=>{
    if (err) {
        console.log("err:", err);
    } else {
        if (res.length) {
            console.log("Job Details Found: ", job_no);
            res.send(job_no);
            return;
          }
        }
    });
};*/
module.exports = MasterInfo;
