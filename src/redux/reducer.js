const initialState = {
  value: "0",
};

export default function reducer(state = initialState, action) {
  console.log(action);
  if (action.type === "INCREASE") {
    return { ...state, value: state.value + 1 };
  } else if (action.type === "DECREASE" && state.value >= 1) {
    return { ...state, value: state.value - 1 };
  } else if (action.type === "DELETE_ALL") {
    return { ...state, value: "" };
  }
  return state;
}
