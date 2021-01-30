import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h1 style={{fontSize: '18px'}}>คำตอบ</h1>
      <h1 style={{fontSize: '18px'}}>1. กรุงเทพ</h1>
      <h1 style={{fontSize: '18px'}}>2. JavaScript</h1>
      <h1 style={{fontSize: '18px'}}>3. O(1)</h1>
      <h1 style={{fontSize: '18px'}}>4. Queue</h1>
      <h1 style={{fontSize: '18px'}}>5. Stack</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>เริ่มใหม่</button>
    </div>
  );
};

export default EndScreen;
