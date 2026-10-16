import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://devbharat03_db_user:123invoice@cluster0.isovjrv.mongodb.net/InvoiceAI')
    .then( () => {
        console.log("MongoDB connected successfully");
    })
}