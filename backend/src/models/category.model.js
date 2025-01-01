import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  })
const Category = mongoose.model("Categories", categorySchema);

export default Category;
