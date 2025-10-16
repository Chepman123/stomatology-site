import { Request,Response } from "express";
import LoginService from "../Services/Login";

export default class LoginController{
    constructor(private serv:LoginService){}
  
   async Login(req:Request,res:Response){
      const result:boolean = await this.serv.Login(req.body.login,req.body.password);
      console.log(result);
      res.json({result:result});
    }
}