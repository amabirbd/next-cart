
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'
// import Spinner from '../components/Spinner'
import { useRouter } from 'next/router'

function Register() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  })

  const { name, email, phone, password, password2 } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.error("some error occured while registering")
    }

    if (isSuccess || user) {
      router.push('/')
    }
    
  }, [user, isError, isSuccess, router])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    if (password !== password2) {
      console.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        phone,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    // return <Spinner />
    console.log("loading...");
  }

  return (
    <div className='m-auto w-2/3	'>
      <section className='heading'>
        <h1 className='text-3xl font-bold m-10'>
           Register
        </h1>
        {/* <p>Please create an account</p> */}
      </section>

      <section className='form'>
        <form onSubmit={onSubmit} className="flex flex-col">

          <div className="p-2  flex justify-between">
            <label className="p-2" htmlFor="name">Name</label>
            <input
              className="border border-black px-2"
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
            />
            
          </div>

          <div className="p-2  flex justify-between">
            <label className="p-2" htmlFor="email">Email</label>
            <input
              className="border border-black px-2"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
            />
            
          </div>

          <div className="p-2  flex justify-between">
            <label className="p-2" htmlFor="phone">Phone</label>
            <input
              className="border border-black px-2"
              type="phone"
              name="phone"
              id="phone"
              value={phone}
              onChange={onChange}
            />
            
          </div>

          <div className="p-2  flex justify-between">
            <label className="p-2" htmlFor="password">password</label>
            <input
              className="border border-black px-2"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />
            
          </div>

          <div className="p-2  flex justify-between">
            <label className="p-2" htmlFor="password2">Confirm Password</label>
            <input
              className="border border-black px-2"
              type="password"
              name="password2"
              id="password2"
              value={password2}
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

export default Register
