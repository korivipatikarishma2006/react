import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [mobile, setMobile] = useState("")

  const navigate=useNavigate()

  function handleRegister(e) {
    e.preventDefault()
    console.log("you have suuccessfully registered")
   let newUser={name,email,mobile:Number(mobile),password,address}
     console.log(newUser);
     console.log(import.meta.env)
console.log(import.meta.env.VITE_API_BACKEND)

    axios.post("https://react-4kur.onrender.com/api/create-user",newUser)
      .then((res)=>{
        console.log(res.data)
        if(res.data.status===201){
          navigate("/login")
        }
      })
    setName("")
    setEmail("")
    setPassword("")
    setAddress("")
    setMobile("")
  }
  return (
    <div className='container mt-4' >
      <div className='row'>
        <form onSubmit={handleRegister} className='col-12 col-md-6'>
          <h2>Register</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" name="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" name="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          
          <div className="mb-3">
            <label className="form-label">mobile</label>
            <input type="text" className="form-control" name="mobile"  value={mobile} onChange={(e)=>setMobile(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" name="Address"  value={address} onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className='mb-3'>
            <button className='btn btn-outline-success btn-lg'>submit</button>
          </div>
        </form>
      </div>
   </div >
  )
}
