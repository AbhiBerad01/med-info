import express from "express"
import auth from "./routes/auth.js"
import medinfo from "./routes/medinfo.js"
import searchRecord from "./routes/searchRecords.js"
import mongoose from "mongoose";
import bodyParse from "body-parser"
import cors from "cors"
const app = express()
const port = 8000

app.use(cors())
app.use(bodyParse.json({extended:true}))
app.use(bodyParse.urlencoded({extended:true}))

app.use('/auth', auth)
app.use('/medinfo', medinfo)
app.use('/searchRecord', searchRecord)


const mongoURI = "mongodb+srv://user:abhig654@cluster0.3kbii.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(mongoURI,{useUnifiedTopology:true,useNewUrlParser:true})
    .then( () => {app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })})
    .catch( err => console.log(err));
