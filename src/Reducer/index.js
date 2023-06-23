export function reducer(state, action) {
  switch (action.type) {
    case "INC":
      state = state + 1;
      localStorage.setItem("count", state);
      return state;
    case "DEC":
      state = state -= 1;
      localStorage.setItem("count", state);
      return state;
    default:
      return state;
  }
}
