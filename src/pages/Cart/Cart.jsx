import React, { useContext } from 'react' // Added useContext here
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'; // Assuming this is the path to your StoreContext

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext); // Corrected useContext

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default Cart