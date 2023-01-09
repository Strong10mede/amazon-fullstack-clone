import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./Orders.css";
import { useStateValue } from "../../StateProvider";
import Order from "./Order";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const readRef = collection(db, "users", user?.uid, "orders");
      const q = query(readRef, orderBy("created", "desc"));

      onSnapshot(q, (snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
