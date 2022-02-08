import mongoose from "mongoose"
const medSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: String,
  to: {
    type: String,
    default: "none"
  },
  from: {
    type: String,
    default: "none"
  },
  note: {
    type: String,
    default: "none"
  }


});
const Medinfo = mongoose.model('Medinfo', medSchema)

export default Medinfo;

