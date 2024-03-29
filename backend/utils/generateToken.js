import JWT from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = JWT.sign({userId}, process.env.JWT_SECRET_TOKEN, {
        expiresIn: '10d'
    })

    res.cookie("jwt", token, {
        httpOnly: true, // to prevent access from javascript
        maxAge: 10 * 24 * 60 * 60 * 1000,  // 10 days
        sameSite: "strict", // to prevent csrf attack
        secure: process.env.NODE_ENV === 'production' ? true : false
        
    });
};

export default generateTokenAndSetCookie;