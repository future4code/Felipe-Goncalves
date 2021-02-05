import { HashManager } from "./services/hashManager";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user, signupInputDTO } from "./entities/user";
import { UserDatabase } from "../data/userDatabase";


const hashManager: HashManager = new HashManager()
const userDatabase: UserDatabase = new UserDatabase()

export const businessSignup = async (
  input: signupInputDTO
) => {

   if (
      !input.name ||
      !input.email ||
      !input.password
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const id: string = generateId()

   const cypherPassword = await hashManager.hash(input.password);

   const user = {
      id,
      name: input.name,
      email: input.email,
      password: cypherPassword
   }

   await userDatabase.insertUser(user);

   const token: string = generateToken({
      id
   })

   return token
}

export const businessLogin = async (
   email: string,
   password: string
) => {

   if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await userDatabase.selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id
   })

   return token
}

export const businessGetProfile = async(id: string)=>{

   const user = await userDatabase.selectUserById(id);
   
   return user;

}