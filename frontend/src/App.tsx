import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/status")
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