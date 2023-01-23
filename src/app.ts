import express  from "express";
//import { convertCLTtoPJ } from "./controllers/calculator.controller.js";
import { listAllTag, listAllTexto, insertTag, insertTexto, deleteTexto, updateTag} from "./controllers/escreviver.controller.js";

const server = express();
server.use(express.json())//usa no post
    
server.get('/health', (req,res)=>{
    res.send('ok');
})

//server.get('/calculator',convertCLTtoPJ)

server.get('/tags', listAllTag);
server.get('/textos', listAllTexto);
server.post('/tag',insertTag);
server.post('/texto',insertTexto);
server.delete('/texto',deleteTexto);
server.put('/tags',updateTag);


server.listen(4000,()=>{
    console.log("ta executando...");
})