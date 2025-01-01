import Caterer from "../models/caterers.model.js";
import mongoose from "mongoose";


export const getCaterer = async (req, res) => {
    const {categoryId} = req.params;
    try {

        const caterer = await Caterer.find({categoryId});

  
  
      res.status(200).json({
        //  _id: caterer._id,
        //  name: caterer.name,
        //  categoryName: caterer.categoryName,
        //  menu: caterer.menu
        caterer
        
        });

    } catch (error) {
      console.log("Error in getCaterer controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


