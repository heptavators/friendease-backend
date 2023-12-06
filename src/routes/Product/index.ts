import express, { Router } from 'express';
import { ProductController } from "../../controllers/Product";
import { ProductRepository } from "../../repositories/Product";
import { ProductService } from "../../services/Product";



const ProductRouter = Router();


const productRepository = new ProductRepository();
const productService = ProductService.getInstance(productRepository);


const productController = new ProductController(productService);

ProductRouter.get("/product", async (req, res) => productController.GetAllProductController(req, res));
ProductRouter.get("/product/:id", async (req, res) => productController.GetByIdProductController(req, res));
ProductRouter.post("/product", async (req, res) => productController.CreateProductController(req, res));
ProductRouter.put("/product/:id", async (req, res) => productController.EditProductController(req, res));
ProductRouter.delete("/produc/:idt", async (req, res) => productController.DeleteProductController(req, res));



export default ProductRouter