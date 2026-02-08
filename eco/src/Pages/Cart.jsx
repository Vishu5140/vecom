import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Modal from '../Components/Modal';
import ChangeAddress from '../Components/ChangeAddress';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cartSlice';
import { increaseQuantity,decreaseQuantity } from '../Redux/cartSlice';
function Cart() {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('Main Street, 0012');
  const[isModeOpen,setisModeOpen]=useState(false);
  const dispatch=useDispatch();
  return (
    <div className="p-4 md:p-8">
      {
        cart.products.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">SHOPPING CART</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left Column: Cart Items */}
              <div className="md:col-span-2">
                <div className="hidden md:flex justify-between font-semibold text-gray-700 border-b pb-2 mb-2">
                  <p className="w-1/3">Products</p>
                  <div className="flex w-2/3 justify-between">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                    <p>Remove</p>
                  </div>
                </div>

                {cart.products.map((product, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center justify-between mb-4 border-b pb-4">
                    <div className="flex items-center w-full md:w-1/3">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                      <h4 className="text-lg font-medium">{product.name}</h4>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full md:w-2/3 items-center text-center md:text-left gap-4 mt-2 md:mt-0">
                      <p className="w-20">${product.price}</p>
                      <div className="flex items-center space-x-2">
                        <button className="px-2 py-1 bg-gray-200 rounded" onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                        <p>{product.quantity}</p>
                        <button className="px-2 py-1 bg-gray-200 rounded" onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                      </div>
                      <p className="w-24">${(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-600 hover:text-red-800" onClick={()=> dispatch(removeFromCart(product.id))}><FaTrashAlt /></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Cart Summary */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">CART TOTAL</h3>
                <div className="flex justify-between mb-2">
                  <span>Total Items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className="mb-4">
                  <p className="mb-1">Shipping:</p>
                  <p className="text-sm text-gray-600">Shipping to:</p>
                  <span className="block text-sm mb-2">{address}</span>
                  <button className="text-blue-600 text-sm underline" onClick={()=>setisModeOpen(true)}>Change address</button>
                </div>
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Total Price:</span>
                  <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition" >
                  Proceed to Checkout
                </button>
              </div>
            </div>
            <Modal isModeOpen={isModeOpen} setisModeOpen={setisModeOpen}>
                <ChangeAddress setAddress={setAddress} setisModeOpen={setisModeOpen}/>
            </Modal>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen text-gray-500">
            <MdOutlineRemoveShoppingCart className="text-8xl mb-4" />
            <p className="text-xl">Your cart is empty.</p>
          </div>
        )
      }
    </div>
  );
}

export default Cart;
