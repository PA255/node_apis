const jwt = require('jsonwebtoken');
const JWT_SECRET='aassds54654sd';
 
const authMiddleware =(req,res, next)=>{
    const token = req.headers['authorized']?.split(' ')[1];
    if (!token) return res.status(403).json({error:'NO token provided'});

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        next();

    }
    catch(error){
        res.status(401).json({error:'Invalid token'});
    }
};

module.exports = authMiddleware;