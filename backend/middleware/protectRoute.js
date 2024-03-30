import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


const protectRoute = async (req, res, next) =>{

    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({message: 'Unauthorized Access- Invalid Token'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        if(!decoded){
            return res.status(401).json({message: 'Unauthorized Access- Invalid Token'})

        }
       
        // in generateTokens we use userId as key
        // in decoded we use userId as key and remove the password before sending the user
        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        req.user = user;
        next(); 
        // by calling next we are allowing the user to access the protected route
        // basically we are allowing the user to access the next middleware
        // which means after all of this happens the  next function will work, which is the sendMessage function in this case





    } catch(error){
        console.log("error in protectRoute", error.message)
        res.status(500).json({message: 'Internal Server Error'})
    }

}

export default protectRoute;