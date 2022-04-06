import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// import Orders from './components/orders.components';

import RegistrationComp from './components/RegistrationComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInComp from './components/SignInComp';
import Orders from './components/ordersOomponents';
import HeaderComp from './components/HeaderComp';
// import Order from './components/single-order.component';
function App() {
  return (
    <div>
      <HeaderComp />
      {/* <Orders/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInComp />} />
          <Route exact path="/register" element={<RegistrationComp />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
