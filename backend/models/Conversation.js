// backend/models/Conversation.js
import mongoose from "mongoose";

const MsgSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["user", "assistant"], required: true },
    content: { type: String, required: true },
  },
  { _id: false, timestamps: true }
);

const ConversationSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true, unique: true },
    messages: { type: [MsgSchema], default: [] },
    updatedAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

ConversationSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const Conversation = mongoose.model("Conversation", ConversationSchema);
