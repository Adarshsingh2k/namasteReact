import { useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Body from "./Body";

const Header = () => {
  useEffect(() => {}, []);
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
          <li className="pe-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
