import express from 'express';
import Types from './api.types';
import pool from './../../database';
import Pg from 'pg';
import paths from '../../paths';
import path from 'path';

class APIController implements Types.APIController {
    constructor() {};
    async getImage(req: express.Request, res: express.Response): Promise<any> {
        try {
            const fileId: string = req.params.id;
            res.sendFile(path.resolve(paths.img, `product-${fileId}.jpg`));
        } catch (e) {
            res.status(400).send({body: 'getImage error'})
        }
    }
}

export default new APIController();