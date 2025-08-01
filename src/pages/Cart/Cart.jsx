import React, { useContext } from 'react' // Added useContext here
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'; // Assuming this is the path to your StoreContext
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext); // Corrected useContext
const navigate=useNavigate();
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

 {food_list.map((item,index) => {
    if (cartItems[item._id] > 0) {
      return (
        <div>
        <div className="cart-items-title cart-items-item" key={item.id}>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
          <p>$ {item.price}</p>
          <p>{cartItems[item._id]}</p>
          <p onClick={()=>removeFromCart(item._id)} className='cross'>$ {item.price * cartItems[item._id]}</p>
          <p>X</p>
        </div>
        <hr/>
        </div>
      );
    }
  })}
</div>
<div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart Total</h2>
    <div>
      <hr />
      <div className="cart-total-details">
        <p>SubTotal</p>
        <p>$ {getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>$ {getTotalCartAmount()===0?0:2}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <b>Total</b>
        <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
      </div>
      <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
  </div>
  <div className="cart-promocode">
    <div>
      <p>If you have a promo code,Enter it here</p>
      <div className="cart-promocode-input">
        <input type="text" placeholder='promo code' />
        <button>Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart