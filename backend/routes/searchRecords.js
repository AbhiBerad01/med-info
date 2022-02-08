import express from "express";
const route = express.Router();
import {getRecord,createRecord} from "../search-controller/search_model.js"
import fetchUser from "../middleware/fetchUser.js"

route.get('/getRecord',fetchUser,getRecord)
route.post('/createRecord',fetchUser,createRecord)

export default route;