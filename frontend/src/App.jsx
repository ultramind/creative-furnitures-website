import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/PageLayout";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import axios from "axios";
import Product from "./pages/Product";

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const welcome = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000");
        setCategories(data);
        console.log(data);
      } catch (error) {
        // toast.error(getError(error));
        console.log(error);
      }
    };
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
