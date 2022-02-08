
import Medinfo from "../model/Medinfo.js"
import { validationResult } from "express-validator"

export const getMedinfo = async (req, res) => {
    try {
        const medinfo = await Medinfo.find({ user: req.user.id })
        res.json(medinfo)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Some error Occured" })
    }
}

export const createMedinfo = async (req, res) => {
    const errors = validationResult(req);
    const {name,to,from,note} = req.body;

    if (!errors.isEmpty()) {
        console.log(error.message);
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newMed = await new Medinfo({
            user: req.user.id,name,to,from,note
        })
        const saveRecord = await newMed.save()
        res.json(saveRecord)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Some error Occured" })
    }
}