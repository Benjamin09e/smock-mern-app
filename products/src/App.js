import "./App.css";
import Panel from "./pages/Panel";
import Product from "./pages/Product";
import Items from "./pages/Items";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/admin" element={<Panel />}/>
        <Route path="/products" element={<Items />}/>
      </Routes>
      
    </div>
  );
}

export default App;
