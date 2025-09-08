import { useState } from "react";
import { logger } from "../logger"

export default function URLForm({ onAdd }) {
  const [input, setInput] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.startsWith("http://") && !input.startsWith("https://")) {
      alert("Enter a valid URL starting with http:// or https://");
      logger("INVALID_URL", { url: input });
      return;
    }

    const validityMinutes = validity ? parseInt(validity) : 30;
    const expiry = Date.now() + validityMinutes * 60 * 1000;

    const urls = Array.from({ length: 5 }, () => {
      const shortCode = Math.random().toString(36).substring(2, 8);
      const shortUrl = `https://short.ly/${shortCode}`;
      return { original: input, short: shortUrl, expiry };
    });

    onAdd(urls);

    logger("URLS_SHORTENED", { original: input, urls });

    setInput("");
    setValidity("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your long URL..."
        className="input"
      />
      <input
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        placeholder="Validity (mins, optional)"
        className="input small"
      />
      <button type="submit" className="button">
        Shorten
      </button>
    </form>
  );
}
