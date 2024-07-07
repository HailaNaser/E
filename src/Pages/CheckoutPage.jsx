import React, { useState } from 'react'
import { Link } from 'react-router-dom';



 function CheckoutPage() {
    const [address , setAdress] = useState('');
    const [city , setCity] = useState('');
    const [country , setCountry] = useState('')
  return (
    <div>
        <input type='text' placeholder='Enter Your Adress' value={address} onChange={(e)=> setAdress(e.target.value)}></input>
        <input type='text' placeholder='Enter Your City' value={city} onChange={(e)=> setCity(e.target.value)}></input>
        <input type='text' placeholder='Enter Your Country' value={address} onChange={(e)=> setCountry(e.target.value)}></input>
        <Link to='/'>
        <button>Back Home</button>
        </Link>

    </div>

  )
}


export default CheckoutPage