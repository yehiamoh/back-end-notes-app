import Tag from "../../models/tags";
import { ObjectId } from "mongodb";

// ../controllers/tag-controller/get-tags.ts

export async function getTags(req: any, res: any) {
   try {
      const result = await Tag.find().lean().exec();
      res.status(202).json({
         message: "Tags retrieved successfully",
         tags: result
      });
   } catch (error: any) {
      res.status(500).json({ error: error.toString() });
   }
}

