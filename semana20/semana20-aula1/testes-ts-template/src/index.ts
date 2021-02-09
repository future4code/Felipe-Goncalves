import knex from 'knex'
import {config} from 'dotenv'

config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   },
});

export enum LOCATION {
   EUA = "EUA",
   BRAZIL = "BRAZIL",
 }
 
 export enum NACIONALITY {
   BRAZILIAN = "BRAZILIAN",
   AMERICAN = "AMERICAN",
 }
 
 export interface User {
   age: number;
   nacionality: NACIONALITY;
   name: string;
   balance: number;  
 }



 export interface personUser {
   name: string;
   age: number;
   nacionality: NACIONALITY;
 }
 
 export interface Casino {
   name: string;
   location: LOCATION;
 }

 export interface Result {
   brazilians: ResultItem;
   americans: ResultItem;
 }
 
 export interface ResultItem {
   allowed: string[];
   unallowed: string[];
 }


export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}


export function verifyAge(casino: Casino, users: User[]): Result {
   const allowed: User[] = [];
   const unallowed: User[] = [];
 
   for (const user of users) {
     if (casino.location === LOCATION.EUA) {
       if (user.age >= 21) {
         allowed.push(user);
       } else {
         unallowed.push(user);
       }
     } else if (casino.location === LOCATION.BRAZIL) {
       if (user.age >= 18) {
         allowed.push(user);
       } else {
         unallowed.push(user);
       }
       break;
     }
   }
 
   return {
     brazilians: {
       allowed: allowed
         .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
         .map((u) => u.name),
       unallowed: unallowed
         .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
         .map((u) => u.name),
     },
     americans: {
       allowed: allowed
         .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
         .map((u) => u.name),
       unallowed: unallowed
         .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
         .map((u) => u.name),
     },
   };
 }

