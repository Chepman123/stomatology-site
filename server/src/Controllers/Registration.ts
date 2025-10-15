import { Request,Response } from "express";
import RegService from "../Services/Registration";

export default class RegController{
    constructor(private serv:RegService){}

    Reg(req:Request,res:Response){
      res.json(this.serv.Reg(req.body.login,req.body.password,req.body.phone));
    }
}