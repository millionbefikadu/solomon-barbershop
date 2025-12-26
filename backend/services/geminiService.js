import 'dotenv/config';
import fetch from 'node-fetch';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error('GEMINI_API_KEY is missing in your .env');

const MODEL = 'gemini-2.5-flash'; // or 'gemini-2.5-flash' / 'gemini-1.5-pro'

const toText = (c) => {
  if (typeof c === 'string') return c;
  if (Array.isArray(c)) return c.map(toText).join('\n');
  if (c && typeof c === 'object') return c.text ?? JSON.stringify(c);
  return c == null ? '' : String(c);
};

export async function askGemini(messages) {
  const contents = (messages || [])
    .map(m => ({ ...m, content: toText(m?.content) }))
    .filter(m => m.content.trim().length > 0)
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

  const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${apiKey}`;
  const body = { contents, generationConfig: { temperature: 0.6, maxOutputTokens: 4096 } };

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Gemini v1 error: ${resp.status} ${resp.statusText} — ${errText}`);
  }

  const data = await resp.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  return { text, raw: data };
}
