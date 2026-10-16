import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gaurav:123invoice@cluster0.isovjrv.mongodb.net/InvoiceAI')
    .then( () => {
        console.log("MongoDB connected successfully");
    })
}