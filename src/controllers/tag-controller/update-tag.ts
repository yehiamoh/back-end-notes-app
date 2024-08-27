import Tag from "../../models/tags";
import { ObjectId } from "mongodb";

export async function updateTag(req:any,res:any){
   try{
      const {name}=req.body
      const id=req.params.id;
      if(!name){
         res.status(404).json({message:"please change the tag name"});
      }
      if (!id||!ObjectId.isValid(id)) {
         return res.status(400).json({ message: "note id is required" });
      }
      await Tag.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{name:name}});
      
      res.status(202).json({message:"tag updated successfully"})

   }catch (error: any) {
      res.status(500).json({ error: error.toString() })
   }
}