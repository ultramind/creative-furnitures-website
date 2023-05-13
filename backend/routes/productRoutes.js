import express, { query } from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";
import { isAuth, isAdmin } from "../utils.js";
import {
  adminGetProduct,
  adminGetProducts,
  createProduct,
  getProduct,
  getProductBySlug,
  getProductBycategory,
  getProducts,
  searchProduct,
} from "../controllers/productControllers.js";

const productRouter = express.Router();

// get all products
productRouter.get("/", getProducts);

// fetch indivual product by id
productRouter.get("/:id", getProduct);

productRouter.get("/admin/:id", isAuth, isAdmin, adminGetProduct);

// Create Product
productRouter.post("/", isAuth, isAdmin, createProduct);

// fetch all products by slug
productRouter.get("/slug/:slug", getProductBySlug);

// fetch Categories
productRouter.get("/categories", getProductBycategory);

// fetch all products (isAdmin)
productRouter.get("/admin", isAuth, isAdmin, adminGetProducts);

productRouter.get("/search", searchProduct);

export default productRouter;
