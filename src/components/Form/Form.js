import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  // const [login, setLogin] = useState({})

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setLogin({ 
  //     ...login,
  //     [name]: value 
  //   })
  // }

  // const logueo = () => {
  //   console.log(login)
  // }

  // console.log(data)


  return (
    <form className='w-50 m-5' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")} required />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")} required />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" {...register("name", {minLength: 4})} required />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("check")} required />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <p>{data}</p>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form