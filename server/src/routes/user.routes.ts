import express, {Router} from 'express';
import userController from '../controllers/user/user.controller';

const user: express.Router = Router();

user.get('/:id', userController.getUserById);

export default user;