const initState = {
  user: [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
  ],
};
const rootReducer = (state = initState, action) => {
  return state;
};
export default rootReducer;
