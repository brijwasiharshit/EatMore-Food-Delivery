import { useContext, useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

  const [buttonContent, setButtonContent] = useState("login");

  const changeButtonContent = () => {
    buttonContent === "login" ? setButtonContent("logout") : setButtonContent("login");
  };


const cartItems = useSelector((store) => store.cart.items);
    return (
    <div className="flex justify-between border-2 border-black">
    <div className="p-4" >
    <img  className = "w-24" src ={LOGO_URL} alt = 'logo' />
    </div>
    <div  className="flex items-center">
      <ul className="flex">
        <li className="p-4"><Link className="nav-link" to = '/'>Home</Link></li>
        <li className="p-4"><Link className="nav-link" to = '/about'>About Us</Link></li>
        <li className="p-4"><Link className="nav-link" to = '/contact'>Contact Us</Link></li>
        <li className="p-4 font-bold"> 
        <Link className="nav-link" to = '/cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
 ({cartItems.length})
        </Link>
        </li>
        <button className="p-4 mb-5" onClick={() => {changeButtonContent()}}>
          {buttonContent}
        </button>
       
      </ul>
    </div>
  </div>
  );
  }

export default Header;

