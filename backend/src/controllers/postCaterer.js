import Caterer from "../models/caterers.model.js"


export const postCaterer = async (req,res)=>{

    const {name , categoryId , categoryName , menu } = req.body;
    try {
             if (!name || !categoryId || !categoryName || !menu) 
            return res.status(400).json({ message: "All fields are required" });
        

            const newCaterer = await new Caterer({
                name,
                categoryId,
                categoryName:categoryName,
                menu
            });

              if (newCaterer) await newCaterer.save();
              res.status(201).json({
                _id: newCaterer._id,
                categoryId: newCaterer.categoryId,
                name: newCaterer.name,
                categoryName: newCaterer.categoryName,
                menu: newCaterer.menu,
              });



    } catch (error) {
        console.log("Error in postCaterer controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
























  