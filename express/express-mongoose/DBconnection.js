import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/employee");
};

export default connect;
