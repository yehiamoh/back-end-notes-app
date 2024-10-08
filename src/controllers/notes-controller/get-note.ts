import { ObjectId } from 'mongodb';
import Note from '../../models/notes';

export async function getSingleNote(req: any, res: any) {
   const id = req.params.id;

   try {
      if (!id || !ObjectId.isValid(id)) {
         return res.status(400).json({ message: "note id is required" });
      }
      const result = await Note.findById({ _id: new ObjectId(id) }).lean().exec();
      res.status(200).json({ message: "Note retived successfully", note: result })
   }
   catch (error: any) {
      res.status(500).json({
         message: error.toString()
      })
   }

}