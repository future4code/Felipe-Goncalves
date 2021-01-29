import { connection } from "../index";

export async function getUserByEmail(email: string) {

    const result = await 
    connection
    .select("*")
    .from("cookenu_users")
    .where({email});

    return result[0];
};
