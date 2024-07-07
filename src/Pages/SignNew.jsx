import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 function SignNew() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const navegate = useNavigate()

    const validEmail=(email)=> {
        /!S+@\S+\.\S+/.test(email)
        // /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
        // return
    }


    const handleClick=()=> {
        if(name == '' || name.length < 5){
            alert('The name must be more 5');
            return ;
        }
        if(email == '' || !email.includes('@')){
            alert('Enter valid Email');
            return
        }
        if(pass == '' || pass.length < 6){
            alert('The password must be more 6')
            return
        }
        axios.post('https://6657370d9f970b3b36c86882.mockapi.io/login', {
            Name: name,
            Email: email,
            Password: pass
        }).then((res)=> 
            navegate('/Signin')
        )
    }

  return (
    <div>
 
    <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} className="input input-bordered" required />
        </div>
        {/* end */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="input input-bordered" required />
        </div>
        {/* end */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" value={pass} onChange={(e)=> setPass(e.target.value)} className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#3a91a1] text-[#fff]" onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}


export default SignNew