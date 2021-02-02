import { connection } from "..";
import { user } from "../business/entities/user"


export const insertUser = async(
   user: user
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
   }).into('User_Arq')
}

export async function selectUserByEmail(email: string) {

    const result = await 
    connection
    .select("*")
    .from("User_Arq")
    .where({email});

    return result[0];
}
