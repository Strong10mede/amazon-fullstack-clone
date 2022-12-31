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
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51MKygaSJsvX4oW7TVNDXo4QkcfhygqgCmcOmXkKGQk6YU5pcrUDDuHcaKMHa2Nnx3QINT5AMJKACz8ZYAyLMewzG00WG2DC0Fu"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("The USER is >>>", authUser);

      if (authUser) {
        //the user wa logged in / the user was logged in
        //dispatching an action
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
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
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
                <Elements stripe={promise}></Elements>
              </>
            }
          />
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
