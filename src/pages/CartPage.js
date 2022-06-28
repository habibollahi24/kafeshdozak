import React from "react";
import CartDetails from "../components/CartDetails";
import CartSummery from "../components/CartSummery";
import { useCart } from "../context/cart/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    state: { cart },
  } = useCart();
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center">
      {!cart.length ? (
        <div className="text-3xl text-gray-700 font-semibold text-center  pt-10 ">
          <div>Cart is Empty :(</div>
          <Link to="/" className="text-base underline">
            Go To Home ?
          </Link>
        </div>
      ) : (
        <>
          <CartDetails />
          <CartSummery />
        </>
      )}
    </div>
  );
};

export default CartPage;
