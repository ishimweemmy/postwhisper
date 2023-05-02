import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Home from "./pages/home/Home";
import Notfound from "./pages/Nofound/Notfound";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.token);
  console.log(user)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/register"
            element={!user ? <Signup /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
