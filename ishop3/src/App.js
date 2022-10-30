import Shop from "./containers/Shop/Shop";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <Shop products={data} />
    </div>
  );
}

export default App;
