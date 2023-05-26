import "./App.css";
import CardLeft from "./Components/CardLeft/index";
import CardRight from "./Components/CardRight/index";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="app-center">
        <AiOutlineClose className="close" size={20} />
        <CardLeft />
        <CardRight />
      </div>
    </div>
  );
}

export default App;
