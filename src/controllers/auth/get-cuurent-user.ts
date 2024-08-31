
import User from "../../models/user";


export async function getCurrentUser(req:any,res:any) {
   try{
    const user=await User.findOne({_id:req.user.id});
    res.status(202).json({
      id:user?._id,
      username:user?.userName
    })
   }catch (error: any) {
      res.status(500).json({ error: error.toString() })
   }
}