import mongoose from "mongoose";

interface CategoryPdt {
  name: string;
}

const categorySchema = new mongoose.Schema<CategoryPdt, {}, {}>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
