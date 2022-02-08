import express from "express";
const route = express.Router();
import {getMedinfo,createMedinfo} from "../medinfo-controller/medinfo_model.js"
import fetchUser from "../middleware/fetchUser.js"
import { body } from 'express-validator';

route.get('/getMedinfo',fetchUser,getMedinfo)
route.post('/createMedinfo',fetchUser,[
  body('name').isLength({ min: 3 }),
],createMedinfo)

export default route;