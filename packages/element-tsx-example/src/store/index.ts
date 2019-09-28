import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import { ICountState } from './modules/count';
Vue.use(Vuex);

export interface IRootState {
    count: ICountState
}

export default new Store<IRootState>({})