import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About ></About>
      <ContactUSForm className="mt-5"></ContactUSForm>
    </div>
  );
}

export default App;
