import { createStore, combineReducers, applyMiddleware } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ pizza: pizzaReducer, burger: burgerReducer }),
  composeWithDevTools(applyMiddleware(logger)),
);

export default store;
