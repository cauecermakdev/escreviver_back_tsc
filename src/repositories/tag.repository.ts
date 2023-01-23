import { Texto} from "../protocols/texto.js";
import { Tag } from "../protocols/tag.js";
//import jobs from "../database/data.js";//usando dados pelo data.js
import { Response } from "express";
import { connection } from "../database/database.js"; //usando bd pelo postgres
import { QueryResult } from "pg";

    async function findManyTag(): Promise<QueryResult<Tag>>{
      return connection.query(
      `
      SELECT * FROM tags;
      `);
    }


    async function insertUniqueTag(tag:Tag):Promise<QueryResult>{
      return connection.query(` 
        INSERT INTO tags (name) VALUES ($1)  
      `,
      [tag.name])
    }


    async function existTag(id:number){
        const result  = await connection.query(` 
            SELECT tags.name FROM tags WHERE tags.id = ($1)  
        `,
        [id])

        if(result.rows[0]){
            return true;
        }else{
            return false;
        }
    }

    async function updateTagUnique(id:number, name:string){
        const result  = connection.query(` 
            UPDATE tags SET name = $1 WHERE tags.id = ($2)  
        `,
        [name, id])
    }

    export{
        findManyTag,
        insertUniqueTag,
        existTag,
        updateTagUnique
    }
