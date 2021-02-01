import { connection } from "../index";
import { USER_ROLES } from "../business/entities/user";

export default async function insertUser(
    id: string,
    name: string,
    password: string,
    email: string,
    role:USER_ROLES
) {
    await connection.insert({
        id,
        name,
        password,
        email,
        role
    }).into('to_do_list_users')
}