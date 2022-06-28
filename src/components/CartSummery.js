import React from "react";
import { useCart } from "../context/cart/CartContext";
import { Link } from "react-router-dom";
const CartSummery = () => {
  const { state } = useCart();
  const { total, offTotal } = state;

  return (
    <div className=" md:w-1/3 p-4 ">
      <div className="bg-white text-gray-500  shadow-xl rounded-xl p-4 md:mt-8 md:sticky md:top-24">
        <div className="text-sm font-semibold text-center text-gray-700">{"< Summery Cart >"}</div>
        <div className="text-base font-semibold mt-8">
          Total Price without off :<span className="text-xl ">${total}</span>
        </div>
        <div className="text-base font-semibold ">
          amount of discount:<span className="text-xl ">${total - offTotal}</span>
        </div>
        <div className="h-[2px] bg-gray-300 mt-3"></div>
        <div className="text-base font-semibold ">
          Total Price with off :<span className="text-3xl text-green-700">${offTotal}</span>
        </div>
        <Link to="/checkout">
          <button className="text-center w-full flex items-center justify-center bg-gold rounded-lg py-4 px-4 text-secondary text-2xl font-semibold mt-8 shadow-md ">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummery;
