import express from 'express';
import { createUser, getUsers } from '../controllers/users/user.controller';

const userRouter = express.Router();

userRouter.get('/users', getUsers);
userRouter.post('/users', createUser);

export default userRouter;
