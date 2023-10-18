import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { SearchProvider } from './components/search';
import { ShopContextProvider } from './context/context';
import {CheckoutPage} from "./pages/checkout";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </SearchProvider>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;