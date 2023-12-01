import { RequestHandler } from "express";
import NoteModel from '../models/note';

export const noteModels: RequestHandler = async(req,res,next)=>{
    try {
        // throw Error("error dude");
        const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
    } catch (error) {
        next(error);
    }
}

export const getNote:RequestHandler = async(req,res,next)=>{
      try {
        const noteId = req.params.noteId;
        const getIdData = await NoteModel.findById(noteId).exec();
        res.status(200).json(getIdData);
      } catch (error) {
        next(error);
      }
}

interface CreateNotesBody{
    title?: string,
    text?: string
}

export const createNotes: RequestHandler<unknown, unknown, CreateNotesBody, unknown> = async(req,res,next)=>{
    try {
       const title = req.body.title;
       const text = req.body.text;
    const newNote = await NoteModel.create({
        title: title,
        text: text
    });
    res.status(201).json(newNote);
   } catch (error) {
    next(error);
   }
}