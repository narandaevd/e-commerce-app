import pool from "../../database";
import Pg from 'pg';
import express from 'express';
import Types from './user.types';

class UserController implements Types.UserController {
    constructor() {};
    async getUserById(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        const queryResult: Pg.QueryResult = await pool.query(
            `SELECT * FROM mock_data WHERE id = $1`,
            [id]
        );
        const record: ReadonlyArray<any> = queryResult.rows;
        res.send(record);
    };
}

export default new UserController();