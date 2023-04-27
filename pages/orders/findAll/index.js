import dataArray from "../../../data/data";
import {useEffect, useState} from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders([]);

        Promise.all(dataArray.map(item => item.function()))
            .then(results => {
                const validOrders = results.filter(result => result !== null);
                setOrders(validOrders);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Customer ID</th>
                <th>Total</th>
                <th>Shipping State</th>
                <th>Shipping City</th>
                <th>Shipping Postal Code</th>
                <th>Item 1 Name</th>
                <th>Item 1 Quantity</th>
                <th>Item 1 Price</th>
                <th>Item 2 Name</th>
                <th>Item 2 Quantity</th>
                <th>Item 2 Price</th>
                <th>Payment Method</th>
                <th>Payment Number</th>
                <th>Billing State</th>
                <th>Billing City</th>
                <th>Billing Postal Code</th>
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
    );
};

export default OrderList;
