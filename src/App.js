import "./App.css";
import CardLeft from "./Components/CardLeft/index";
import CardRight from "./Components/CardRight/index";

function App() {
  return (
    <div className="App">
      <div className="app-center">
        <CardLeft />
        <CardRight />
      </div>
    </div>
  );
}

export default App;
