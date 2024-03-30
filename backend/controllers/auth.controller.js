import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';


// register user

export const registerUser = async (req, res) => {
    try{

        const {name, username, password, confirmPassword, gender} = req.body;
         
        // for checking if any field is empty or not
        if(!name || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message: 'All fields are required'});
        }

        // for checking if  password and confirm password are same or not
        if( password !== confirmPassword){
            return res.status(400).json({message: 'Passwords do not match'});
        }
        
        // for checking if the user is already existed in the database or not
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message: 'User already exists'});
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hasedPass = await bcrypt.hash(password, salt);

        
        //random profile picture

        const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // create a new user
        const newUser = new User ({
            name: name,
            username: username,
            password: hasedPass,
            gender: gender,
            profilePicture: gender === "male" ? maleProfile : femaleProfile
        })

        if(newUser){
            //generating JWT token
        
        await generateTokenAndSetCookie(newUser._id, res)

        await newUser.save();
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            profilePicture: newUser.profilePicture,
            gender: newUser.gender

        });

        } else {
            res.status(400).json({message: 'User not created'});
        }
        
        

    } catch(error){
        console.log("error in registerUser in authController", error.message)
     res.status(500).json({message: 'Internal Server Error'});
}
}


// login user

export const loginUser =  async (req, res) => {
    try{

        const {username, password} =  req.body;

        const user = await User.findOne({username});
        
        const isMatchPass = await bcrypt.compare(password, user?.password || "");


        if(!user || !isMatchPass){
            return res.status(400).json({message: 'Invalid username or password'});

        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            profilePicture: user.profilePicture,
            
        })

    } catch(error){
        console.log("error in LoginUser in authController", error.message)
        res.status(500).json({message: 'Internal Server Error'})

    }
}

// logout user

export const logoutUser = (req, res) => {
    try{
        res.cookie("jwt", "" , {maxAge: 0})
        res.status(200).json({message: 'Logged out successfully'})

    } catch(error){
        console.log("error in logoutUser in authController", error.message)
        res.status(500).json({message: 'Internal Server Error'})
    }
}