import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./redux/burger/BurgerActions";

function BurgerBox() {
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="text">Number of pizza base available - {burgerBuns}</h2>
      <button className="btn" onClick={() => dispatch(orderBurger())}>
        Order Pizza
      </button>
    </div>
  );
}

export default BurgerBox;
