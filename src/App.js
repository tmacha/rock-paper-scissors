import "./styles.css";
import { useState } from "react";
import React from "react";

function Player({ setChoice, setGame }) {
  return (
    <div className="player">
      <button
        onClick={() => {
          setGame(true);
          setChoice(1);
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          setGame(true);
          setChoice(2);
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          setGame(true);
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
  const [text, setText] = useState("Waiting for your choice!");
  const [game, setGame] = useState(false);

  const choice = ["Rock", "Paper", "Scissor"];
  const a = player;

  if (game) {
    setGame(false);
    const b = Math.floor(Math.random() * 3) + 1;
    if (a === b) {
      setText(`${choice[a - 1]} vs ${choice[b - 1]} : Tie`);
    } else if (a === 1 && b === 2) {
      setText("Rock vs Paper : You lose");
    } else if (a === 1 && b === 3) {
      setText("Rock vs Scissors : You win");
    } else if (a === 2 && b === 1) {
      setText("Paper vs Rock : You win");
    } else if (a === 2 && b === 3) {
      setText("Paper vs Scissors : You lose");
    } else if (a === 3 && b === 1) {
      setText("Scissors vs Rock : You lose");
    } else if (a === 3 && b === 2) {
      setText("Scissors vs Paper : You win");
    }
  }

  return (
    <>
      <Text text={text} />
      <Player setChoice={setPlayerChoice} setGame={setGame} />
    </>
  );
}

function Text({ text }) {
  return <div className="text">{text}</div>;
}
