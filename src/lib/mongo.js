import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let isConnected = false; // Track the connection status

export async function connectToDatabase() {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
    return db;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Could not connect to MongoDB");
  }
}
