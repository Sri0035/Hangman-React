import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  });

  const [guessedLetters, setGuessesLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}> Nothing here</div>
      <HangmanDrawing />
      {/* <HangmanWord />
      <Keyboard /> */}
    </div>
  );
}

export default App;
