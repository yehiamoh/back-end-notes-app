import Tag from "../../models/tags";

export async function addTag(req: any, res: any) {
   try {
      const { name } = req.body;
      if (!name) {
         res.status(404).json({
            message: "Please Enter the Tag Name"
         });
      }
      await Tag.create({
         name: name,
      });
      res.status(202).json({
         messgae: "Tag Created Successfully"
      });
   } catch (error: any) {
      res.status(500).json({ error: error.toString() })
   }
}