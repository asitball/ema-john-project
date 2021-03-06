import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }
    const tax = total /10;
    // const grandTotal = (total + shipping + tax.toFixed(2));

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
           <p>Items Order:{cart.length} </p>
           <p>Product Price: {formateNumber (total)}</p>
           <p><small>Shipping Cost: {formateNumber(shipping)}</small></p>
           <p><small>Tax:{formateNumber(tax)}</small></p>
           <p>Total Price: {formateNumber(total)}</p>
           <br/>
          <Link to="/review">
          <button className="main-button">Review Order</button>
          </Link>
        </div>
    );
};

export default Cart;