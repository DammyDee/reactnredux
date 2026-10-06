import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import BurgerBox from "./components/BurgerBox";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
      <BurgerBox />
    </Provider>
  );
}

export default App;
