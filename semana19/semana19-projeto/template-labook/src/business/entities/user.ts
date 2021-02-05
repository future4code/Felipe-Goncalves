import { task } from "./task"


// export enum USER_ROLES {
//     NORMAL = 'NORMAL',
//     ADMIN = 'ADMIN',
//     EVENT = "EVENT"
// }


export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event",
}

export type AuthenticationData = {
    id: string
 }
 
 export type user = {
    id: string,
    name: string,
    email: string,
    password: string
    task?: task[]
 }
 
 export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }

 export type signupInputDTO = {
    name: string,
    email: string,
    password: string,
    
 }
 