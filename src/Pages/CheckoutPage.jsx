import React, { useState } from 'react'


// Collect shipping information (address, city, country) and payment details.
// - Implement a “Place Order” button to complete the purchase.
// - When the purchase is completed, a model 
 function CheckoutPage() {
    const [address , setAdress] = useState('');
    const [city , setCity] = useState('');
    const [country , setCountry] = useState('')
  return (
    <div>
        <input type='text' placeholder=''></input>
    </div>
  )
}


export default CheckoutPage