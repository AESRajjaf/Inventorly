import mongoose from "mongoose";

interface CategoryPdt {
  name: string;
  products: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: "Product";
    }
  ];
  user: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "Usuario";
  };
}

const categorySchema = new mongoose.Schema<CategoryPdt, {}, {}>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
