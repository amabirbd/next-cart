import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/cart/cartSlice'

function CartItem({item}) {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-between m-2 p-2'>
        <div >
            {item.title}({item.quantity})
        </div>
        <div className='flex'>
            <button onClick={()=>dispatch(decrement(item.id))} className='px-3 mx-2 text-2xl font-bold bg-blue-300 rounded hover:bg-blue-600 transition ease-in-out'>-</button>
            <button onClick={()=>dispatch(increment(item.id))} className='px-3 mx-2 text-2xl font-bold bg-blue-300 rounded hover:bg-blue-600 transition ease-in-ou'>+</button>
        </div>

    </div>
  )
}

export default CartItem