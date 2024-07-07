import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

 function Signin() {
    const [theEmail , setTheEmail] = useState('');
    const [thePass , setThePass] = useState('');
    const [valid , setValid] = useState(false);
    const navegate = useNavigate();
    // const id = localStorage.getItem

    useEffect(()=> {
        if(valid){
            axios.get(`https://6657370d9f970b3b36c86882.mockapi.io/login`).then((res)=> {
                const information = res.data;
                console.log(information)
                const result = information.find((el)=> el.Email == theEmail && el.Password == thePass);
                // console.log(el.Email)
                // console.log(el.thePass)
                if(result){
                    localStorage.setItem("userId" , result.id)
                    localStorage.setItem('Name' , result.Name);
                    navegate('/')
                }
            })
        }
    })

    const handleClick =()=> {
        setValid(true)
    }
  return (
    <div>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" value={theEmail} onChange={(e)=> setTheEmail(e.target.value)} className="input input-bordered" required />
        </div>
        {/* end */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" value={thePass} onChange={(e)=> setThePass(e.target.value)} className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
 </div>
  )
}


export default Signin