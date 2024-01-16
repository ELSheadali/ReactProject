import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Payment = React.lazy(() => import("pages/Payment"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const Assortmen = React.lazy(() => import("pages/Assortmen"));
const Landing = React.lazy(() => import("pages/Landing"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/assortmen" element={<Assortmen />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
