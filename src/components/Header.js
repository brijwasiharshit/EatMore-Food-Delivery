import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import CartSvg from "../utils/SVG/CartSvg";

const Header = () => {
  const [buttonContent, setButtonContent] = useState("🔒login");

  const changeButtonContent = () => {
    buttonContent === "🔒login" ? setButtonContent("🔓logout") : setButtonContent("🔒login");
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between border-2 border-black">
      <div className="p-4">
        <img className="w-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex text-center ">
          <li className="p-4 font-semibold sm:text-lg hover:scale-110">
            <Link className="nav-link" to="/">
              <span role="img" aria-label="home">
                🏠
              </span>
              Home
            </Link>
          </li>
          <li className="p-4 font-semibold sm:text-lg hover:scale-110">
            <Link className="nav-link" to="/about">
             <span>ℹ️</span> AboutUs
            </Link>
          </li>
          <li className="p-4 font-semibold sm:text-lg hover:scale-110">
            <Link className="nav-link" to="/contact">
              <span role="img" aria-label="contact">
                📞
              </span>
              Contact
            </Link>
          </li>
          <li className="p-4 font-bold text-lg hover:scale-110">
            <Link className="nav-link" to="/cart">
              <CartSvg number={cartItems.length} />
            </Link>
          </li>
          <button
            className="p-4 mb-5 mx-3 sm:text-lg hover:scale-110"
            onClick={() => {
              changeButtonContent();
            }}
          >
            {buttonContent}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
