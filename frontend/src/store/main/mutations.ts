import { MutationTree } from 'vuex';
import { MainStateInterface } from './state';

const mutation: MutationTree<MainStateInterface> = {
  setAuth(state: MainStateInterface, payload: Record<string, any>) {
    state.auth = payload;
  },

  setApplyInfo(state: MainStateInterface, payload: Record<string, any>) {
    state.applyInfo = payload;
  },
};

export default mutation;
