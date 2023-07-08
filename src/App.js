import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Shipping from "./pages/Shipping";
import WholeSale from "./pages/WholeSale";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/catalog/:type" element={<Catalog />} />
        <Route path="/wholesale" element={<WholeSale />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
