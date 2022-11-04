import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState("");

  // const [login, setLogin] = useState({})

  // const handleChange = (event) => {
  //   const { name, value} = event.target
  //   setLogin({
  //     ...login, 
  //     [name]: value })
  // }

  // const logueo = () => {
  //   console.log(login)
  // }

  console.log(data)

  return (
    <form className='w-50 m-5' onSubmit={handleSubmit((data) => setData((data)))}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" {...register('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" {...register('check')} className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form