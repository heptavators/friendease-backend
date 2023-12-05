import express, { Router } from 'express';
import { ProductController } from "../../controllers/Product";
import { ProductRepository } from "../../repositories/Product";
import { ProductService } from "../../services/Product";



const ProductRouter = Router();


const productRepository = new ProductRepository();
const productService = ProductService.getInstance(productRepository);


const productController = new ProductController(productService);

ProductRouter.post("/product", async (req, res) => productController.CreateProductController(req, res));



export default ProductRouter