import Tag from "../../models/tags";
import { ObjectId } from "mongodb";

export async function getSingleTag(req: any, res: any) {

   try {
      const id = req.params.id;
      
      if (!id||!ObjectId.isValid(id)) {
         return res.status(400).json({ message: "note id is required" });
      }
      const result = Tag.findById({ _id: new ObjectId(id) }).lean().exec();
      res.status(202).json({
         message: "Tag retrived successfully",
         tag: result
      })
   } catch (error: any) {
      res.status(500).json({ error: error.toString() })
   }
}
