import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./redux/burger/BurgerActions";
import { useState } from "react";

function BurgerBox() {
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  return (
    <div className="container">
      <h2 className="text">Number of burger buns available - {burgerBuns}</h2>
      <input
        type="text"
        placeholder="Enter number of burgers you want"
        onChange={(e) => setNum(e.target.value)}
        value={num}
      />
      <button className="btn" onClick={() => dispatch(orderBurger(num))}>
        Order Burger
      </button>
    </div>
  );
}

export default BurgerBox;
