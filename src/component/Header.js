import { useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Body from "./Body";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // useEffect(() => { }, []);

  const loggedUserContext = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-900 text-slate-100 shadow-lg rounded-md ">
      <div className="logo-container ">
        <img className="w-20" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 ">
          <li className="pe-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="pe-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pe-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="pe-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pe-4">
            <Link to="/cart"> Cart -{cartItems.length}</Link>
          </li>
          <li className="px-4 font-bold">{loggedUserContext.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
