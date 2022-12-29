import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Orders from "./Components/Orders/Orders";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
