import React, { useState } from "react";
import "./App.css";
import GetMatch from "./components/components/GetMatch";
import MatchCard from "./components/components/MatchCard";

export default function App() {
  const [enjoying, setEnjoying] = useState(false);

  const likes = () => {
    setEnjoying(!enjoying);
  };

  return (
    <div className="App">
      {enjoying === true ? (
        <GetMatch start={likes} />
      ) : (
        <MatchCard enjoying={likes} />
      )}
    </div>
  );
}
