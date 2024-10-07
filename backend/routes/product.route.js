import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put("/:id", updateProduct);//'put' for all the fields and 'patch' for some fields
router.delete("/:id", deleteProduct);


export default router;