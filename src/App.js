import { createStore } from "redux";
import CombineReducer from "./Reducers/CombineReducer";
import { Provider } from "react-redux";
import Counter from "./Counter";

const store = createStore(
  CombineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
