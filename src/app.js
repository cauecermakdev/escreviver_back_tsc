import express  from "express";
import { convertCLTtoPJ } from "./controllers/calculator.controller.ts";

const server = express();
    
server.get('/health', (req,res)=>{
    res.send('ok');
})

server.get('/calculator',convertCLTtoPJ)

server.listen(4000,()=>{
    console.log("ta executando...");
})