import { useContext } from "react";
import Header from "./components/header/Header";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Setting";
import SingleP from "./pages/singleP/SingleP";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Home /> : <Login />}
        />
        <Route path="/post/:id" element={<SingleP />} />
        <Route
          path="/write"
          element={user ? <Write /> : <Login />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
