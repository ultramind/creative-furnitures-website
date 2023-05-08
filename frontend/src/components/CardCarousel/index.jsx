import React from "react";

const CardCarousel = () => {
  return (
    <div className="mb-24 px-[15%]">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Trending Items
      </h1>
      <Carousel>
        <div className="flex w-full overflow-x-scroll">
          {products.map((product, index) => {
            return <Card product={product} key={index} />;
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default CardCarousel;
