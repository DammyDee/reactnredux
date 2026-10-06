import { ORDER_BURGER } from "./BurgerTypes";

export const orderBurger = (number) => {
  return {
    type: ORDER_BURGER,
    num_of_burgers: number,
  };
};
