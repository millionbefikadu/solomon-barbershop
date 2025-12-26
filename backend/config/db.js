// backend/config/db.js
import mongoose from "mongoose";

export async function connectDB(uri) {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { dbName: "solomon_chat" });
  console.log("✅ MongoDB connected");
}
