// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About';
import Products from './pages/Product/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
