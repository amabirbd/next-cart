import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../../components/CartItem';
import { clear } from '../../features/cart/cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart)
  console.log("cart: ", cart);
  const [isCartEmpty, setIsCartEmpty] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if(cart.length > 0) {
      setIsCartEmpty(false)
    }
  }, [cart])
  
  
  return (
    <>
      <h1 className='text-3xl text-center '>
          Cart
        </h1>
        <div className='m-auto w-2/3'>
          <div className='  border-black p-5'>
          
            <div className=''>
              {
                cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))
              }
            </div>
          </div>
            <div className='content-end items-end flex justify-end'>
              <div>

              </div>
              <button onClick={()=>{dispatch(clear())}} className='bg-blue-800 text-white px-5 py-2 rounded m-5'>Reset</button>
              <button className='bg-blue-800 text-white px-5 py-2 rounded m-5'>Order</button>
            </div>
          </div>
      
    </>
  ) 
}

export default Cart;