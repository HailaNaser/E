import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';



 function ShoppingCard() {
    const [element , setElement] = useState('');
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=> {
            // console.log(res.data.image)
            console.log(res.data)
            setElement(res.data)
            
    
           
        })
    },[id])
  return (
    <div>ShoppingCard</div>
  )
}

export default ShoppingCard