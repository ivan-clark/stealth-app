import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";

const App = () => { 
  const isLoggedIn = localStorage.getItem("auth") === "true";

  const protect = (Component) => (
    <PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/login">
      <Component />
    </PrivateRoute>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={protect(Home)} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
