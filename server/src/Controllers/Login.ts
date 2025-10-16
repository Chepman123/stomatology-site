import { Request,Response } from "express";
import LoginService from "../Services/Login";

export default class LoginController{
    constructor(private serv:LoginService){}
  
    Login(req:Request,res:Response){
      res.json(this.serv.Login(req.body.login,req.body.password));
    }
}