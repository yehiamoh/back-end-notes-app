import jwt  from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export default async function ensureAuthentication(req:any,res:any,next:any) {
   const accessToken=req.headers.authorization;
   if(!accessToken){
      return res.status(401).json({message:"Access Token not found"});
   }
   try{
      const decodedAcsessToken= jwt.verify(accessToken,process.env.SECRET_ACCESS_TOKEN as string);

      req.user={id:(decodedAcsessToken as any).userID}
      next();
   }catch(error:any){
      res.status(500).json({ error: error.toString() });
   }
}