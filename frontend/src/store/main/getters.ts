import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MainStateInterface } from './state';

const getters: GetterTree<MainStateInterface, StateInterface> = {
  getAuth(state: MainStateInterface) {
    return state.auth;
  },
  getApplyInfo(state: MainStateInterface) {
    return state.applyInfo;
  },
};

export default getters;
