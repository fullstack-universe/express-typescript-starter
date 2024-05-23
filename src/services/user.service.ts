import { User } from "../models/user";

export class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }
  async getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
  saveUser(user: User) {
    this.users.push(user);
    return user;
  }
}
