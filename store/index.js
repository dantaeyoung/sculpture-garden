export const state = () => ({
  darkmode: false  
})

export const mutations = {
  setDarkmode(state, dm) {
    if(dm === true) {
      state.darkmode = true;
    } else {
      state.darkmode = false;
    }
  }
}
