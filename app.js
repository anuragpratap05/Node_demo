const express = require("express");
const connection = require("./connection");
const productController = require("./controllers/productController");
const app = express();
app.use(express.json());

app.use("/products", productController);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

app.get("/", async (req, res) => {
	// return "success";
	// logic to add two numbers
	res.send("success");
});

connection();
