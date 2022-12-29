import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { login } from '../../features/auth/authSlice'
// import Spinner from '../components/Spinner'

function Login() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.error("some error occured while logging in")
    }

    if (isSuccess || user) {
      router.push('/')
    }
    
  }, [user, isSuccess, isError, router])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    // return <Spinner />
    console.log("loading...");
  }

  return (
    <div className="m-auto w-2/3	" >
      <section className='heading'>
        <h1 className='text-3xl font-bold m-10'>
         Login
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit} className="flex flex-col   ">
          <div className="p-2 flex justify-between">
          <label className="p-2" htmlFor="email">Email</label>
            <input
              type='email'
              className="border border-black px-2"
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className="p-2 flex justify-between">
          <label className="p-2" htmlFor="password">Password</label>
            <input
              type='password'
              className="border border-black px-2"
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

            <button type='submit' className="mt-5 py-2 px-4 border border-blue-500 rounded">
              Submit
            </button>
        </form>
      </section>
    </div>
  )
}

export default Login
