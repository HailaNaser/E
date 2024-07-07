import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link , Navigate } from 'react-router-dom';
import Nav from '../Components/Nav';


 function Home() {
    const [element , setElement] = useState([]);
    const [search , setSearch] = useState('');

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products/').then((res)=> {
            // console.log(res.data.image)
            console.log(res.data)
            setElement(res.data)
            const filteredElement = element.filter((item)=> (item.title.toLowerCase()).includes(search).toLowerCase())
        })
    },[])

    if(!element){
        <p>no</p>
    }

    

  return (
    
    <div>
        <Nav/>
        <input type="text" value={search}  className='search' onChange={(e)=> setSearch(e.target.value)} placeholder='Search'/>
        <img className='blue' src="https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg" alt="" />
        <div className='content mt-[-30vh] bg-[#eee]'>

        {element.map((el)=> {
            return <div key={el.id} >
                <div className='Box ml-[20px]'>
                    <p className='title '>{el.title}</p>
                    <img className='theImg ' src={el.image} alt="" />
                    <p className='text-[14px] mb-[5px] mt-[20px]'>{el.price}</p>
                    <Link to={`/Details/${el.id}`}>
                    <button className='vewDetail'>View Details</button>
                    </Link>
                </div>
                </div>
        })}
    </div>
    </div>
  )
}

export default Home
