import { getNotes } from "../controllers/get-notes";
import { postNote } from "../controllers/add-note";
import updateNote from "../controllers/update-note";
import {deleteNote} from "../controllers/delete-note";

import express from 'express';

const router = express.Router();

router.get('/notes', getNotes);

router.post('/note', postNote);

router.patch('/updatenote/:id', updateNote);

router.delete('/deletenote/:id',deleteNote);

export default router;