import { ObjectId } from 'mongodb';
import Note from '../../models/notes';

export async function deleteNote(req: any, res: any, next: any) {
  const id = req.params.id;
  try {
    if (!id || !ObjectId.isValid(id)) {
      return res.status(400).json({ message: "note id is required" });
    }
    const result = await Note.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount > 0) {
      return res.status(202).json({ message: "Note deleted successfully" });
    } else {
      return res.status(404).json({ message: "Note not found" });
    }
  }
  catch (error: any) {
    res.status(500).json({ message: error.toString() });
  }
}