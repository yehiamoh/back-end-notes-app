import User from "../models/user";


export function authorize(allowdRoles:string[]=[]){
   return async function (req:any,res:any,next:any) {
      const user= await User.findOne({_id:req.user.id});
      if(!user ||! user.roles.some(e=>allowdRoles.includes(e))){
         res.status(403).json({message:"Access denied"});
      }
      next();
   }
}