import mongoose from "mongoose";
import user from "../schema/userSchema";
const UserModel = mongoose.Model("userDetail", user);
