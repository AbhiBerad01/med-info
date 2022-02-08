import User from "../model/User.js"
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jsonwebtoken from "jsonwebtoken"
const Jwt_sign = "Abhi@654"

export const createUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const reqName = req.body.name;
    const reqEmail = req.body.email;
    const reqPass = req.body.password;

    try {
        let user = await User.findOne({ email:reqEmail });

        if (user) {
            return res.status(400).json({ error: "User Already Exist" })
        }

        
        var salt = await bcrypt.genSalt(10);
        var passhash = await bcrypt.hash(reqPass, salt);

        user = await User.create({
          name: reqName,
          email: reqEmail,
          password: passhash,
        })

        const data = {
            user :{
            id : user.id
        }}

        var Auth_token = jsonwebtoken.sign(data,Jwt_sign)

        const success = true ;

        res.json({success,Auth_token})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Some error Occured"})
    }

};

export const login = async(req,res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const reqEmail = req.body.email;
    const reqPass = req.body.password;

    try {
        let user = await User.findOne({email:reqEmail});

        
        if(!user){
            return res.status(404).json({error:"Please Create Account first"});
        }
        
        const passCompare = await bcrypt.compare(reqPass ,  user.password );

        if(!passCompare){
            return res.status(404).json({error:"Please Enter A valid password"})
        }

        const data = {
            user :{
            id : user.id
        }}

        var Auth_token = jsonwebtoken.sign(data,Jwt_sign)

        const success = true ;

        res.json({success,Auth_token})


    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Some error Occured"})
    }

}