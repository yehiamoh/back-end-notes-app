import {ObjectId} from 'mongodb';
import Tag from '../../models/tags';

export async function deleteTag(req:any,res:any,next:any) {
   const id=req.params.id;
   try{
    if (!id||!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Tag id is required" });
   }
     const result=await Tag.deleteOne({_id:new ObjectId(id)});
     if (result.deletedCount > 0) { 
      return res.status(202).json({ message: "Tag deleted successfully" });
    } else {
      return res.status(404).json({ message: "Tag not found" });
    }
   }
   catch(error:any){
      res.status(500).json({message:error.toString()});
   }
}