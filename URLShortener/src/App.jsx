import { useState, useEffect } from "react";
import URLForm from "./components/URLForm";
import URLList from "./components/URLList";
import { logger } from "./logger";

function App() {
  const [urls, setUrls] = useState(() => {
    const saved = localStorage.getItem("urls");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(urls));
    logger("URLS_UPDATED", urls);
  }, [urls]);

  const handleAdd = (newUrls) => {
    const longUrl = newUrls[0].original;
    const filtered = urls.filter((u) => u.original !== longUrl);

    setUrls([...newUrls, ...filtered]);
  };

  return (
    <div className="container">
      <h1 className="title">🔗 URL Shortener</h1>
      <URLForm onAdd={handleAdd} />
      <URLList urls={urls} />
    </div>
  );
}

export default App;
