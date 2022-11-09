import Shop from "./containers/Shop/Shop";
import data from "./data.json";
function App() {
  return (
    <div className="App">
      <Shop products={data} />
    </div>
  );
}

export default App;
