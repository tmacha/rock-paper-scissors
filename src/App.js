import "./styles.css";
import { useState } from "react";

function Player({ setChoice }) {
  return (
    <div className="player">
      <button
        onClick={() => {
          setChoice(1);
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          setChoice(2);
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          setChoice(3);
        }}
      >
        Scissors
      </button>
    </div>
  );
}

export default function Game() {
  const [player, setPlayerChoice] = useState(null);

  return (
    <>
      <Text />
      <Player setChoice={setPlayerChoice} />
    </>
  );
}

function Text() {
  const [text, setText] = useState("Waiting for your choice!");
  return <div className="text">{text}</div>;
}
