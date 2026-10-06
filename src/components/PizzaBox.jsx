import React, { useState } from "react";
import { orderPizza } from "./redux/pizza/PizzaActions";
import { connect, useDispatch, useSelector } from "react-redux";

function PizzaBox() {
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  return (
    <div className="container">
      <h2 className="text">Number of pizza base available - {pizzaBase}</h2>
      <input type="text" placeholder="Enter number of burgers you want" value={num} onChange={e=>setNum(e.target.value)}/>
      <button className="btn" onClick={()=>dispatch(orderPizza(num))}>Order Pizza</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     pizzaBase: state.pizzaBase,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     orderPizza: () => dispatch(orderPizza()),
//   };
// };

export default PizzaBox;
