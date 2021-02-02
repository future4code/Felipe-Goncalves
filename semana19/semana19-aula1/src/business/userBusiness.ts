import { compare, hash} from "./services/hashManager";
import { selectUserByEmail } from "../data/userData";
import { generateToken } from "../business/services/authenticator";
import { user, USER_ROLES } from "../business/entities/user";


export const businessSignup = async (
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
) => {

   if (
      !name ||
      !email ||
      !password ||
      !role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }}

   export const businessLogin = async (
    email: string,
    password: string
 ) => {
    if (!email || !password) {
       throw new Error("'email' e 'senha' são obrigatórios")
    }
    const user: user = await selectUserByEmail(email)
    if (!user) {
       throw new Error("Usuário não encontrado ou senha incorreta")
    }
    const passwordIsCorrect: boolean = await compare(password, user.password)
    if (!passwordIsCorrect) {
       throw new Error("Usuário não encontrado ou senha incorreta")
    }
    const token: string = generateToken({
       id: user.id,
       role: user.role
    })
    return token
 }