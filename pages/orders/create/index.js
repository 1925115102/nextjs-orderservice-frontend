
import styles from "../../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../../data/data'

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.addNewOrder(values);
        console.log(response);
        if(response != null){
            reset();
        }

    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new order</h1>
                <form action="orders#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="customerId">Customer ID</label>
                            <input type="text"
                                   id="customerId"
                                   name="customerId"
                                   {...register('customerId',
                                       {required: true,
                                           message: 'please enter a customer ID' })}
                                   placeholder="Enter Customer ID"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="total">Total</label>
                            <input type="number"
                                   id="total"
                                   name="total"
                                   {...register('total',
                                       {required: true,
                                           message: 'please enter a total amount' })}
                                   placeholder="Enter Total"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress.state">Shipping State</label>
                            <input type="text"
                                   id="shippingAddress.state"
                                   name="shippingAddress.state"
                                   {...register('shippingAddress.state',
                                       {required: true,
                                           message: 'please enter a shipping state' })}
                                   placeholder="Enter Shipping State"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress.city">Shipping City</label>
                            <input type="text"
                                   id="shippingAddress.city"
                                   name="shippingAddress.city"
                                   {...register('shippingAddress.city',
                                       {required: true,
                                           message: 'please enter a shipping city' })}
                                   placeholder="Enter Shipping City"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress.postalCode">Shipping Postal Code</label>
                            <input type="number"
                                   id="shippingAddress.postalCode"
                                   name="shippingAddress.postalCode"
                                   {...register('shippingAddress.postalCode',
                                       {required: true,
                                           message: 'please enter a shipping postal code' })}
                                   placeholder="Enter Shipping Postal Code"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="items[0].name">Item 1 Name</label>
                            <input type="text"
                                   id="items[0].name"
                                   name="items[0].name"
                                   {...register('items[0].name',
                                       {required: true,
                                           message: 'please enter the name of item 1' })}
                                   placeholder="Enter Item 1 Name"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="items[0].quantity">Item 1 Quantity</label>
                            <input type="number"
                                   id="items[0].quantity"
                                   name="items[0].quantity"
                                   {...register('items[0].quantity',
                                       {required: true,
                                           message: 'please enter the quantity of item 1' })}
                                   placeholder="Enter Item 1 Quantity"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="items[0].price">Item 1 Price</label>
                            <input type="number"
                                   id="items[0].price"
                                   name="items[0].price"
                                   {...register('items[0].price',
                                       {required: true,
                                           message: 'please enter the price of item 1' })}
                                   placeholder="Enter Item 1 Price"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="items[1].name">Item 2 Name</label>
                            <input type="text"
                                   id="items[1].name"
                                   name="items[1].name"
                                {...register('items[1].name',
                                    {required: true,
                                        message: 'please enter thename of item 2' })}
                                   placeholder="Enter Item 2 Name"/>

                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="items[1].quantity">Item 2 Quantity</label>
                            <input type="number"
                                   id="items[1].quantity"
                                   name="items[1].quantity"
                                   {...register('items[1].quantity',
                                       {required: true,
                                           message: 'please enter the quantity of item 2' })}
                                   placeholder="Enter Item 2 Quantity"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="items[1].price">Item 2 Price</label>
                            <input type="number"
                                   id="items[1].price"
                                   name="items[1].price"
                                   {...register('items[1].price',
                                       {required: true,
                                           message: 'please enter the price of item 2' })}
                                   placeholder="Enter Item 2 Price"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.method">Payment Method</label>
                            <input type="text"
                                   id="payment.method"
                                   name="payment.method"
                                   {...register('payment.method',
                                       {required: true,
                                           message: 'please enter the payment method' })}
                                   placeholder="Enter Payment Method"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.number">Payment Number</label>
                            <input type="text"
                                   id="payment.number"
                                   name="payment.number"
                                   {...register('payment.number',
                                       {required: true,
                                           message: 'please enter the payment number' })}
                                   placeholder="Enter Payment Number"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.billingAddress.state">Billing State</label>
                            <input type="text"
                                   id="payment.billingAddress.state"
                                   name="payment.billingAddress.state"
                                   {...register('payment.billingAddress.state',
                                       {required: true,
                                           message: 'please enter the billing state' })}
                                   placeholder="Enter Billing State"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.billingAddress.city">Billing City</label>
                            <input type="text"
                                   id="payment.billingAddress.city"
                                   name="payment.billingAddress.city"
                                   {...register('payment.billingAddress.city',
                                       {required: true,
                                           message: 'please enter the billing city' })}
                                   placeholder="Enter Billing City"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.billingAddress.postalCode">Billing Postal Code</label>
                            <input type="number"
                                   id="payment.billingAddress.postalCode"
                                   name="payment.billingAddress.postalCode"
                                   {...register('payment.billingAddress.postalCode',
                                       {required: true,
                                           message: 'please enter the billing postal code' })}
                                   placeholder="Enter Billing Postal Code"/>
                        </div>


                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order;