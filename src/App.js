import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import { Main } from "./pages/Main";
import withAuthentication from "./guards/ProtectedRoute"; // Import your HOC

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/admindashboard"
          element={withAuthentication(AdminDashboard)}
        />

        {/* <Route
          path="/admindashboard/*"
          element={<AdminDashboard></AdminDashboard>}
        ></Route> */}
        <Route path="*" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
