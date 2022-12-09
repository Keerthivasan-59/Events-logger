import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  try {
   const token=req.headers.authorization.split(' ')[1];

   if(token){
    const decoded=jwt.verify(token,'test')

    req.userId=decoded?.id

    next()
   }
  } catch (error) {console.log(error)}
};
