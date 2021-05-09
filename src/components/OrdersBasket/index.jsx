import React from "react";
import { data } from "../../store/data";
import { useSelector, useDispatch } from "react-redux";
import { add_order } from "../../store/actions";

export const OrdersBasket = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  return (
    <div style={styles.orderContainer}>
      <div style={styles.menuContainer}>
        <h1>Menu</h1>
        <ul>
          {data.map((el, id) => {
            return (
              <li
                onClick={() => dispatch(add_order(el))}
                style={{ cursor: "pointer" }}
                key={id}
              >
                {el.title} <b>{el.price}</b>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={styles.basketContainer}>
        <h1>Orders</h1>
        <ul>
          {orders.map((el, id) => {
            return (
              <li key={id}>
                {el.title}
                <b>{el.price}</b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  orderContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  menuContainer: {
    width: "50%",
  },
  basketContainer: {
    width: "50%",
  },
};
