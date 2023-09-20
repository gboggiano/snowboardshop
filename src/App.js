import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar-comp/Navbar";
import ItemlistContainer from "./components/ItemlistCointainer-comp/ItemlistContainer";

const welcomemessage = {
  message:
    "Welcome to Snowter, the ultimate online destination for snowboard lovers. Whether you are a beginner or a pro, you will find everything you need to enjoy the snow and the slopes.",
  messageAlt: "¡¡ Site under construction!!",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemlistContainer
        message={welcomemessage.message}
        messageAlt={welcomemessage.messageAlt}
      />
    </div>
  );
}
export default App;
