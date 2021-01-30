import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <h2>5 ข้อ</h2>
      <label style={{fontSize: '29px'}}>ใส่ชื่อของคุณ</label>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        เริ่ม
      </button>
    </div>
  );
}

export default Menu;
