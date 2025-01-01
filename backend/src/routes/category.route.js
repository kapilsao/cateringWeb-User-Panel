import express from 'express'
import Category from '../models/category.model.js';


const router = express.Router()


router.post('/categories' , async (req , res)=>{
    const { Name , description } = req.body;
    try {
        if (!Name || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const category = new Category({
            name : Name,
            description,
        });
        await category.save();

        res.status(201).json({
            _id: category._id,
            Name: category.name,
            
        });
    } catch (error) {
        console.log("Error in categories controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
})


router.get('/categories' , async (req,res)=>{
    
    try {
        const categories = await Category.find({});

        res.status(200).json({
           categories
            
        });


    } catch (error) {
        console.log("Error in GETcategories controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
        
    }


})

export default router 