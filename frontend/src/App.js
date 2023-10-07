import LandingPage from "./components/LandingPage/LandingPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './components/LoginSignUp/login'
import Signup from './components/LoginSignUp/signup'
import HomePage from "./components/Homepage/HomePage";
import Planet from "./components/Planets/planet";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/HomePage" element={<HomePage />} ></Route>
          <Route path="/planet" element={<Planet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
