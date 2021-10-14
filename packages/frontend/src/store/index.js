import Vue from 'vue';
import Vuex from 'vuex';
import donation from './modules/donation';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {donation}
});