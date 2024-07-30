import "./App.css";
import Game from "./components/game";

function App() {
  return (
    <div className="App">
      <header className="app-header">Tic Toc Toe Game</header>
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
