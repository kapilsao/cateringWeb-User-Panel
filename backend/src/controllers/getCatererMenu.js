import Caterer from "../models/caterers.model.js";


export const getCatererMenu = async (req , res)=>{
    try {
        const{categoryId , catererId} = req.params
        const response = await Caterer.findOne({
            _id: catererId,
            categoryId: categoryId, // Ensure the categoryId matches
          }, { name: 1, menu: 1 }); // Only return name and menu fields
      
          if (!response) {
            return res.status(404).json({ message: "caterer not found or does not belong to this category" });
          }
      
          // Respond with the restaurant's name and menu
          res.status(200).json({
            CatererName: response.name,
            menu: response.menu,
          });

        
    } catch (error) {
        res.status(500).json({ message: "Error fetching menu", error });

    }

}