import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

const userService = new UserService();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error while fetching data' });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const body = req.body as User;
  const user = userService.saveUser(body);
  res.json(user);
};
