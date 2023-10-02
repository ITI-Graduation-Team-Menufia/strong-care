import "./App.css";
import Slider from "./components/Slider";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App h-100 d-flex-column">
      <Navbar></Navbar>
      <Slider />
    </div>
  );
}

export default App;
