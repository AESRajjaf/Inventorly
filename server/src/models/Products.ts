import mongoose from "mongoose";

interface ProductModel {
  name: string;
  description: string;
  pdtRef: string;
  category: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "Category";
  };
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
  user: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "Usuario";
  };
}

const productSchema = new mongoose.Schema<ProductModel, {}, {}>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    pdtRef: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
      trim: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Product", productSchema);
export default Products;