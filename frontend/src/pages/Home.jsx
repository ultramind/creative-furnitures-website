import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/index";
import WhyUs from "../components/Cards/WhyUs";
import Card from "../components/Cards/Card";
import products from "../constants/products";
import MediumCard from "../components/Cards/MediumCard";
import BigCard from "../components/Cards/BigCard";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [allProducts, setProducts] = useState([]);
  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <>
      <div>
        <Hero />
        <div>
          <WhyUs />
        </div>
        <div className="px-[15%]">
          <h1 className="text-center text-5xl font-bold">Exclusive Products</h1>

          <div className="flex gap-8 py-24 flex-wrap">
            {products.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
          </div>
        </div>
        {/* Advert Card */}
        <div className="px-[15%] mb-[5%]  flex gap-16">
          <MediumCard />
          <BigCard />
        </div>
      </div>
    </>
  );
};

export default Home;
