export default {
  state: {
    list:''
  },
  getters: {
    get_list: state => {
      return state.list;
    }
  },
  actions: {
   set_list (context,obj) {
      context.commit('set_list',obj)
    },
    set_select_index (context,obj) {
      context.commit('set_select_index',obj)
    }
  },
  mutations: {
    set_list (state,obj) {
      state.list = obj;
    },
    set_select_index (state,i) {
      state.list[i].name = state.list[i].name+'a';
    }
  },
}
