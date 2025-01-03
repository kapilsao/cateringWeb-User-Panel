import  mongoose from 'mongoose';


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
  menu:[
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Caterer = mongoose.model('Caterer', catererSchema);

export default Caterer