import mongoose from "mongoose"
const searchSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  searchQuery: String,
});
const searchRecords = mongoose.model('searchRecords', searchSchema)

export default searchRecords;

