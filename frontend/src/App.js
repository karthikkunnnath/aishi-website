import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>AISHI Website</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;