import { Schema } from "mongoose";

const user = new Schema({
  name: String,
  mail: String,
  age: Number,
  salary: Number,
});

export default user;
