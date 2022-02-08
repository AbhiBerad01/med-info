import searchRecords from "../model/SearchRecords.js"

export const getRecord = async(req,res)=>{
    try {
        const records = await searchRecords.find({user:req.user.id})
        res.json(records)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Some Internal Error Accured"})
    }
    
}

export const createRecord = async(req,res)=>{
    try {
        const record = await searchRecords({
            user : req.user.id,
            searchQuery:req.body.query
        })
        const newQuery = await record.save()
        res.json(newQuery)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Some Internal Error Accured"})
        
    }
}