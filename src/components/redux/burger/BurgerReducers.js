import { ORDER_BURGER } from "./BurgerTypes";

const initialState = { burgerBuns: 300 };
const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBuns: state.burgerBuns - action.num_of_burgers,
      };
    default:
      return state;
  }
};

export default burgerReducer;
