import ProductsAll from "./pages/ProductsAll/ProductsAll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductSingle from "./pages/ProductSingle/ProductSingle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsAll />} />
        <Route path="/:id" element={<ProductSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
