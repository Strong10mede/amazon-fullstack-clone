import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Orders from "./Components/Orders/Orders";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("The USER is >>>", authUser);

      if (authUser) {
        //the user wa logged in / the user was logged in

        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatchEvent({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
