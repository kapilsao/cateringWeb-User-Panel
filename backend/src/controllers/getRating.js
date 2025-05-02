import Caterer from "../models/caterers.model.js"; // Assuming you have a Caterer model

export const getAverageRating = async (req, res) => {
  const { catererId } = req.body;

  try {
    // Find the caterer and its ratings
    const caterer = await Caterer.findById(catererId).populate('ratings'); // Assuming 'ratings' is a populated field

    if (!caterer) {
      return res.status(404).json({ message: "Caterer not found" });
    }

    // Calculate average rating
    const totalRating = caterer.ratings.reduce((sum, rating) => sum + rating.rating, 0);
    const averageRating = caterer.ratings.length
      ? totalRating / caterer.ratings.length
      : 0;

    // Calculate total ratings
    const totalRatings = caterer.ratings.length;

    res.status(200).json({ averageRating, totalRatings });
  } catch (error) {
    console.error("Error fetching average rating:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
