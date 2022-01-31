import pool from "../../database";
import Pg from 'pg';
import express from 'express';
import Types from './user.types';

class UserController implements Types.UserController {
    constructor() {};
    async getUserById(req: express.Request, res: express.Response): Promise<any> {
        try {
            const query: string = 'SELECT * FROM users WHERE id = $1';
            const id: string = req.params.id;
            const args: Array<string> = [id];
            const querySelectResult: Pg.QueryResult<Types.User> = await pool.query(query, args);
            const record: Types.User = querySelectResult.rows[0];
            res.status(200).send(record);
        } catch (e) {
            res.status(400).send({body: `getUserById error`});
        }
    };
    async getAllUsers(req: express.Request, res: express.Response): Promise<any> {
        try {
            const query: string = 'SELECT * FROM users'; 
            const querySelectResult: Pg.QueryResult<Types.User> = await pool.query(query);
            const records: ReadonlyArray<Types.User> = querySelectResult.rows;
            res.status(200).send(records);
        } catch (e) {
            console.log(e);
            res.status(400).send({body: `getAllUsers error`});
        }
    };
    async addUser(req: express.Request, res: express.Response): Promise<any> {
        try {
            const query = 'INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4)';
            const args: Array<string> = []; 
            for (let key in req.body)
                args.push(req.body[key]);
            const queryInsertResult: Pg.QueryResult<Types.User> = await pool.query(query, args);
            const records: ReadonlyArray<Types.User> = req.body;
            res.status(200).send(records);
        } catch (e) {
            res.status(400).send({body: `addUser error`});
        }
    };
    async deleteUser(req: express.Request, res: express.Response): Promise<any> {
        try {
            const deleteQuery: string = 'DELETE FROM users WHERE id = $1';
            const findQuery: string = 'SELECT * FROM users WHERE id = $1';
            const args: Array<string> = [req.params.id];
            const querySelectResult: Pg.QueryResult<Types.User> = await pool.query(findQuery, args);
            const queryDeleteResult: Pg.QueryResult<Types.User> = await pool.query(deleteQuery, args);
            const record: Types.User = querySelectResult.rows[0];
            res.status(200).send(record);
        } catch (e) {
            res.status(400).send({body: `deleteUser error`});
        }
    }
}

export default new UserController();