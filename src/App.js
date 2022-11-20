import Home from "./pages/Home";
import ModelLogin from "./components/Model/ModelLogin";
import Login from "./pages/login/Login";
import AppProvider from "./context/AppProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
      <Router>
        <AppProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
          </Routes>
          <ModelLogin />
          
        </AppProvider>
      </Router>
    );
  }
  
  export default App;