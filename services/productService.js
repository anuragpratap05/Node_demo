const Product = require("../models/product");
async function createProduct(productData) {
	const product = new Product(productData);
	return await product.save();
}

async function getAllProducts() {
	return await Product.find();
}

async function updateProduct(id, productData) {
	return await Product.findByIdAndUpdate(id, productData, { new: true });
}

async function deleteProduct(id) {
	try {
		const product = await Product.findById(id);
		if (!product) throw new Error("Product not found");
		console.log(product);
		await Product.findByIdAndDelete(id);
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createProduct,
	getAllProducts,
	updateProduct,
	deleteProduct,
};
