import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/Images/favicon-32x32.png";

export const BrandLogo = () => {
  return (
    <Link to="/">
      <div className="flex gap-5 ">
        <img alt="tulsi" className="rounded-full object-fit" src={Logo} />
        <h1 className="bg-white rounded-full font-bold text-black p-2">
          Food Delivery
        </h1>
      </div>
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart);

  return (
    <div className="z-5 sticky top-0 shadow-gray-300 shadow-lg px-20 w-full h-24 text-xl flex justify-between items-center bg-orange-200 text-white font-Poppins xl:text-lg xl:px-24 lg:text-base lg:px-11 md:px-6 sm:px-1">
      <BrandLogo />

      <ul className="flex justify-between gap-5 ">
        <li>
          <Link className="text-orange-400 hover:text-white" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-orange-400 hover:text-white" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="flex" to="/cart">
            <FaShoppingCart />
            <span className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-base text-orange-200 relative top-[-8] right-1">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
