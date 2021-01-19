const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ credentials: true, origin: true }));

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.get("/test", (req, res) => {
	res.json({
		message: "Welcome to bezkoder application.....TEST SUCCESS!!!",
	});
});
app.post("/test", (req, res) => {
	console.log(req.body);
	res.json({
		message: "Welcome to bezkoder application.....TEST SUCCESS POST",
	});
});

const router = require("./app/routes");
app.use(router);
console.log("DIR PATH : ", __dirname);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
