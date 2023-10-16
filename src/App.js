import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import { Main } from "./pages/Main";
import Warranty from './components/Warranty'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/admindashboard/*"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
        <Route path="*" element={<Main></Main>}></Route>
      </Routes>

      <Warranty></Warranty>
    </div>
  );
}

export default App;
