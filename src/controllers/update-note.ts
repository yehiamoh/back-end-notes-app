import { ObjectId } from 'mongodb';
import Note from '../models/notes';

export default async function updateProduct(req: any, res: any, next: any) {
   try {
      let result;
      const { title, content } = req.body;
      const id = req.params.id;

      if (!id||!ObjectId.isValid(id)) {
         return res.status(400).json({ message: "note id is required" });
      }

      if (!title) {
         result = await Note.updateOne({ _id: new ObjectId(id) }, { $set: { "content": content } })
      }
      if (!content) {
         result = await Note.updateOne({ _id: new ObjectId(id) }, { $set: { "title": title } })
      }
      if (!title && !content) {
         return res.status(404).json({ message: "you have to update at least one field" })
      }

      if (result?.acknowledged) {
         return res.status(202).json({ message: "note updated" });
      } else {
         return res.status(404).json({ message: "error occured" });
      }

   }
   catch (error: any) {
      console.log(error);
      res.status(500).json({
         message: error.toString()
      });
   }
}