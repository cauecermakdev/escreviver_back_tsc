import pg from "pg";

//import { Pool } from 'pg-types';

    const {Pool}  = pg;

const connection = new Pool({
    host: 'localhost',
    port:5432,
    user:'caue',
    password:'12345',
    database: 'escreviver'
})

export { connection };