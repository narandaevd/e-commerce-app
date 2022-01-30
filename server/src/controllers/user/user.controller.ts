import pool from "../../database";
import Pg from 'pg';
import express from 'express';
import Types from './user.types';

class UserController implements Types.UserController {
    constructor() {};
    async getUserById(req: express.Request, res: express.Response) {

        const query: string = 'SELECT * FROM users WHERE id = $1';
        const id: string = req.params.id;
        const args: Array<string> = [id];
        
        const queryResult: Pg.QueryResult = await pool.query(query, args);
        const record: ReadonlyArray<any> = queryResult.rows;
        res.send(record);
    };
    async getAllUsers(req: express.Request, res: express.Response) {
        const query: string = 'SELECT * FROM users'; 
        const queryResult: Pg.QueryResult = await pool.query(query);
        const record: ReadonlyArray<any> = queryResult.rows;
        res.send(record);
    };
    async addUser(req: express.Request, res: express.Response) {
        try {
            const query = 'INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4)';
            const args: Array<string> = []; 
            console.log(req.body);
            for (let key in req.body)
                args.push(req.body[key]);
            const queryResult: Pg.QueryResult = await pool.query(query, args);
            const record: ReadonlyArray<any> = req.body;
            res.send(record);
        } catch (e) {
            console.log(e);
            res.send({
                body: 'register error'
            });
        }
    };
}

export default new UserController();