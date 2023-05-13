import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Akachukwu",
      email: "udechukwuakachukwu@gmail.com",
      password: "$2y$10$Eckx5AMe6PrMeNfy/Bk0neUrvs5cKNnCnMIhWA2uC0PWblmphxStW",
      isAdmin: true,
    },
    {
      name: "Osas",
      email: "angelosas@gmail.com",
      password: "$2y$10$Eckx5AMe6PrMeNfy/Bk0neUrvs5cKNnCnMIhWA2uC0PWblmphxStW",
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Sofa Collection",
      category: "sofa",
      slug: "sofa_collection",
      numReviews: 70,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-1.png",
      price: 2000,
      countInStock: 32,
      rating: 2,
    },
    {
      name: "Dinning Collection",
      category: "dinning",
      slug: "dinning_collection2",
      numReviews: 30,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-2.png",
      price: 7000,
      countInStock: 27,
      rating: 4,
    },
    {
      name: "King size bed",
      category: "bed",
      slug: "king_size_bed",
      numReviews: 70,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-5.png",
      price: 3500,
      countInStock: 12,
      rating: 4.5,
    },
    {
      name: "Many Desktop Publishing",
      category: "table",
      slug: "many_desktop_publishing",
      numReviews: 23,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-4.png",
      price: 3500,
      countInStock: 12,
      rating: 4.5,
    },
    {
      name: "Dinning Collection",
      category: "dinning",
      slug: "dinning_collection3",
      numReviews: 30,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-2.png",
      price: 7000,
      countInStock: 27,
      rating: 4,
    },
    {
      name: "King size bed",
      category: "bed",
      slug: "king_size_bed2",
      numReviews: 35,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-5.png",
      price: 3500,
      countInStock: 12,
      rating: 4.5,
    },
    {
      name: "Sofa Collection",
      category: "sofa",
      slug: "sofa_collection2",
      numReviews: 70,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-1.png",
      price: 2000,
      countInStock: 32,
      rating: 2,
    },
    {
      name: "Dinning Collection",
      category: "dinning",
      numReviews: 12,
      slug: "dinning-collection3",
      numReviews: 30,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam error quidem cum, aperiam optio sed sit doloremque harum excepturi ratione eaque eius ipsam! Incidunt nostrum iure nihil quam ipsam placeat.",
      images: "assets/images/items/item-2.png",
      price: 7000,
      countInStock: 27,
      rating: 4,
    },
  ],
};

export default data;
