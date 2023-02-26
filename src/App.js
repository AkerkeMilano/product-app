import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { AboutShop } from "./pages/AboutShop/AboutShop";
import { NotFound } from "./pages/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/about" element={<AboutShop />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
