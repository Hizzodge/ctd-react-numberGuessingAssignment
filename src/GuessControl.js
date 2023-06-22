import React from "react";
import { useState } from "react";
import Button from "./Button";

function GuessControl({onGuess}) {
  const [currentGuess, setCurrentGuess] = useState("");

  const onSubmitGuess = () => {
    const guessNumber = Number(currentGuess);
    onGuess(guessNumber);
    setCurrentGuess('');
  }

  const handleInputChange = (event) => {
      setCurrentGuess(event.target.value);
    };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}
  
export default GuessControl;