import { ORDER_PIZZA } from "./PizzaTypes";

export const orderPizza = (number) => {
  return {
    type: ORDER_PIZZA,
    num_of_pizzas: number
  };
};
