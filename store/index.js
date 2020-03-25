export const state = () => ({
    _RemberChoose: false
  })
  export const getters = {
    RemberChoose: (state) => state._RemberChoose,
}
  export const mutations = {
    RemberChooseUpdate(state, value) {
        state._RemberChoose = value;
  }
  }
