import { ObjectId } from "mongodb";
import Note from "../../models/notes";
import Tag from "../../models/tags";

export async function addTagToNote(req: any, res: any) {
    try {
        const noteID = req.params.noteId; 
        const tagID = req.params.tagId;

        const note = await Note.findById(noteID);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

       
        if (note.tags.includes(tagID)) {
            return res.status(400).json({ message: "Tag already exists in the note" });
        }

        note.tags.push(new ObjectId(tagID));

        await note.save();

        res.status(202).json({ message: "The tag successfully added to the note" });
    } catch (error: any) {
        res.status(500).json({ message: error.toString() });
    }
}
