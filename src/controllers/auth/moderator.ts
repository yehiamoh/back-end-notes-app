import User from "../../models/user";

export async function moderator(req:any,res:any) {
 return res.status(200).json({message:"only admin and moderators  can access this file"})  ;
}