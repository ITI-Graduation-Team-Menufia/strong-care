import "./App.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App h-100 d-flex-column">
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
