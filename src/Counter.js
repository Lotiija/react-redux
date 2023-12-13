import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

const Counter = () => {
  const count = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return ( 
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment(50))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : " "}
    </div>
   );
}
 
export default Counter;