import "./App.css";
import Figure from "./components/figure/Figure";
import Header from "./components/header/Header";
import Notification from "./components/notification/Notification";
import Popup from "./components/popup/Popup";
import Word from "./components/word/Word";
import WrongLetters from "./components/wrong-letters/WrongLetters";

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
      <Popup />
      <Notification />
    </>
  );
}

export default App;
