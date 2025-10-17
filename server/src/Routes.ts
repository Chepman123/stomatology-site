import { Response,Request, Router } from "express";
import RegController from "./Controllers/Registration";
import RegService from "./Services/Registration";
import LoginController from "./Controllers/Login";
import LoginService from "./Services/Login";
import BookServ from "./Services/Book";
import BookController from "./Controllers/Book";
export default ()=>{
   const router:Router = Router();
   
   const serv:RegService = new RegService();
   const contr:RegController = new RegController(serv);

   const servLogin:LoginService = new LoginService();
   const contrLogin:LoginController = new LoginController(servLogin);

   const servBook:BookServ = new BookServ();
   const contrBook:BookController = new BookController(servBook);

   router.post('/registration',(req:Request,res:Response)=>{contr.Reg(req,res)});
   router.post('/login',(req:Request,res:Response)=>{contrLogin.Login(req,res)});
   router.post('/book',(req:Request,res:Response)=>{contrBook.Book(req,res)});
   router.get('/book',(req:Request,res:Response)=>{contrBook.GetBooks(res)});
   router.delete('/book',(req:Request,res:Response)=>{contrBook.DeleteBooks(req,res)});

   return router;
}