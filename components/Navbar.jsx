import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import cart from '../pages/cart'

function Navbar() {
    const router = useRouter()
    const dispatch = useDispatch()
    
    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()

    const cart = useSelector((state) => state.cart)
    console.log("cart: ", cart);

    useEffect(() => {

        var user = {}
        //   const {user} = useSelector((state) => state.auth)
        if (typeof window !== 'undefined') {
            user = JSON.parse(localStorage.getItem('user'))
            setUser(user)
        }
        console.log(user)

    }, [isLoggedIn])

    const handleLogout = () => {
        console.log("log out clicked")
        dispatch(logout())
        setIsLoggedIn(false)
        dispatch(reset())
        router.push("/")
    }
    

  
  return (
    <div className='flex justify-center mb-5 bg-blue-700 text-white'>
        <div className="right flex justify-between ">
            <div className='p-5 font-bold mr-20'>
                <Link href="./">Home</Link>
            </div>
            
            <Link href="/cart">
                <a className="cart p-5">Cart<span className='text-orange-500 font-bold'>({cart.length})</span></a>
            </Link>
            {
                user? 
                        <div className='p-5 '>
                            
                            <Link href="/dashboard">
                                <a href="">Dashboard</a>
                            </Link>
                            <button className='px-5' onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    :

                        <div className='flex'>
                        <Link href="/login">
                            <a className="login p-5">login</a>
                        </Link>
                        <Link href="/registration">
                            <a className="register p-5">register</a>
                        </Link>
                        </div>
            }
        </div>
    </div>
  )
}

export default Navbar