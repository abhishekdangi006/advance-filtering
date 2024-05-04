import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
      
    </div>
  );
}

export default App;
