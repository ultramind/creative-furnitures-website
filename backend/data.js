import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'Akachukwu',
      email: 'udechukwuakachukwu@gmail.com',
      password: '$2y$10$Eckx5AMe6PrMeNfy/Bk0neUrvs5cKNnCnMIhWA2uC0PWblmphxStW',
      isAdmin: true
    },
    {
      name: 'Osas',
      email: 'angelosas@gmail.com',
      password: '$2y$10$Eckx5AMe6PrMeNfy/Bk0neUrvs5cKNnCnMIhWA2uC0PWblmphxStW',
      isAdmin: false
    }
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      images: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 23,
      description: 'High quality shirt'
    },
    {
      // _id: '2',
      name: 'Adidas Fit Pants',
      slug: 'adidas-fit-pants',
      category: 'Pants',
      images: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Puma',
      rating: 4,
      numReviews: 13,
      description: 'High quality shirt'
    },
    {
      // _id: '3',
      name: 'Plain Trousers',
      slug: 'plain-trousers',
      category: 'Trousers',
      images: '/images/p3.jpg',
      price: 200,
      countInStock: 1,
      brand: 'Boss',
      rating: 4.3,
      numReviews: 10,
      description: 'High quality shirt'
    },
    {
      // _id: '4',
      name: 'Kelvin Underwears',
      slug: 'kelvin-underwears',
      category: 'Underwears',
      images: '/images/d1.jpg',
      price: 120,
      countInStock: 19,
      brand: 'Kelvin',
      rating: 4.4,
      numReviews: 14,
      description: 'High quality shirt'
    },
    {
      // _id: '5',
      name: 'BYC Pollo',
      slug: 'byc-pollo',
      category: 'pollo',
      images: '/images/d2.jpg',
      price: 310,
      countInStock: 9,
      brand: 'BYC',
      rating: 4.7,
      numReviews: 42,
      description: 'High quality shirt'
    }
  ]
}

export default data
