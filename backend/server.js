// backend/server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import { SOLOMON_SYSTEM_PROMPT } from './prompts/solomonSystem.js';
import { askGemini } from './services/geminiService.js'; // make sure this appears only once
import { memory } from './services/memoryStore.js';      // Map-based store

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(compression());
app.use(morgan('dev'));
app.use(rateLimit({ windowMs: 60_000, max: 30 }));

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/chat', async (req, res) => {
  try {
    const normalize = (x) => {
      if (typeof x === 'string') return x;
      if (x && typeof x === 'object') return x.text ?? JSON.stringify(x);
      return x == null ? '' : String(x);
    };

    const { message, sessionId = 'default' } = req.body ?? {};
    const userMsg = normalize(message);
    const history = memory.get(sessionId) ?? [];

    const messages = [
      { role: 'system', content: SOLOMON_SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: userMsg },
    ];

    const { text } = await askGemini(messages);

    const newHistory = [
      ...history,
      { role: 'user', content: userMsg },
      { role: 'assistant', content: text },
    ];
    memory.set(sessionId, newHistory);

    res.json({ reply: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'CHAT_FAILED' });
  }
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
