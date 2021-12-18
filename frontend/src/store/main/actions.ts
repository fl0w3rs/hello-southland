import { ActionTree } from 'vuex';
import { api } from 'boot/axios';
import { StateInterface } from '../index';
import { MainStateInterface } from './state';

const actions: ActionTree<MainStateInterface, StateInterface> = {
  doAuth({ commit }) {
    void api.get('auth').then((resp) => {
      commit('setAuth', resp.data);
    });

    void api.get('getApplyInfo').then((resp) => {
      commit('setApplyInfo', resp.data);
    });
  },
};

export default actions;
