import { getNotes } from "../controllers/notes-controller/get-notes";
import { postNote } from "../controllers/notes-controller/add-note";
import updateNote from "../controllers/notes-controller/update-note";
import {deleteNote} from "../controllers/notes-controller/delete-note";
import {getSingleNote} from "../controllers/notes-controller/get-note";
import{addTagToNote} from "../controllers/notes-controller/add-tag-to-note";
import{removeTagFromNote} from "../controllers/notes-controller/delete-tag-from-note";


import express from 'express';

const router = express.Router();

router.get('/notes', getNotes);

router.post('/notes', postNote);

router.patch('/notes/:id', updateNote);

router.delete('/notes/:id',deleteNote);

router.get('/notes/:id',getSingleNote);

router.post('/notes/:noteId/tags/:tagId',addTagToNote)

router.delete('/notes/:noteId/tags/:tagId',removeTagFromNote);

export default router;