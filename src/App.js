import Store from "./store/store";
import Counter from './store/counter'
import { Provider } from "react-redux";

function App() {
  return (
    < Provider store={Store}>
     <Counter/>
    </Provider>
  );
}

export default App;
