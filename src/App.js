import Chessboard from "./components/Chessboard";
import "./App.css";

function App() {
  return (
    <div id="root">
      <div id="instructions">
        To complete this challenge, build a chess board using React + CSS that
        looks <strong>exactly</strong> like the below image:
        <br />
        <br />
        <div>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phpUnsLhe.png"
            height="400"
            alt="Chess board with green and yellow squares"
          />
        </div>
      </div>

      <div id="board-container">
        <Chessboard />
      </div>
    </div>
  );
}

export default App;
