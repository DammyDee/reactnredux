import { createStore, combineReducers, applyMiddleware } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./products/ProductsReducers";
import { thunk } from "redux-thunk";

const store = createStore(
  combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productsReducer,
  }),
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
