import axios from 'axios';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import React, { useEffect, useState  } from 'react';
import Nav from '../Components/Nav';

 function Details() {
    const [detail , setDetails] = useState([]);
    const {id} = useParams();
    const [prodect , setProdect] = useState([])
    

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=> {
            const info = res.data;
            console.log(res.data)
            // const result = res.data.find((el)=> el.id === parseInt(id))
            // console.log(result)
            // setDetails(result)
            setDetails(res.data)
        })
    },[id])

    const addToCard =()=> {
        const allProdect = []
        const idUser = localStorage.getItem('userId')
        axios.put(`https://6657370d9f970b3b36c86882.mockapi.io/login/${id}`).then((res)=> {
            // prodect : 
        })
    }

    if(!detail){
        <p>...</p>
    }

  return (
    <div className='details'>
        {/* <Nav/> */}
        <div className='content-details flex'>
            <div>
            <img className='img w-[200px] h-[200px]' src={detail.image} alt="" />
            </div>
        <div>
            <div>{detail.title}</div>
            <div>{detail.price}</div>
            <div className='w-[40vw] description'>{detail.description}</div>
            <Link to={`/ShoppingCard/${detail.id}`}>
            <button onClick={addToCard}>Add To Card</button>
            </Link>
    
            <Link to='/'>
            <button>Back to Home</button>
            </Link>
        </div>
 
       
        </div>
    </div>
  )
}


export default Details