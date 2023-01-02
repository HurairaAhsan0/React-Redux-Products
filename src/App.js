import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeaderComponent from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/Products/:productId" element={<ProductDetails />} />
          <Route>404 Not Found !</Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
