//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "https://orderservice-production-9add.up.railway.app";

// let host = "ep-withered-river-482072.us-east-2.aws.neon.tech";

let findAllOrder = () => {
 return fetch(host + '/orders/findAll')
        .then(x => x.json()); 
};

let addNewOrder = (order) => {
    return fetch(host + "/orders/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId: order.customerId,
            total: order.total,
            shippingAddress: order.shippingAddress,
            items: order.items,
            payment: order.payment
        })
    }).then(response => {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    }).then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
};

const shippingAddress = {
    state: "",
    city: "",
    postalCode: ""
};

const items = [
    {
        name: "",
        quantity: 0,
        price: 0
    },
    {
        name: "",
        quantity: 0,
        price: 0
    }
];

const payment = {
    method: "",
    number: "",
    billingAddress: {
        state: "",
        city: "",
        postalCode: ""
    }
};


let data = {
    orders: findAllOrder,
    addNewOrder: addNewOrder
};

export default data;
export { addNewOrder, shippingAddress, items, payment };