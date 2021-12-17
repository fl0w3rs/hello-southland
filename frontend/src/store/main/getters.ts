import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MainStateInterface } from './state';

const getters: GetterTree<MainStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
