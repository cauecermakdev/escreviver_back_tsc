import { Texto} from "../protocols/texto.js";
//import jobs from "../database/data.js";//usando dados pelo data.js
import { Response } from "express";
import { connection } from "../database/database.js"; //usando bd pelo postgres
import { QueryResult } from "pg";

    async function findManyTexto(): Promise<QueryResult<Texto>>{

        return connection.query(
        `
        SELECT * FROM textos;
        `);
    }


    async function insertUniqueTexto(texto:Texto):Promise<QueryResult>{
      return connection.query(` 
        INSERT INTO textos (date, title, description,"tagName") VALUES ($1, $2, $3, $4)  
      `,
      [texto.date, texto.title, texto.description, texto.tagName])
    }


    async function existId(id:number,table:string){
         const result =  await connection.query(`
            SELECT * FROM ${table} WHERE ${table}.id = $1
        `,
        [id]);
         console.log(result.rows)
        return result.rows[0];
    }


    async function deleteTextoUnique(id:number){

        if(!await existId(id,"textos")){
            return "not deleted";
        }

        
        connection.query(`
            DELETE FROM textos WHERE id = $1
        `,
        [id]    
        )
        return "deleted"

    }


    export{
        findManyTexto,
        insertUniqueTexto,
        deleteTextoUnique
    }
