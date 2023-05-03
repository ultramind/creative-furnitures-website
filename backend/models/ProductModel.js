import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

// create tthe product model
const Product = mongoose.model('Product', productSchema)
export default Product
