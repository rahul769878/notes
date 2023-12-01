import * as NotesController from '../controllers/notes';
import express from 'express';

const router = express.Router();

router.get("/",NotesController.noteModels);

router.post("/", NotesController.createNotes);

router.get("/:noteId",NotesController.getNote);
 
export default router;