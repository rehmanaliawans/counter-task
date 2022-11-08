import "./App.css";
import Division from "./components/division";
import Counter from "./components/counter";
import Multiplication from "./components/multiplication";
import Subtraction from "./components/subtraction";
import { useGlobalContext } from "./context";

function App() {
  return (
    <div className="App">
      <Multiplication />
      <Subtraction />
      <Division />
      <Counter />
    </div>
  );
}

export default App;
