import User from "../../models/user";

export async function admin(req:any,res:any) {
 return res.status(200).json({message:"only admin can access this file"})  ;
}