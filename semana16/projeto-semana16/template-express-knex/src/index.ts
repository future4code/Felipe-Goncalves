import express, { Express, Response, Request } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {users} from "./types/types"

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
});

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui

async function tableUser (): Promise <void>{
   try{
      await connection.raw(` 
         CREATE TABLE users (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
         );         
      `)
      console.log("SUCESSO")
   }catch(error){
      console.log(error.sqlMessage || error.message) 
   };
};

async function createUser (users: users): Promise <void>{
   try {
      await connection.insert({
         id: users.id,
         name: users.name,
         nickname: users.nickname,
         email: users.email
      })
      .into("users");
      console.log(`${users.name} cadastrado com sucesso`)
   }catch (error) {
   console.log(error.sqlMessage || error.message)
}
};

const getUserById = async (
   id: string
 ): Promise <any> => {
   try {
     const user = await connection
     .select('id', 'nickname')
     .from('users')
     .where({ id });
   
     return user[0];
     
   } catch (error) {
     console.log(error);
   }
 };

 const validateUser = async (
   id: string
 ): Promise <void> => {
   try {
     const user = await connection
     .update('name', 'nickname')  
      .where(id)
     
   } catch (error) {
     console.log(error);
   }
 };

 
 app.post("/task/new-users", async (req: Request, res: Response) => {
    try{
       const {id, name, nickname, email} = req.body
       const newUsers : users = {
          id,
          name,
          nickname,
          email
         }
         await createUser(newUsers)
         res.status(201).send("Usuário criado com sucesso")
      }catch (error) {
         res.status(400).send(error.message)
      }
   });  
   
      app.get("/users/:id", async (req: Request, res: Response)=>{
         try{
            const userId = req.params.id
            if(!userId.length){
               return res.status(400).send("Informe um id valido para a pesquisa")
            }
            const user = await getUserById(userId)
            if(user.length === 0){
               return res.status(400).send("Usuário não encontrado para o id informado!!")
            }
            return res.status(200).send(user)
         }catch (error) { 
            return res.status(400).send("usuário não encontrado!!")
         }
      });

      app.post("/user/edit/:id", async (req: Request, res: Response) => {
         try{
            const {name, nickname} = req.body
            const userValidate : users = {
               name,
               nickname,
              }
              await validateUser(userValidate)
              res.status(201).send("Usuário criado com sucesso")
           }catch (error) {
              res.status(400).send(error.message)
           }
        }); 
   

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
