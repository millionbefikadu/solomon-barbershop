// Simple API client for SolomonGPT

const API_BASE = "https://solomon-barbershop.onrender.com";

export async function chatWithSolomon(history) {
  // latest user message
  const lastUser = [...history].reverse().find(m => m.role === "user");
  const message = lastUser?.content ?? "";

  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      sessionId: "web",
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => res.statusText);
    throw new Error(`API ${res.status}: ${err}`);
  }

  const data = await res.json();
  return {
    role: "assistant",
    content: data.reply || "No reply",
  };
}