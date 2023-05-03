import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        slug: { type: String, required: true, unique: false},
        images: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        }
      }
    ],
    shippingAddress: {
      fullname: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true }
    },
    paymentMethod: { type: String, required: true },
    paymentResults: {
      id: String,
      Status: String,
      update_time: String,
      email_address: String
    },
    itemPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date }
  },
  { timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)
export default Order
