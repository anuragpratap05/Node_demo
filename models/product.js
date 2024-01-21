const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: String,
	price: Number,
	description: String,
	// Add more fields as needed
});

module.exports = mongoose.model("Product", ProductSchema);
