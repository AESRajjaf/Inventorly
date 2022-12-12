import Products from "../models/Products";
import { Request, Response } from "express";

const getProducts = async (req: Request, res: Response) => {
  const products = await Products.find().where("user").equals(req.user);
  res.json(products);
};

const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findById(id);

  if (!product) {
    const error = new Error("Producto no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (product.user.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no permitida");
    return res.status(401).json({ msg: error.message });
  }

  res.json(product);
};

const addProduct = async (req: Request, res: Response) => {
  const product = new Products(req.body);
  product.user = req.user._id;

  try {
    const savedPdt = await product.save();
    res.json(savedPdt);
  } catch (error) {
    console.log(error);
  }
};

const editProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findById(id);

  if (!product) {
    const error = new Error("Producto no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (product.user.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no permitida");
    return res.status(401).json({ msg: error.message });
  }

  product.name = req.body.name || product.name;
  product.pdtRef = req.body.pdtRef || product.pdtRef;
  product.description = req.body.description || product.description;
  product.categories = req.body.categories || product.categories;
  product.quantity = req.body.quantity || product.quantity;
  product.purchasePrice = req.body.purchasePrice || product.purchasePrice;
  product.sellingPrice = req.body.sellingPrice || product.sellingPrice;

  try {
    const savedPdt = await product.save();
    res.json(savedPdt);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findById(id);

  if (!product) {
    const error = new Error("Producto no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (product.user.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no permitida");
    return res.status(401).json({ msg: error.message });
  }

  try {
    await product.deleteOne();
    res.json({ msg: "El producto ha sido eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

export { getProducts, getProduct, addProduct, editProduct, deleteProduct };
