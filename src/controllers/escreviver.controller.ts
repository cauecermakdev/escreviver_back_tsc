
import { Request, Response} from "express";
import { Tag } from "../protocols/tag.js";
import { Texto } from "../protocols/texto.js";
import { existTag, findManyTag,insertUniqueTag, updateTagUnique } from "../repositories/tag.repository.js";
import { deleteTextoUnique, findManyTexto, insertUniqueTexto } from "../repositories/texto.repository.js";
import { textoSchema } from "../schemas/texto.schema.js";
import { tagSchema } from "../schemas/tag.schema.js";   

async function listAllTexto(req:Request, res:Response){
        const resultadoTexto = await findManyTexto();
        
        return res.send(resultadoTexto.rows);
    }

async function listAllTag(req:Request, res:Response){
        const resultadoTags = await findManyTag();
        
        return res.send(resultadoTags.rows);
}

async function insertTexto(req:Request, res:Response){
    
    const newTexto = req.body as Texto;

    const {error} =  textoSchema.validate(newTexto); 

    if(error){
        return res.status(400).send({
            message: error.message 
        })
    }


    const result = await insertUniqueTexto(newTexto);
    return res.send(`Text inserted ${result.rows}`);
}

async function insertTag(req:Request, res:Response){
    
    const newTag = req.body as Tag;

    const {error} =  tagSchema.validate(newTag); 

    if(error){
        return res.status(400).send({
            message: error.message
        })
    }

 /*   
    if(!await existTag(newTag.name)){
        return res.status(200).send("não existe tag com esse nome");
    }
*/

    const result = await insertUniqueTag(newTag);
    return res.send(`Tag inserted ${result.rows}`);
}

//delete[ok]
//update
//[ok]create
//select/get[ok]

async function deleteTexto(req:Request, res:Response){
    const id = Number(req.query.id);
    const msgDelete:string = await deleteTextoUnique(id);
    return res.send(msgDelete);

    //const result = await insertUniqueTexto(newTexto);
    //return res.send(`Text inserted ${result.rows}`);
}

async function updateTag(req:Request, res:Response){
    const {id,name} = req.body;

    if(!await existTag(id)){
        return res.status(200).send("não existe tag com esse id");
    }

    await updateTagUnique(id,name);

    return res.send("Tag atualizada");

}



export{
    listAllTexto,
    listAllTag,
    insertTexto,
    insertTag,
    deleteTexto,
    updateTag

}