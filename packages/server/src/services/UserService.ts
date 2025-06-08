import { User } from "../entities/User";

export const UserService = {
  async createUser(data: Partial<User>) {
    const user = User.create(data);
    return await user.save();
  },

  async deleteUser(id: number) {
    await User.delete(id);
  },

  async updateUser(id: number, updates: Partial<User>) {
    await User.update(id, updates);
    return await User.findOneBy({ id });
  },

  async listUsers() {
    return await User.find();
  },

  async getUser(id: number) {
    return await User.findOneBy({ id });
  },
};
