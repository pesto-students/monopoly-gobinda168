import { useState } from "react";
import "./App.scss";
import { AppProvider } from "./context/AppContext";
import { Board } from "./components/board/Board";
import { Start } from "./components/start/Start";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [startGame, setStartGame] = useState(false);
  return (
    <AppProvider>
      <ToastContainer />
      <div className="App">
        {startGame ? <Board /> : <Start setStartGame={setStartGame} />}
      </div>
    </AppProvider>
  );
}

export default App;
