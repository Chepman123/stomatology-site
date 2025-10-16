import { Request, Response } from "express";
import BookServ from "../Services/Book";

export default class BookController{
    constructor(private serv:BookServ){}
    Book(req:Request,res:Response){
     this.serv.Book(req.body.data,req.body.hour,req.body.service,req.body.login);
     res.status(200).json({ message: 'Booking created' });
    }
}