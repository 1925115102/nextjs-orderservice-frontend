import styles from "../../../styles/order.module.css";
import data from '../../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../../components/Spinner";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      data.orders()
          .then((data) => {
              console.log(data); // log the data here
              setOrders(data);
              setLoading(false);
          })
          .catch((e) => console.log(e));
      }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td data-label="Customer ID">{order.customerId}</td>
                  <td data-label="Total">{order.total}</td>
                  <td data-label="Shipping State">{order.shippingAddress.state}</td>
                  <td data-label="Shipping City">{order.shippingAddress.city}</td>
                  <td data-label="Shipping Postal Code">{order.shippingAddress.postalCode}</td>
                  <td data-label="Item 1 Name">{order.items[0].name}</td>
                  <td data-label="Item 1 Quantity">{order.items[0].quantity}</td>
                  <td data-label="Item 1 Price">{order.items[0].price}</td>
                  <td data-label="Item 2 Name">{order.items[1].name}</td>
                  <td data-label="Item 2 Quantity">{order.items[1].quantity}</td>
                  <td data-label="Item 2 Price">{order.items[1].price}</td>
                  <td data-label="Payment Method">{order.payment.method}</td>
                  <td data-label="Payment Number">{order.payment.number}</td>
                  <td data-label="Billing State">{order.payment.billingAddress.state}</td>
                  <td data-label="Billing City">{order.payment.billingAddress.city}</td>
                  <td data-label="Billing Postal Code">{order.payment.billingAddress.postalCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Order;
