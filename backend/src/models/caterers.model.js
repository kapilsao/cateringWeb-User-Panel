import  mongoose from 'mongoose';
import User from './user.model.js';


const catererSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Category's _id
    ref: 'Category',
    required: true,
  },
  categoryName: {
    
      type: String,
      required: true,
    
  },
  minQuantity:{
    type: String,
    required: true,

  },
  menu:[
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String }
    }
  ],
});

const Caterer = mongoose.model('Caterer', catererSchema);

export default Caterer


