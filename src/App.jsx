import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, lazy, Suspense } from "react";
import useAuthStore from "./store/authStore";
import AuthGuard from "./components/AuthGuard";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const HomeLayout = lazy(() => import("./components/HomeLayout/HomeLayout"));
const ShopLayout = lazy(() => import("./components/ShopLayout/ShopLayout"));
const AboutLayout = lazy(() => import("./components/AboutLayout/AboutLayout"));
const ContactLayout = lazy(() => import("./components/ContactLayout/ContactLayout"));
const Cart = lazy(() => import("./components/Cart"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const Orders = lazy(() => import("./components/Orders"));
const Navbar = lazy(() => import("./Navbar"));
const ScrollToTop = lazy(() => import("./ScrollToTop"));

// Image imports removed in favor of public folder paths

function App() {

  const products = [
    {
      id: 1,
      img: "/trendingPlant2.png",
      name: "Zen Bamboo Grove",
      type: "Indoor Plants",
      price: 850,
    },
    {
      id: 2,
      img: "/trendingPlant1.png",
      name: "Tropical Breeze",
      type: "Indoor Plants",
      price: 750,
    },
    {
      id: 3,
      img: "/trendingPlant3.png",
      name: "Starlight Succulent",
      type: "Indoor Plants",
      price: 920,
    },
    {
      id: 4,
      img: "/popularPlant1.png",
      name: "Desert Bloom",
      type: "Indoor Plants",
      price: 650,
    },
    {
      id: 5,
      img: "/popularPlant2.png",
      name: "Golden Glow",
      type: "Indoor Plants",
      price: 800,
    },
    {
      id: 6,
      img: "/popularPlant3.png",
      name: "Silver Mist",
      type: "Indoor Plants",
      price: 920,
    },
    {
      id: 7,
      img: "/popularPlant5.png",
      name: "Spider Plant",
      type: "Indoor Plants",
      price: 450,
    },
    {
      id: 8,
      img: "/popularPlant6.png",
      name: "Lucky Bamboo Plant",
      type: "Indoor Plants",
      price: 350,
    },
    {
      id: 9,
      img: "/popularPlant7.png",
      name: "Peace Lily",
      type: "Indoor Plants",
      price: 550,
    },
  ];

  const initializeAuthListener = useAuthStore((state) => state.initializeAuthListener);

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, [initializeAuthListener]);

  const LoadingFallback = () => (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
    </div>
  );

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/" element={
              <AuthGuard>
                <HomeLayout />
              </AuthGuard>
            } />
            <Route path="/shop" element={
              <AuthGuard>
                <ShopLayout products={products} />
              </AuthGuard>
            } />
            <Route path="/about" element={
              <AuthGuard>
                <AboutLayout />
              </AuthGuard>
            } />
            <Route path="/contact" element={
              <AuthGuard>
                <ContactLayout />
              </AuthGuard>
            } />
            <Route path="/cart" element={
              <AuthGuard>
                <Cart />
              </AuthGuard>
            } />
            <Route path="/orders" element={
              <AuthGuard>
                <Orders />
              </AuthGuard>
            } />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
