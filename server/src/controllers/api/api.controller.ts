import express from 'express';
import Types from './api.types';
import pool from './../../database';
import Pg from 'pg';

class APIController implements Types.APIController {
    constructor() {};
    async getImage(req: express.Request, res: express.Response): Promise<any> {
        await pool.connect();
        const queryResult: Pg.QueryResult<any> = await pool.query(``);
        res.send(queryResult);
        await pool.end();
    }
}

export default new APIController();