import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export const UserController = {
  async createUser(req: Request, res: Response) {
    const {
      username,
      email,
      passwordhash,
      first_name,
      last_name,
      phone_number,
    } = req.body;
    const user = await UserService.createUser({
      username,
      email,
      passwordhash,
      first_name,
      last_name,
      phone_number,
    });
    res.status(201).json(user);
  },

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await UserService.deleteUser(Number(id));
    res.status(204).send();
  },

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const updates = req.body;
    const user = await UserService.updateUser(Number(id), updates);
    res.status(200).json(user);
  },

  async listUsers(req: Request, res: Response) {
    const users = await UserService.listUsers();
    res.status(200).json(users);
  },

  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UserService.getUser(Number(id));
    res.status(200).json(user);
  },
};
