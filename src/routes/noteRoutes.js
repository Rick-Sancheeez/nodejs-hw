import { Router } from "express";

import { getNotes, getNoteById, createNote, deleteNote, updateNote} from "../controllers/notesController";


const notesRouter = Router();

notesRouter.get('/notes', getNotes);

notesRouter.get('/notes/:noteId', getNoteById);

notesRouter.post('notes', createNote); 

notesRouter.delete('/notes/:noteId', deleteNote);

notesRouter.patch('/note/:noteId', updateNote);

export default notesRouter;