import { ObjectId } from "mongodb";
import Note from "../../models/notes";

export async function removeTagFromNote(req: any, res: any) {
    try {
        const noteID = req.params.noteId;
        const tagID = req.params.tagId;

        const note = await Note.findById(noteID);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        note.tags = note.tags.filter(tag => !tag.equals(new ObjectId(tagID)));

        await note.save();

        res.status(202).json({ message: "The tag was successfully removed from the note" });
    } catch (error: any) {
        res.status(500).json({ message: error.toString() });
    }
}
