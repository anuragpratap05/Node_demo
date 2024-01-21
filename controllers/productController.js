const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

router.post("/", async (req, res) => {
	console.log("req.header-->", req.headers);
	console.log("req.body-->", req.body);
	console.log("req.params-->", req.params);
	const product = await productService.createProduct(req.body);
	res.send(product);
});

router.get("/", async (req, res) => {
	const products = await productService.getAllProducts();
	res.json(products);
});

router.put("/:id", async (req, res) => {
	const updatedProduct = await productService.updateProduct(
		req.params.id,
		req.body,
	);
	res.json(updatedProduct);
});

router.delete("/:id", async (req, res) => {
	try {
		await productService.deleteProduct(req.params.id);
		res.json({ message: "Product deleted successfully" });
	} catch (error) {
		console.log("error-->", error);
		console.log("msg-->", error.message);
		res.send(error.message);
	}
});
module.exports = router;
