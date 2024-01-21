const mongoose = require("mongoose");

const connectToDB = () => {
	const url = "mongodb://0.0.0.0:27017/node_demo";
	mongoose.connect(url, {});
	console.log("DONE");
};

module.exports = connectToDB;
