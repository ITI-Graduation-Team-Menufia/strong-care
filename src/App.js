import "./App.css";
import Slider from "./components/Slider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider className="mx-auto" />
      <Footer></Footer>
    </div>
  );
}

export default App;
