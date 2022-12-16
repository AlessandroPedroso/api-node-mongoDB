import mongoose from "mongoose";

async function connectDatabase(){

 await mongoose.connect("mongodb+srv://alessandro:93oY3G5lAVdtZ5Bx@cluster0.7uinhdl.mongodb.net/?retryWrites=true&w=majority")
}

export default connectDatabase()