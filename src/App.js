import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/catalog/:type" element={<Catalog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
