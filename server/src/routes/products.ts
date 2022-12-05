import { Router } from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/productsController";
import checkAuth from "../middleware/checkAuth";

const router = Router();

router.route("/").get(checkAuth, getProducts).post(checkAuth, addProduct);

router
  .route("/:id")
  .get(checkAuth, getProduct)
  .put(checkAuth, editProduct)
  .delete(checkAuth, deleteProduct);

export { router };

