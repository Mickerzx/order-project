import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { User } from '@/typespaces/interfaces/user.interface';
import { Status } from '@/typespaces/enums/status.enum';
import { State } from './state';

export type Getters = {
  isAuthLoading(state: State): boolean;
  getCurrentUser(state: State): User | null;
};

export const getters: GetterTree<State, RootState> & Getters = {
  isAuthLoading: (state: State) => state.status === Status.LOADING,
  getCurrentUser: (state: State) => state.user,
};
