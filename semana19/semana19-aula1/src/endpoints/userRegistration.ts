import { Request, Response } from "express";
import insertUser from "../endpoints/insertUser";
import { generateId } from "../business/services/idGenerator";
import { generateToken } from "../business/services/authenticator";
import { hash } from "../business/services/hashManager";
import { USER_ROLES } from "../business/entities/user";


export default async function signUser(
    req: Request,
    res: Response
 ) {
    try {
 
       if (
          !req.body.name ||
          !req.body.email ||
          !req.body.password ||
          !req.body.role
       ) {
          throw new Error('Preencha os campos "name","nickname", "password", "role" e "email"')
       }
 
       if (
          req.body.role !== USER_ROLES.ADMIN &&
          req.body.role !== USER_ROLES.NORMAL
       ) {
          throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`)
       }
 
       const id: string = generateId();
 
       const cypherPassword: string = hash(req.body.password)
 
       await insertUser(
          id,
          req.body.name,
          req.body.email,
          cypherPassword,
          req.body.role
       );
 
       const token = generateToken({
          id,
          role: req.body.role
       });
 
       res
          .status(200)
          .send({ token });
 
    } catch (error) {
       res.status(400).send({
          message: error.message || error.sqlMessage
       })
    }
 }

 