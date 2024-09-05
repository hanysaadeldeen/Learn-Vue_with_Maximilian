export default {
  IncreaseWithFixed(state) {
    return state.count + 10;
  },
  IncreaseWithDifference(state) {
    return state.count + 20;
  },
  GetArgument: (state) => (value) => {
    return state.count + value;
  },
};
