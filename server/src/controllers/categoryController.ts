import Category from "../models/Category";
import { Request, Response } from "express";

const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.find().where("user").equals(req.user);
  res.json(categories);
};

const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    const error = new Error("Categoria no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (category.user.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no permitida");
    return res.status(401).json({ msg: error.message });
  }

  res.json(category);
};

const addCategory = async (req: Request, res: Response) => {
  const category = new Category(req.body);
  category.user = req.user._id;

  try {
    const savedCtgy = await category.save();
    res.json(savedCtgy);
  } catch (error) {
    console.log(error);
  }
};

const editCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    const error = new Error("Categoria no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (category.user.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no permitida");
    return res.status(401).json({ msg: error.message });
  }

  category.name = req.body.name || category.name;

  try {
    const savedCtgy = await category.save();
    res.json(savedCtgy);
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    const error = new Error("Categoria no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (category.user.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no permitida");
    return res.status(401).json({ msg: error.message });
  }

  try {
    await category.deleteOne();
    res.json({ msg: "La categoria ha sido eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export {
  getCategories,
  getCategory,
  addCategory,
  editCategory,
  deleteCategory,
};
