import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Products/>
      <Recommended/>
    </div>
  );
}

export default App;
