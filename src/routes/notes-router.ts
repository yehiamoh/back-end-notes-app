import { getNotes } from "../controllers/get-notes";
import { postNote } from "../controllers/add-note";
import updateNote from "../controllers/update-note";
import {deleteNote} from "../controllers/delete-note";
import {getSingleNote} from "../controllers/get-note";

import express from 'express';

const router = express.Router();

router.get('/notes', getNotes);

router.post('/notes', postNote);

router.patch('/notes/:id', updateNote);

router.delete('/notes/:id',deleteNote);

router.get('/notes/:id',getSingleNote);

export default router;