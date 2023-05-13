import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Fullname is requireed"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Enter a unique email address"],
    },
    password: { type: String, required: [true, "Password empty"] },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

// create tthe User model
const User = mongoose.model("User", userSchema);
export default User;
