export const state = () => ({
    _RemberChoose: false,
    _itemsTime:[],
  })
  export const getters = {
    RemberChoose: (state) => state._RemberChoose,
    ItemsTime: (state) => state._itemsTime,
}
  export const mutations = {
    RemberChooseUpdate(state, value) {
        state._RemberChoose = value;
  },
  ItemsTime(state, id,time) {
    state._itemsTime.push({id:value , time:time});
}
  }
