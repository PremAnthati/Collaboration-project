import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
