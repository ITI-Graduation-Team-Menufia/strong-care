import "./App.css";
import ContactUSForm from "./components/ContactUSForm";
import FormOne from "./components/FormOne";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import FormTwo from "./components/FormTwo";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <About></About> */}
      {/* <ContactUSForm></ContactUSForm> */}
      <FormOne></FormOne>
      <FormTwo></FormTwo>
    </div>
  );
}

export default App;
