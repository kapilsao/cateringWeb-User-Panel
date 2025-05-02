import Caterer from "../models/caterers.model.js";
export const addRating = async (req, res) => {
    const { catererId, userId, rating, comment } = req.body;
  
    try {
      const caterer = await Caterer.findById(catererId);
      if (!caterer) {
        return res.status(404).json({ message: 'Caterer not found' });
      }
  
      // Check if the user has already rated
      const existingRating = caterer.ratings.find(r => r.userId.toString() === userId);
      if (existingRating) {
        existingRating.rating = rating;
        existingRating.comment = comment;
      } else {
        caterer.ratings.push({ userId, rating, comment });
      }
  
      // Recalculate average rating
      const totalRatings = caterer.ratings.reduce((acc, curr) => acc + curr.rating, 0);
      caterer.averageRating = totalRatings / caterer.ratings.length;
  
      await caterer.save();
      res.status(200).json({ message: 'Rating submitted successfully', caterer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  