import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store';
import OrderClient from '@/api/order.api';
import { State } from './state';
import { Mutations } from './mutations';
import { OrdersMutationTypes } from './mutation-types';
import { OrdersActionTypes } from './action-types';

const client = new OrderClient();

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload?: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
  [OrdersActionTypes.FETCH_ORDERS]({ commit }: AugmentedActionContext): void;
  [OrdersActionTypes.APPROVE_ORDER]({ commit }: AugmentedActionContext, payload: { id: number; status: string }): void;
  [OrdersActionTypes.REMOVE_ORDER]({ commit }: AugmentedActionContext, payload: number): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [OrdersActionTypes.FETCH_ORDERS]({ commit }) {
    commit(OrdersMutationTypes.ORDERS_LOADING);
    try {
      const response = await client.fetchOrders();
      commit(OrdersMutationTypes.FETCH_ORDERS, response);
      commit(OrdersMutationTypes.ORDERS_SUCCEEDED);
    } catch (err) {
      commit(OrdersMutationTypes.ORDERS_ERROR, err as string);
      throw new Error(err as string);
    }
  },

  async [OrdersActionTypes.APPROVE_ORDER]({ commit }, payload: { id: number; status: string }) {
    commit(OrdersMutationTypes.ORDERS_LOADING);
    try {
      await client.approveOrder(payload);
      commit(OrdersMutationTypes.APPROVE_ORDER, payload);
      commit(OrdersMutationTypes.ORDERS_SUCCEEDED);
    } catch (err) {
      commit(OrdersMutationTypes.ORDERS_ERROR, err as string);
      throw new Error(err as string);
    }
  },

  async [OrdersActionTypes.REMOVE_ORDER]({ commit }, payload: number) {
    commit(OrdersMutationTypes.ORDERS_LOADING);
    try {
      await client.removeOrder(payload);
      commit(OrdersMutationTypes.REMOVE_ORDER, payload);
      commit(OrdersMutationTypes.ORDERS_SUCCEEDED);
    } catch (err) {
      commit(OrdersMutationTypes.ORDERS_ERROR, err as string);
      throw new Error(err as string);
    }
  },
};
