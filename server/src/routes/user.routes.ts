import express, {Router} from 'express';
import userController from '../controllers/user/user.controller';

const user: express.Router = Router();

user.get('/:id', userController.getUserById);
user.get('/all', userController.getAllUsers);
user.post('/register', userController.addUser);
// user.post('/auth', (null));

export default user;