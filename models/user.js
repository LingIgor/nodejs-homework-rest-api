import { Schema, model } from "mongoose";
import { handleSaveError, validateAtUpdate } from "./hooks.js";
import { emailRegexp } from "../constants/user-constant.js";

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
});

userSchema.pre("findOneAndUpdate", validateAtUpdate);
userSchema.post("save", handleSaveError);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
