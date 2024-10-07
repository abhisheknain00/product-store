import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch(err) {
        console.log("error is fetching products: " + err.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createProduct = async (req,res)=>{
    const product = req.body; //user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide all the fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch(err){
        console.log("Error in creating product:", err);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Invalid Product Id"});
    }

    try{
        const newProduct = await Product.findByIdAndUpdate(id, product, {new: true});//returns updated object
        res.status(200).json({success: true, data: newProduct});
    } catch (err){
        console.log("error is updating product: " + err.message);
        res.status(500).json({success: false, message: "Server Error"});
    }

};

export const deleteProduct = async (req,res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Invalid Product Id"});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted"});
    } catch (err){
        console.log("error is deleting product: " + err.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};