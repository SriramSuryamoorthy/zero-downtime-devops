import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");
  const [version, setVersion] = useState("");
const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
  fetch(`${API_URL}/api/status`)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
        setVersion(data.version);
      })
      .catch(() => {
        setStatus("Backend is not reachable");
      });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>🚀 Zero Downtime DevOps Project</h1>

      <h2>{status}</h2>

      <h3>Version: {version}</h3>
    </div>
  );
}

export default App;