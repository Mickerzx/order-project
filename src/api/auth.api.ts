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
      const user: User[] = await this.apiCall({
        method: 'GET',
        url,
      });
      if (user.length) {
        return user[0];
      }
      throw new Error();
    } catch (err) {
      throw new Error(err as string);
    }
  }
}
