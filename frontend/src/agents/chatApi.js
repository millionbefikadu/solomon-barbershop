// Simple API client for SolomonGPT
const API_BASE =
  (import.meta.env.VITE_API_BASE_URL && import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '')) ||
  '';

export async function chatWithSolomon(history) {
  // latest user message (backend keeps session memory)
  const lastUser = [...history].reverse().find(m => m.role === 'user');
  const message = lastUser?.content ?? '';

  const res = await fetch(`${API_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, sessionId: 'web' }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => res.statusText);
    throw new Error(`API ${res.status}: ${err}`);
  }

  const data = await res.json(); // { reply: "..." }
  return { role: 'assistant', content: data.reply || '' };
}
