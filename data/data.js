let host = "https://orderservice-production-9add.up.railway.app";

let findAllOrder = () => {
    return fetch(host + '/orders/findAll')
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            return null;
        });
};

let addNewOrder = (order) => {
    return fetch(host + "/orders/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json();
            } else {
                throw new Error('Failed to add the order.');
            }
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
};

const order = {
    customerId: "12345",
    total: 100,
    shippingAddress: {
        state: "California",
        city: "Los Angeles",
        postalCode: "90001"
    },
    items: [
        {
            name: "Item 1",
            quantity: 2,
            price: 10
        },
        {
            name: "Item 2",
            quantity: 1,
            price: 20
        }
    ],
    payment: {
        method: "Credit Card",
        number: "**** **** **** 1234",
        billingAddress: {
            state: "California",
            city: "Los Angeles",
            postalCode: "90001"
        }
    }
};

// Call the addNewOrder function with the order object
addNewOrder(order)
    .then(result => {
        console.log("Order added successfully:", result);
    })
    .catch(error => {
        console.log("Failed to add the order:", error);
    });

let data = {
    orders: findAllOrder
};

let dataArray = [];

for (let [key, value] of Object.entries(data)) {
    if (typeof value === 'function') {
        dataArray.push({ name: key, function: value });
    }
}

export default dataArray;
