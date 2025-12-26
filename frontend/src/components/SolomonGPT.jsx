import { useEffect, useRef, useState } from "react";
import { chatWithSolomon } from "../agents/chatApi";
import "./SolomonGPT.css";

export default function SolomonGPT() {
  const [log, setLog] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m SolomonGPT 👋 — your barbershop assistant. Ask about fades, beard trim, prices, or directions.",
    },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log, loading]);

  async function sendMessage(msgText) {
    const content = (msgText ?? text).trim();
    if (!content || loading) return;

    const next = [...log, { role: "user", content }];
    setLog(next);
    setText("");
    setLoading(true);

    try {
      const reply = await chatWithSolomon(next);
      setLog([...next, reply]);
    } catch (err) {
      console.error(err);
      setLog([
        ...next,
        { role: "assistant", content: "Sorry—something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const suggestions = [
    "What are your hours?",
    "Where is the shop?",
    "How much is a skin fade?",
    "Do you do beard trim and line-up?",
    "Do you have services for women?",
  ];

  return (
    <div className="sgpt-wrap">
      <div className="sgpt-card">
        <header className="sgpt-head">
          <div className="dot" />
          <div>
            <h3>SolomonGPT</h3>
            <p className="muted">Barbershop Assistant • 1351 Danforth Ave, Toronto</p>
          </div>
        </header>

        <div className="sgpt-body" ref={listRef}>
          {log.map((m, i) => (
            <div key={i} className={`msg ${m.role === "assistant" ? "bot" : "me"}`} aria-label={m.role}>
              <div className="bubble">{m.content}</div>
            </div>
          ))}
          {loading && (
            <div className="msg bot">
              <div className="bubble typing">
                <span className="dotty"><span /></span>
              </div>
            </div>
          )}
        </div>

        <div className="chips">
          {suggestions.map((s) => (
            <button key={s} className="chip" onClick={() => sendMessage(s)} disabled={loading}>
              {s}
            </button>
          ))}
        </div>

        <footer className="sgpt-input">
          <textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your question…  (Enter to send, Shift+Enter for new line)"
            rows={1}
            disabled={loading}
          />
          <button className="send" onClick={() => sendMessage()} disabled={loading || !text.trim()}>
            Send
          </button>
        </footer>
      </div>
    </div>
  );
}
