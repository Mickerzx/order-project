import { createLogger, createStore } from 'vuex';
import { AuthStore, State as IAuthState, store as auth } from './modules/auth';
import { OrdersStore, State as IOrdersStore, store as orders } from './modules/orders';

export type RootState = {
  auth: IAuthState;
  orders: IOrdersStore;
};

export type Store = AuthStore<Pick<RootState, 'auth'>> & OrdersStore<Pick<RootState, 'orders'>>;

const plugins = [createLogger({})];

export const store = createStore({
  plugins,
  modules: {
    auth,
    orders,
  },
});

export default function useStore(): Store {
  return store as Store;
}
