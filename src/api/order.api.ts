import { Order } from '@/typespaces/interfaces/order.interface';
import InstanceHttpClient from './instance';

export default class OrderClient extends InstanceHttpClient {
  constructor() {
    super('events');
  }

  async fetchOrders(): Promise<Order[]> {
    try {
      return await this.apiCall({
        method: 'GET',
      });
    } catch (err) {
      throw new Error(err as string);
    }
  }

  async approveOrder(data: { id: number; status: string }) {
    try {
      await this.apiCall({
        method: 'PUT',
        url: `${data.id}`,
        data,
      });
    } catch (err) {
      throw new Error(err as string);
    }
  }

  async removeOrder(id: number) {
    try {
      await this.apiCall({
        method: 'DELETE',
        url: `${id}`,
      });
    } catch (err) {
      throw new Error(err as string);
    }
  }
}
