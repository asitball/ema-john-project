import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first20 = fakeData.slice(0,20);
    const [product, setProduct] = useState(first20);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
         const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct =newCart.filter(pd=>pd.key ===product.key)
        const count =sameProduct.length
        addToDatabaseCart(product.key,count);
    }
    
    return (
    
        <div className="shop-container">
            <div className='product-container'>
               
                {
                product.map(pd => <Product
                key={pd.key}
                showAddToCart={true}
                 handleAddProduct ={handleAddProduct}
                  product={pd}>

                  </Product>)
                }

            </div>
            <div className='cart-container'>
                <h5>Order Summary</h5>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;