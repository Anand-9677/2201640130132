import { logger } from "../logger";

export default function URLList({ urls }) {
  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied: " + shortUrl);
    logger("URL_COPIED", { short: shortUrl });
  };

  const now = Date.now();

  return (
    <div className="list">
      {urls.length === 0 ? (
        <p className="empty">No shortened URLs yet.</p>
      ) : (
        <ul>
          {urls.map((url, idx) => {
            const expired = now > url.expiry;
            return (
              <li key={idx} className="list-item">
                <div>
                  <p className="original">Original: {url.original}</p>
                  {expired ? (
                    <span className="expired">Expired</span>
                  ) : (
                    <a
                      href={url.original}
                      target="_blank"
                      rel="noreferrer"
                      className="short"
                    >
                      {url.short}
                    </a>
                  )}
                  <p className="validity">
                    Valid till: {new Date(url.expiry).toLocaleTimeString()}
                  </p>
                </div>
                {!expired && (
                  <button
                    onClick={() => handleCopy(url.short)}
                    className="copy"
                  >
                    Copy
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
