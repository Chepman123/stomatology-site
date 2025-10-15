import { Response,Request, Router } from "express";
import RegController from "./Controllers/Registration";
import RegService from "./Services/Registration";
import LoginController from "./Controllers/Login";
import LoginService from "./Services/Login";
export default ()=>{
   const router:Router = Router();
   
   const serv:RegService = new RegService();
   const contr:RegController = new RegController(serv);

   const servLogin:LoginService = new LoginService();
   const contrLogin:LoginController = new LoginController(servLogin);

   router.post('/registration',(req:Request,res:Response)=>{contr.Reg(req,res)});
   router.post('/login',(req:Request,res:Response)=>{contrLogin.Login(req,res)});

   return router;
}