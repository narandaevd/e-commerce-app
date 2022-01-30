import express, {Router} from 'express';
import APIController from '../controllers/api/api.controller'; 

const API: express.Router = Router();

API.get('images/:id', APIController.getImage);

export default API;