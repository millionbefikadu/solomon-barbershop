// backend/services/memoryStore.js
import { Conversation } from "../models/Conversation.js";
import { solomonMemory } from "../data/memory.js";
export const memory = new Map();
const LIMIT = 8; // keep last N messages

export async function getHistory(sessionId) {
  let convo = await Conversation.findOne({ sessionId });
  if (!convo) {
    convo = await Conversation.create({ sessionId, messages: [] });
  }
  return convo.messages;
}

export async function addHistory(sessionId, msg, limit = LIMIT) {
  const convo = await Conversation.findOneAndUpdate(
    { sessionId },
    { $push: { messages: msg }, $set: { updatedAt: new Date() } },
    { new: true, upsert: true }
  );

  if (convo.messages.length > limit) {
    convo.messages = convo.messages.slice(-limit);
    await convo.save();
  }
}

export async function buildMessages(sessionId, userText) {
  const history = await getHistory(sessionId);
  return [
    { role: "system", content: solomonMemory.trim() },
    ...history,
    { role: "user", content: userText },
  ];
}
