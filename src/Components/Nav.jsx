import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav bg-[#232f3f] h-[90px] '>
        <div className="logo">
            <img className='h-[80px]  w-[100px]' src="data:image/png;base64,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" alt="" />

        </div>
        <div className="sign flex text-[#fff]">
            <Link to='/ShoppingCard'>
            <div>
            <li>Card    <i class="fa-solid fa-basket-shopping"></i></li>
         
            </div>
       
            </Link>
           
            {/* <img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg" alt="" /> */}
            <Link to='/Signin'>
            <li>Login</li>
            </Link>
            <Link to='/SignNew'>
            <li>SignUp</li></Link>
       
        </div>
        {/* <div>

        </div> */}
    </div>
  )
}


export default  Nav