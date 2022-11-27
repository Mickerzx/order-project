import { User } from '@/typespaces/interfaces/user.interface';
import InstanceHttpClient from './instance';

export default class AuthClient extends InstanceHttpClient {
  constructor() {
    super('users');
  }

  async signIn(data: { user: string; password: string }): Promise<User> {
    const { user, password } = data;
    const url = `?user=${user}&password=${password}`;
    try {
      return await this.apiCall({
        method: 'GET',
        url,
      });
    } catch (err) {
      throw new Error(err as string);
    }
  }
}
