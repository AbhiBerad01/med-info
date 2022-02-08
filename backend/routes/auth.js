import express from "express";
const route = express.Router();
import {createUser,login} from "../auth-controller/auth_models.js"
import { body } from 'express-validator';

route.post('/createUser',[
    body('name',"Please Provide Valid Name").isLength({min:5}),
    body('email',"Please Provide Valid Email").isEmail(),
    body('password').isLength({ min: 5 }),
],createUser)

route.post('/login',[
    body('email',"Please Provide Valid Email").isEmail(),
    body('password').exists(),
],login)


export default route;