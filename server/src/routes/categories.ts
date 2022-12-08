import { Router } from "express";
import {
  getCategories,
  getCategory,
  addCategory,
  editCategory,
  deleteCategory,
} from "../controllers/categoryController";
import checkAuth from "../middleware/checkAuth";

const router = Router();

router.route("/").get(checkAuth, getCategories).post(checkAuth, addCategory);

router
  .route("/:id")
  .get(checkAuth, getCategory)
  .put(checkAuth, editCategory)
  .delete(checkAuth, deleteCategory);

export { router };
