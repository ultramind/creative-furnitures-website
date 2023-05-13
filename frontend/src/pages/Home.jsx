import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/index";
import WhyUs from "../components/Cards/WhyUs";
import Card from "../components/Cards/Card";
import products from "../constants/products";
import MediumCard from "../components/Cards/MediumCard";
import BigCard from "../components/Cards/BigCard";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Loader from "../components/Loader";

const Home = () => {
  const [allProducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setProducts(products);
  // }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/product");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        // toast.error(getError(error));
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div>
        <Hero />
        <div>
          <WhyUs />
        </div>
        <div className="md:px-[10%] my-12">
          <h1 className="text-center text-5xl font-bold">Exclusive Products</h1>

          <div className="flex gap-4 py-12 px-4 flex-wrap justify-center">
            {loading ? (
              <Loader />
            ) : (
              allProducts.map((product, index) => {
                return <Card product={product} key={index} />;
              })
            )}
          </div>
        </div>
        {/* Advert Card */}
        <div className="px-4 md:px-[15%] mb-[5%]  flex gap-16 ">
          <MediumCard />
          <BigCard />
        </div>
      </div>
    </>
  );
};

export default Home;
