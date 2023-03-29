import AppLayout from "./layout";
import Home from "./modules/home";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./modules/shopping-cart";

const App = () => {
  return (
    <div className="container">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </AppLayout>
    </div>
  );
};

export default App;
