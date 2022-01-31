import express, {Router} from 'express';
import userController from '../controllers/user/user.controller';

const user: express.Router = Router();

user.get('/users', userController.getAllUsers);
user.post('/register', userController.addUser);
user.post('/delete/:id', userController.deleteUser);
user.get('/:id', userController.getUserById);
// user.post('/auth', (null));

export default user;