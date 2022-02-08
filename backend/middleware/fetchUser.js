import jsonwebtoken from "jsonwebtoken"
const Jwt_sign = "Abhi@654"

const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
    try {
        if (!token) {
            res.status(404).json({error:"Please Provide Auth Token"})
        }

        const data = jsonwebtoken.verify(token,Jwt_sign)

        req.user = data.user;

        next();
        

    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Some error Occured"})
    }

}



export default fetchUser;