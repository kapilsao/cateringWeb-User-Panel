import Caterer from "../models/caterers.model.js";


export const getAllCaterers = async (req, res) => {
    try {

      const caterers = await Caterer.find({});

  
  
      res.status(200).json({
        // categoryId: caterers._id,
        // name: caterers.name,
        // categoryName: caterers.categoryName,
        // menu: caterers.menu
        caterers
        });

    } catch (error) {
      console.log("Error in getAllCaterers controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


